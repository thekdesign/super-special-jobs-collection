// 職業分類（像素 RPG 屬性風格）
export const categories = [
    {
        key: 'all',
        label: '全部',
        labelEn: 'ALL',
        icon: '★',
        badgeClass: 'pixel-badge--gold',
    },
    {
        key: 'mystic',
        label: '玄學系',
        labelEn: 'MYSTIC',
        icon: '🔮',
        badgeClass: 'pixel-badge--magenta',
    },
    {
        key: 'animal',
        label: '動植物系',
        labelEn: 'NATURE',
        icon: '🐾',
        badgeClass: 'pixel-badge--mint',
    },
    {
        key: 'wellness',
        label: '身心靈系',
        labelEn: 'SPIRIT',
        icon: '✨',
        badgeClass: 'pixel-badge--sky',
    },
    {
        key: 'relationship',
        label: '人際情感系',
        labelEn: 'HEART',
        icon: '💘',
        badgeClass: 'pixel-badge--crimson',
    },
    {
        key: 'lifestyle',
        label: '生活風格系',
        labelEn: 'LIFE',
        icon: '🏠',
        badgeClass: 'pixel-badge--panel',
    },
    {
        key: 'urban',
        label: '都市傳說系',
        labelEn: 'URBAN',
        icon: '👁',
        badgeClass: 'pixel-badge',
    },
];

export const getCategory = (key) => categories.find((c) => c.key === key) ?? categories[0];
