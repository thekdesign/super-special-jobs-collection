// 像素 RPG 8-bit 配色：森林古錠風 — 深森林綠 × 塔薰黃 × 豆沙橘
// key 名延用原先 (night/panel/magenta/gold/mint/crimson/sky/ink)，方便不動元件就換色
export default {
    content: ['./resources/**/*.{vue,html}'],

    theme: {
        extend: {
            colors: {
                // [前身 night] 主背景：深森林綠（古錠夜色）
                night: {
                    50: '#a8c4b3', 100: '#84a691', 200: '#608672', 300: '#436855',
                    400: '#2e4f3f', 500: '#1f3a31', 600: '#162b23', 700: '#0e1f1a', // 主背景
                    800: '#091410', 900: '#040a08',
                },
                // [前身 panel] 面板色：苔蘚林地綠
                panel: {
                    50: '#dde9d8', 100: '#bcd2b3', 200: '#94b487', 300: '#6d9663',
                    400: '#507846', 500: '#3b5d34', 600: '#2c4727', 700: '#20351c',
                    800: '#162512', 900: '#0b150a',
                },
                // 主筆觸：羊皮卷象牙白 / 米黃，做為文字主色
                ink: {
                    50: '#fffdf2', 100: '#fbf3d8', 200: '#f1e3ad', 300: '#e2cd80',
                    400: '#cdb358', 500: '#a8923c', 600: '#7d6c2a', 700: '#54481c',
                    800: '#332c10', 900: '#1d1808',
                },
                // [前身 magenta] CTA 強調：豆沙橘 / 古錠紅磚
                magenta: {
                    50: '#fae1d6', 100: '#f5bba7', 200: '#ee9577', 300: '#e57350',
                    400: '#d45b3b', // 主 CTA
                    500: '#b04527', 600: '#8a341a', 700: '#642510', 800: '#3f1608', 900: '#220a03',
                },
                // 金色：塔薰黃，等級、星級、副強調
                gold: {
                    50: '#fff7d6', 100: '#fdec9b', 200: '#f9d970', 300: '#f4c95d', // 主強調黃
                    400: '#dca838', 500: '#b58620', 600: '#88641a', 700: '#5c4413', 800: '#352709', 900: '#1c1404',
                },
                // 薄荷綠：成功、回血、HP（淺一點配合森林背景）
                mint: {
                    50: '#e6f7ec', 100: '#c7eed1', 200: '#a4e3b3', 300: '#88c7a8', // 主成功色
                    400: '#5fa881', 500: '#3f885f', 600: '#2c6948', 700: '#1d4a32', 800: '#11301f', 900: '#06170e',
                },
                // 危險紅：橘紅警告
                crimson: {
                    50: '#fcdfd6', 100: '#f6b6a3', 200: '#ef8e74', 300: '#e87454', // 主警告色
                    400: '#cf5232', 500: '#a73a1f', 600: '#7e2913', 700: '#561a09', 800: '#330e04', 900: '#1a0501',
                },
                // 天空藍：MP、冰系（保留以區別狀態色，但稍微偏綠青）
                sky: {
                    50: '#dff5ee', 100: '#b1e3d3', 200: '#7ecdb3', 300: '#52b395', 400: '#2f9377',
                    500: '#1f7660', 600: '#155a49', 700: '#0b3d31', 800: '#06241d', 900: '#01100c',
                },
            },
            fontFamily: {
                pixel: ['"Press Start 2P"', '"DotGothic16"', '"Noto Sans TC"', 'system-ui', 'monospace'],
                body: ['"DotGothic16"', '"Noto Sans TC"', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['"VT323"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },
            boxShadow: {
                // 8-bit 陰影：硬邊偏移，無模糊（配合森林夜深綠）
                'pixel-sm': '4px 4px 0 0 #040a08',
                pixel: '6px 6px 0 0 #040a08',
                'pixel-lg': '8px 8px 0 0 #040a08',
                'pixel-terra': '4px 4px 0 0 #642510',
                'pixel-gold': '4px 4px 0 0 #88641a',
                'pixel-inset': 'inset 0 0 0 4px #fbf3d8, inset 0 0 0 8px #0e1f1a',
            },
            keyframes: {
                blink: {
                    '0%, 49%': {opacity: '1'},
                    '50%, 100%': {opacity: '0'},
                },
                'press-bounce': {
                    '0%, 100%': {transform: 'translateY(0)'},
                    '50%': {transform: 'translateY(4px)'},
                },
                'pixel-float': {
                    '0%, 100%': {transform: 'translateY(0)'},
                    '50%': {transform: 'translateY(-6px)'},
                },
                'scanline': {
                    '0%': {transform: 'translateY(0)'},
                    '100%': {transform: 'translateY(100vh)'},
                },
                shake: {
                    '0%, 100%': {transform: 'translateX(0)'},
                    '25%': {transform: 'translateX(-2px)'},
                    '75%': {transform: 'translateX(2px)'},
                },
            },
            animation: {
                blink: 'blink 1s steps(2) infinite',
                'press-bounce': 'press-bounce 0.6s steps(2) infinite',
                'pixel-float': 'pixel-float 2.4s steps(8) infinite',
                scanline: 'scanline 6s linear infinite',
                shake: 'shake 0.3s steps(4)',
            },
        },
    },

    corePlugins: {
        preflight: false,
    },
};
