<template>
    <div class="flex flex-col min-h-screen relative">
        <header class="relative z-10 border-b-4 border-double border-magenta-400/40 bg-night-900/85 backdrop-blur-sm">
            <div class="rpg-shell flex flex-wrap items-center justify-between gap-3 py-4">
                <RouterLink
                    :to="{name: 'HOME_INDEX'}"
                    class="flex items-center gap-3 group select-none"
                >
                    <div
                        class="w-10 h-10 bg-magenta-400 flex items-center justify-center text-xl"
                        :style="{boxShadow: 'inset -2px -2px 0 0 #642510, inset 2px 2px 0 0 #f5bba7'}"
                    >
                        🎮
                    </div>
                    <div class="leading-tight">
                        <div class="font-pixel-en text-magenta-300 text-[14px] tracking-[2px] group-hover:text-gold-300 transition-colors">
                            SUPER SPECIAL JOBS
                        </div>
                        <div class="font-body text-ink-200 text-[11px] tracking-widest">
                            特別職業圖鑑 · {{ jobCount }} 名挑戰者
                        </div>
                    </div>
                </RouterLink>

                <nav class="flex items-center gap-2">
                    <RouterLink
                        :to="{name: 'HOME_INDEX'}"
                        class="pixel-btn pixel-btn--ghost"
                        exact-active-class="!bg-magenta-400 !text-ink-50"
                    >
                        圖鑑
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'ABOUT_INDEX'}"
                        class="pixel-btn pixel-btn--ghost"
                        exact-active-class="!bg-magenta-400 !text-ink-50"
                    >
                        關於
                    </RouterLink>
                </nav>
            </div>
        </header>

        <main class="flex-1 w-full relative z-10">
            <RouterView v-slot="{Component}">
                <Transition name="rpg-fade" mode="out-in">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </main>

        <footer class="relative z-10 mt-12 border-t-4 border-double border-magenta-400/30 bg-night-900/85">
            <div class="rpg-shell py-6 text-center space-y-2">
                <div class="font-pixel-en text-[10px] text-ink-300 tracking-widest">
                    © {{ year }} SUPER SPECIAL JOBS · MADE WITH ❤️ + JS
                </div>
                <div class="font-body text-ink-300 text-xs leading-relaxed max-w-xl mx-auto">
                    本圖鑑收錄之職業皆無證照、無教科書、無國家認證。內容為一般性介紹兼幽默觀察，請勿認真，更不要拿來當人生重大決策依據。
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import {jobs} from 'data/jobs';

export default {
    name: 'AppContainer',
    computed: {
        year() {
            return new Date().getFullYear();
        },
        jobCount() {
            return jobs.length;
        },
    },
};
</script>

<style>
.rpg-fade-enter-active,
.rpg-fade-leave-active {
    transition: opacity 200ms steps(4), transform 200ms steps(4);
}
.rpg-fade-enter-from {
    opacity: 0;
    transform: translateY(6px);
}
.rpg-fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
