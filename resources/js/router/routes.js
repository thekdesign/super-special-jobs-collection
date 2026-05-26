import {PageRoute} from 'enums/navigation/PageRoute';

export const routes = [
    // OG preview pages — for screenshot generation, no app shell, not indexed
    {
        path: '/og/home',
        name: PageRoute.OG_HOME.key,
        component: () => import('components/pages/og/OgHome.vue'),
        meta: {title: 'OG · home', og: false},
    },
    {
        path: '/og/job/:slug',
        name: PageRoute.OG_JOB.key,
        component: () => import('components/pages/og/OgJob.vue'),
        meta: {title: 'OG · job', og: false},
    },
    // Main app
    {
        path: '/',
        component: () => import('components/app/AppContainer.vue'),
        children: [
            {
                path: '',
                name: PageRoute.HOME_INDEX.key,
                component: () => import('components/pages/home/HomeIndex.vue'),
                meta: {title: '特別職業圖鑑'},
            },
            {
                path: 'job/:slug',
                name: PageRoute.JOB_DETAIL.key,
                component: () => import('components/pages/detail/JobDetail.vue'),
                meta: {title: '職業檔案'},
            },
            {
                path: 'about',
                name: PageRoute.ABOUT_INDEX.key,
                component: () => import('components/pages/about/AboutIndex.vue'),
                meta: {title: '關於圖鑑'},
            },
            {
                path: '404',
                name: PageRoute.NOT_FOUND.key,
                component: () => import('components/pages/NotFound.vue'),
                meta: {title: '迷路了'},
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: {name: PageRoute.NOT_FOUND.key},
    },
];
