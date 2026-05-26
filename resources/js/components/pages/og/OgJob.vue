<template>
    <div v-if="job" class="og-card og-card--job">
        <!-- 外框（金色像素邊） -->
        <div class="og-frame">
            <div class="og-frame-inner">
                <!-- 左側：emoji 大圖 -->
                <div class="og-emoji">
                    {{ job.emoji }}
                </div>

                <!-- 右側：metadata -->
                <div class="og-info">
                    <div class="og-tag">NO.{{ paddedId }} · {{ job.nameEn }}</div>
                    <h1 class="og-title">{{ job.name }}</h1>
                    <div class="og-badge" :style="badgeStyle">
                        <span>{{ cat.icon }}</span>
                        <span>{{ cat.labelEn }}</span>
                        <span class="og-badge-zh">{{ cat.label }}</span>
                    </div>
                    <div class="og-tagline">
                        「{{ job.tagline }}」
                    </div>
                    <div class="og-stats">
                        <div class="og-stat">
                            <div class="og-stat-label og-stat-gold">AURA</div>
                            <div class="og-stat-stars og-stat-gold">{{ stars(job.aura) }}</div>
                        </div>
                        <div class="og-stat">
                            <div class="og-stat-label og-stat-magenta">WTF?</div>
                            <div class="og-stat-stars og-stat-magenta">{{ stars(job.absurdity) }}</div>
                        </div>
                        <div class="og-stat">
                            <div class="og-stat-label og-stat-mint">USE</div>
                            <div class="og-stat-stars og-stat-mint">{{ stars(job.realness) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部品牌 -->
        <div class="og-brand">
            <span class="og-brand-icon">🎮</span>
            <span class="og-brand-text">SUPER SPECIAL JOBS</span>
            <span class="og-brand-sub">· 特別職業圖鑑</span>
        </div>
    </div>
</template>

<script>
import {getJobBySlug} from 'data/jobs';
import {getCategory} from 'data/categories';

const CATEGORY_TINT = {
    mystic: '#d45b3b',
    animal: '#5fa881',
    wellness: '#2f9377',
    relationship: '#cf5232',
    lifestyle: '#3b5d34',
    urban: '#2e4f3f',
};

export default {
    name: 'OgJob',
    computed: {
        slug() {
            return this.$route.params.slug;
        },
        job() {
            return getJobBySlug(this.slug);
        },
        cat() {
            return getCategory(this.job?.category);
        },
        paddedId() {
            return String(this.job?.id ?? 0).padStart(3, '0');
        },
        badgeStyle() {
            return {
                background: CATEGORY_TINT[this.job?.category] ?? '#3b5d34',
                color: '#fffdf2',
                border: '3px solid #fbf3d8',
            };
        },
    },
    methods: {
        stars(n) {
            return '◆'.repeat(n) + '◇'.repeat(5 - n);
        },
    },
};
</script>

<style scoped>
.og-card {
    width: 1200px;
    height: 630px;
    background:
        radial-gradient(2px 2px at 12% 18%, #f4c95d 50%, transparent 51%),
        radial-gradient(2px 2px at 78% 30%, #fbf3d8 50%, transparent 51%),
        radial-gradient(2px 2px at 32% 70%, #88c7a8 50%, transparent 51%),
        radial-gradient(2px 2px at 88% 82%, #f4c95d 50%, transparent 51%),
        radial-gradient(2px 2px at 55% 12%, #f1e3ad 50%, transparent 51%),
        linear-gradient(180deg, #162b23 0%, #0e1f1a 60%, #091410 100%);
    position: relative;
    overflow: hidden;
    font-family: 'DotGothic16', 'Noto Sans TC', 'PingFang TC', system-ui, sans-serif;
    color: #fbf3d8;
    box-sizing: border-box;
}

.og-frame {
    position: absolute;
    inset: 36px 36px 96px 36px;
    background: #162b23;
    box-shadow:
        inset 0 0 0 4px #f4c95d,
        inset 0 0 0 8px #162b23,
        inset 0 0 0 12px #f4c95d;
    padding: 36px 40px;
    box-sizing: border-box;
}

.og-frame-inner {
    display: flex;
    gap: 36px;
    height: 100%;
    align-items: center;
}

.og-emoji {
    width: 260px;
    height: 260px;
    flex-shrink: 0;
    background: #091410;
    box-shadow: inset 0 0 0 4px #fbf3d8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 180px;
    line-height: 1;
}

.og-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.og-tag {
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    color: #f4c95d;
    font-size: 18px;
    letter-spacing: 2px;
}

.og-title {
    font-family: 'DotGothic16', 'Noto Sans TC', 'PingFang TC', sans-serif;
    color: #fbf3d8;
    font-size: 72px;
    font-weight: 900;
    line-height: 1.05;
    margin: 0;
}

.og-badge {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    font-size: 14px;
    letter-spacing: 1px;
}
.og-badge-zh {
    font-family: 'DotGothic16', 'Noto Sans TC', 'PingFang TC', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
}

.og-tagline {
    color: #f1e3ad;
    font-size: 26px;
    line-height: 1.4;
    margin-top: 4px;
    padding-left: 8px;
    border-left: 6px solid #d45b3b;
}

.og-stats {
    display: flex;
    gap: 24px;
    margin-top: 8px;
}

.og-stat {
    background: #091410;
    padding: 12px 16px;
    box-shadow: inset 0 0 0 3px currentColor;
}

.og-stat-label {
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 6px;
}
.og-stat-stars {
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    font-size: 22px;
    letter-spacing: 2px;
}

.og-stat-gold { color: #f4c95d; }
.og-stat-magenta { color: #d45b3b; }
.og-stat-mint { color: #88c7a8; }

.og-brand {
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    color: #d45b3b;
    font-size: 18px;
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}
.og-brand-icon { font-size: 24px; }
.og-brand-sub {
    font-family: 'DotGothic16', 'Noto Sans TC', 'PingFang TC', sans-serif;
    color: #f1e3ad;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 2px;
}
</style>
