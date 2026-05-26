import {useHead} from '@unhead/vue';

const SITE_NAME = 'Super Special Jobs';
const SITE_URL = 'https://super-special-jobs.vercel.app';
const DEFAULT_OG = '/og/home.png';

// 設定整頁 SEO / OG meta。傳 reactive 或 plain object 皆可。
//   title       完整標題（會顯示在分頁與分享卡）
//   description 描述
//   ogImage     /og/xxx.png（相對路徑，會自動接上 SITE_URL）
//   path        路徑（用於 canonical 與 og:url）
export function useSiteHead(opts) {
    useHead(() => {
        const o = typeof opts === 'function' ? opts() : opts;
        const title = o.title ?? SITE_NAME;
        const description = o.description ?? '收集現代社會那些沒有專業執照、但你身邊就有人在做的職業，像素 RPG 風格幽默圖鑑。';
        const ogImage = o.ogImage ?? DEFAULT_OG;
        const path = o.path ?? '/';
        const absoluteImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
        const url = `${SITE_URL}${path}`;

        return {
            title,
            meta: [
                {name: 'description', content: description},
                {property: 'og:title', content: title},
                {property: 'og:description', content: description},
                {property: 'og:image', content: absoluteImage},
                {property: 'og:url', content: url},
                {property: 'og:type', content: 'website'},
                {property: 'og:site_name', content: SITE_NAME},
                {property: 'og:locale', content: 'zh_TW'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: title},
                {name: 'twitter:description', content: description},
                {name: 'twitter:image', content: absoluteImage},
            ],
            link: [
                {rel: 'canonical', href: url},
            ],
        };
    });
}

export const SITE = {NAME: SITE_NAME, URL: SITE_URL, DEFAULT_OG};
