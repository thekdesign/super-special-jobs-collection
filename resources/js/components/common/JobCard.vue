<template>
    <RouterLink
        :to="{name: 'JOB_DETAIL', params: {slug: job.slug}}"
        class="pixel-frame pixel-frame--panel block transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] focus:outline-none"
    >
        <header class="flex items-start justify-between gap-3 mb-3">
            <div class="font-pixel-en text-[10px] text-gold-300 leading-tight">
                <div>NO.{{ paddedId }}</div>
                <div class="text-ink-300 text-[8px] mt-1">{{ job.nameEn }}</div>
            </div>
            <CategoryBadge :category-key="job.category" />
        </header>

        <div class="flex items-center gap-4 mb-3">
            <div
                class="w-16 h-16 flex items-center justify-center text-4xl bg-night-800 shrink-0"
                :style="{boxShadow: 'inset 0 0 0 2px #fbf3d8'}"
            >
                {{ job.emoji }}
            </div>
            <div class="min-w-0">
                <h3 class="font-body font-bold text-ink-50 text-lg leading-tight mb-1 break-words">
                    {{ job.name }}
                </h3>
                <p class="text-ink-200 text-xs leading-snug line-clamp-2">{{ job.tagline }}</p>
            </div>
        </div>

        <div class="flex items-center justify-between gap-2 pt-3 border-t-2 border-dotted border-night-400">
            <div class="text-[10px] font-pixel-en text-ink-300 flex flex-col gap-1">
                <div class="flex items-center gap-2">
                    <span class="w-12 text-gold-300">AURA</span>
                    <StarMeter :value="job.aura" tone="gold" />
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-12 text-magenta-300">WTF?</span>
                    <StarMeter :value="job.absurdity" tone="magenta" />
                </div>
            </div>
            <span class="font-pixel-en text-[9px] text-mint-200 leading-tight animate-blink">
                ▶ 進入
            </span>
        </div>
    </RouterLink>
</template>

<script>
import CategoryBadge from 'components/common/CategoryBadge.vue';
import StarMeter from 'components/common/StarMeter.vue';

export default {
    name: 'JobCard',
    components: {CategoryBadge, StarMeter},
    props: {
        job: {type: Object, required: true},
    },
    computed: {
        paddedId() {
            return String(this.job.id).padStart(3, '0');
        },
    },
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
