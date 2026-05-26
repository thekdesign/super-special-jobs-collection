// 生成 OG 圖：先啟動 vite dev server（獨立 port 8084），
// 再用本機 Chrome --headless 對每個 OG 預覽路由截 1200x630 PNG。
// 不需要 puppeteer，所以無需下載 chromium。
import {execSync, spawn} from 'node:child_process';
import {existsSync, mkdirSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import http from 'node:http';

const projectRoot = path.resolve(process.cwd());
const outDir = path.join(projectRoot, 'resources/template/og');
mkdirSync(outDir, {recursive: true});

const jobsUrl = pathToFileURL(path.join(projectRoot, 'resources/js/data/jobs.js')).href;
const {jobs} = await import(jobsUrl);

const port = 8084;
const baseUrl = `http://localhost:${port}`;

const CHROME =
    process.env.CHROME_PATH ||
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (!existsSync(CHROME)) {
    console.error(`✖ Chrome not found at: ${CHROME}`);
    console.error('  Set CHROME_PATH env var or install Google Chrome.');
    process.exit(1);
}

console.log(`▶ launching vite dev server on :${port}`);
const server = spawn(
    'npx',
    ['vite', '--config', 'scripts/vite-og.config.mjs', '--port', String(port)],
    {cwd: projectRoot, stdio: ['ignore', 'pipe', 'pipe']},
);

let serverReady = false;
server.stdout.on('data', (d) => {
    const s = d.toString();
    if (s.includes('ready') || s.includes(`localhost:${port}`)) serverReady = true;
});
server.stderr.on('data', (d) => process.stderr.write(d));

await waitForServer(baseUrl, 30000);

const targets = [
    {url: `${baseUrl}/og/home`, file: 'home.png', label: 'home'},
    ...jobs.map((j) => ({
        url: `${baseUrl}/og/job/${j.slug}`,
        file: `job-${j.slug}.png`,
        label: `${String(j.id).padStart(3, '0')} ${j.name}`,
    })),
];

console.log(`▶ rendering ${targets.length} OG images …`);
let i = 0;
for (const t of targets) {
    i++;
    const out = path.join(outDir, t.file);
    const cmd = [
        `"${CHROME}"`,
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--hide-scrollbars',
        '--default-background-color=00000000',
        '--window-size=1200,630',
        `--screenshot="${out}"`,
        '--virtual-time-budget=4000',
        `'${t.url}'`,
    ].join(' ');
    try {
        execSync(cmd, {stdio: 'ignore'});
        console.log(`  [${String(i).padStart(2, '0')}/${targets.length}] ${t.file}  ←  ${t.label}`);
    } catch (e) {
        console.error(`  ✖ failed: ${t.file}`, e.message);
    }
}

console.log('▶ shutting down dev server');
server.kill('SIGTERM');
setTimeout(() => server.kill('SIGKILL'), 3000);

console.log(`✔ ${targets.length} OG images written to ${path.relative(projectRoot, outDir)}/`);

async function waitForServer(url, timeoutMs) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        try {
            const ok = await new Promise((resolve) => {
                const req = http.get(url, (res) => {
                    res.resume();
                    resolve(res.statusCode === 200);
                });
                req.on('error', () => resolve(false));
                req.setTimeout(1000, () => {
                    req.destroy();
                    resolve(false);
                });
            });
            if (ok) {
                console.log(`✔ dev server up at ${url}`);
                return;
            }
        } catch {
            // retry
        }
        await new Promise((r) => setTimeout(r, 500));
    }
    throw new Error(`dev server did not become ready at ${url}`);
}
