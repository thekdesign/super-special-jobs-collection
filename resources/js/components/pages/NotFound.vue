<template>
    <div class="rpg-shell text-center py-16">
        <div class="text-7xl mb-6 animate-pixel-float inline-block">🌀</div>
        <h1 class="font-pixel-en text-magenta-300 text-2xl sm:text-3xl tracking-widest mb-4">
            404 · LOST
        </h1>
        <p class="font-body text-ink-200 text-base mb-8 max-w-md mx-auto leading-relaxed">
            這個頁面好像被傳送到別的次元了。
            可能也是「次元穿越師」這個尚未被圖鑑收錄的職業搞的鬼。
        </p>
        <RouterLink :to="{name: 'HOME_INDEX'}" class="pixel-btn pixel-btn--gold">
            ◀ 回圖鑑
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
};
</script>
