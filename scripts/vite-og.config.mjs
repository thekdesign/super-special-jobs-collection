import {mergeConfig} from 'vite';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import dev from '../vite.development.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default mergeConfig(dev, {
    root: path.resolve(__dirname, '..', 'resources/js'),
    server: {
        port: 8084,
        host: '127.0.0.1',
        strictPort: false,
    },
});
