<template>
    <div class="og-card og-card--home">
        <div class="og-frame">
            <div class="og-inner">
                <div class="og-brand">
                    <span class="og-brand-icon">🎮</span>
                    <span class="og-brand-text">SUPER SPECIAL JOBS</span>
                </div>
                <h1 class="og-title">特別職業圖鑑</h1>
                <p class="og-subtitle">
                    現代社會那些<span class="og-accent">沒有專業執照</span>、
                    但你身邊就有人在做的職業
                </p>
                <div class="og-emoji-row">
                    <span v-for="(e, i) in emojis" :key="i" class="og-emoji">{{ e }}</span>
                </div>
                <div class="og-stamp">持續收錄中⋯</div>
            </div>
        </div>
        <div class="og-footer">▶ A PIXEL DEX OF MODERN ODD JOBS</div>
    </div>
</template>

<script>
export default {
    name: 'OgHome',
    data() {
        return {
            emojis: ['🐶', '🌿', '🃏', '🧭', '🎵', '💎', '🌸', '✨', '💕', '🛋', '⏳', '📦'],
        };
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
        radial-gradient(2px 2px at 20% 50%, #d45b3b 50%, transparent 51%),
        radial-gradient(2px 2px at 92% 60%, #88c7a8 50%, transparent 51%),
        linear-gradient(180deg, #162b23 0%, #0e1f1a 60%, #091410 100%);
    position: relative;
    overflow: hidden;
    font-family: 'DotGothic16', 'Noto Sans TC', 'PingFang TC', system-ui, sans-serif;
    color: #fbf3d8;
    box-sizing: border-box;
}

.og-frame {
    position: absolute;
    inset: 36px 36px 84px 36px;
    background: #162b23;
    box-shadow:
        inset 0 0 0 4px #f4c95d,
        inset 0 0 0 8px #162b23,
        inset 0 0 0 12px #d45b3b;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

.og-inner {
    text-align: center;
    padding: 32px 40px;
    width: 100%;
}

.og-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;
}
.og-brand-icon {
    font-size: 40px;
}
.og-brand-text {
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    color: #d45b3b;
    font-size: 32px;
    letter-spacing: 3px;
}

.og-title {
    font-family: 'DotGothic16', 'Noto Sans TC', 'PingFang TC', sans-serif;
    color: #fbf3d8;
    font-size: 96px;
    font-weight: 900;
    line-height: 1.05;
    margin: 0 0 24px;
    letter-spacing: 4px;
    text-shadow: 4px 4px 0 #040a08;
}

.og-subtitle {
    color: #f1e3ad;
    font-size: 28px;
    line-height: 1.4;
    margin: 0 0 28px;
}
.og-accent {
    color: #f4c95d;
    font-weight: 900;
    border-bottom: 4px solid #d45b3b;
    padding: 0 4px;
}

.og-emoji-row {
    display: flex;
    gap: 14px;
    justify-content: center;
    margin: 18px 0 24px;
    flex-wrap: nowrap;
}
.og-emoji {
    font-size: 44px;
    background: #091410;
    box-shadow: inset 0 0 0 2px #fbf3d8;
    width: 64px;
    height: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
}

.og-stamp {
    display: inline-block;
    padding: 10px 28px;
    background: #d45b3b;
    box-shadow: inset 0 0 0 3px #fbf3d8;
    color: #fffdf2;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 3px;
}

.og-footer {
    position: absolute;
    bottom: 28px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: 'Press Start 2P', 'DotGothic16', monospace;
    color: #88c7a8;
    font-size: 14px;
    letter-spacing: 3px;
}
</style>
