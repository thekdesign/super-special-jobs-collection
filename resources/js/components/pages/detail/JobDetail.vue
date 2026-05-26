<template>
    <div class="rpg-shell">
        <template v-if="job">
            <!-- 返回 + 切換 -->
            <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
                <RouterLink :to="{name: 'HOME_INDEX'}" class="pixel-btn pixel-btn--ghost">
                    ◀ 回圖鑑
                </RouterLink>
                <div class="flex items-center gap-2">
                    <RouterLink
                        :to="{name: 'JOB_DETAIL', params: {slug: prev.slug}}"
                        class="pixel-btn pixel-btn--ghost !py-2 !px-3 !text-[9px]"
                    >
                        ◀ {{ prev.name }}
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'JOB_DETAIL', params: {slug: next.slug}}"
                        class="pixel-btn pixel-btn--ghost !py-2 !px-3 !text-[9px]"
                    >
                        {{ next.name }} ▶
                    </RouterLink>
                </div>
            </div>

            <!-- 主卡片 -->
            <article class="pixel-frame pixel-frame--magenta mb-8">
                <header class="flex items-start gap-6 mb-6 flex-wrap">
                    <div
                        class="w-28 h-28 flex items-center justify-center text-6xl bg-night-800 shrink-0 animate-pixel-float"
                        :style="{boxShadow: 'inset 0 0 0 4px #fbf3d8, 4px 4px 0 0 #040a08'}"
                    >
                        {{ job.emoji }}
                    </div>
                    <div class="flex-1 min-w-[200px]">
                        <div class="font-pixel-en text-[10px] text-gold-300 tracking-widest mb-2">
                            NO.{{ paddedId }} · {{ job.nameEn }}
                        </div>
                        <h1 class="font-body font-bold text-3xl sm:text-4xl text-ink-50 mb-3 leading-tight">
                            {{ job.name }}
                        </h1>
                        <CategoryBadge :category-key="job.category" />
                    </div>
                </header>

                <div class="dialog-box mb-6">
                    <div class="font-pixel-en text-[9px] text-magenta-500 tracking-widest mb-2">
                        ▶ TAGLINE
                    </div>
                    <p class="font-body text-base sm:text-lg text-night-800 leading-relaxed pr-6">
                        {{ job.tagline }}
                    </p>
                </div>

                <!-- 數值面板 -->
                <div class="grid sm:grid-cols-3 gap-3 mb-6">
                    <div class="bg-night-800 p-4" :style="{boxShadow: 'inset 0 0 0 2px #f4c95d'}">
                        <div class="font-pixel-en text-[9px] text-gold-300 mb-2 tracking-widest">AURA · 玄學等級</div>
                        <StarMeter :value="job.aura" tone="gold" size="lg" />
                    </div>
                    <div class="bg-night-800 p-4" :style="{boxShadow: 'inset 0 0 0 2px #d45b3b'}">
                        <div class="font-pixel-en text-[9px] text-magenta-300 mb-2 tracking-widest">WTF? · 荒謬度</div>
                        <StarMeter :value="job.absurdity" tone="magenta" size="lg" />
                    </div>
                    <div class="bg-night-800 p-4" :style="{boxShadow: 'inset 0 0 0 2px #88c7a8'}">
                        <div class="font-pixel-en text-[9px] text-mint-300 mb-2 tracking-widest">USE · 實用度</div>
                        <StarMeter :value="job.realness" tone="mint" size="lg" />
                    </div>
                </div>

                <!-- 圖鑑說明 -->
                <section class="mb-6">
                    <h2 class="font-pixel-en text-gold-300 text-sm tracking-widest mb-3">
                        ▶ DEX ENTRY · 圖鑑說明
                    </h2>
                    <div class="bg-night-800/60 p-5" :style="{boxShadow: 'inset 0 0 0 2px #3b5d34'}">
                        <p
                            v-for="(line, i) in descParagraphs"
                            :key="i"
                            class="font-body text-ink-100 leading-relaxed mb-3 last:mb-0"
                        >
                            {{ line }}
                        </p>
                    </div>
                </section>

                <!-- 技能 + 弱點 -->
                <div class="grid md:grid-cols-2 gap-4 mb-6">
                    <section class="bg-night-800/60 p-5" :style="{boxShadow: 'inset 0 0 0 2px #88c7a8'}">
                        <h2 class="font-pixel-en text-mint-300 text-sm tracking-widest mb-3">
                            ⚔ SKILLS · 招牌技能
                        </h2>
                        <ul class="space-y-2">
                            <li
                                v-for="(s, i) in job.skills"
                                :key="i"
                                class="font-body text-ink-100 flex items-start gap-2"
                            >
                                <span class="text-mint-300 font-pixel-en text-xs mt-1">▸</span>
                                <span>{{ s }}</span>
                            </li>
                        </ul>
                    </section>
                    <section class="bg-night-800/60 p-5" :style="{boxShadow: 'inset 0 0 0 2px #e87454'}">
                        <h2 class="font-pixel-en text-crimson-300 text-sm tracking-widest mb-3">
                            ✖ WEAKNESS · 弱點
                        </h2>
                        <p class="font-body text-ink-100 leading-relaxed">{{ job.weakness }}</p>
                    </section>
                </div>

                <!-- 收費 + 客戶 + 出現 -->
                <div class="grid sm:grid-cols-3 gap-3">
                    <InfoChip label="PRICE" sub="參考收費" :value="job.price" />
                    <InfoChip label="CLIENT" sub="典型客戶" :value="job.typicalClient" />
                    <InfoChip label="ORIGIN" sub="在台灣出現於" :value="job.firstSeen" />
                </div>
            </article>

            <!-- 底部導航 -->
            <div class="flex items-center justify-between flex-wrap gap-3">
                <RouterLink :to="{name: 'HOME_INDEX'}" class="pixel-btn pixel-btn--gold">
                    ◀ 回圖鑑首頁
                </RouterLink>
                <div class="flex items-center gap-2 flex-wrap">
                    <button
                        type="button"
                        class="pixel-btn pixel-btn--ghost"
                        :class="{'!bg-mint-300 !text-night-800': shareState === 'copied'}"
                        @click="handleShare"
                    >
                        {{ shareLabel }}
                    </button>
                    <RouterLink
                        :to="{name: 'JOB_DETAIL', params: {slug: next.slug}}"
                        class="pixel-btn"
                    >
                        下一位挑戰者 ▶
                    </RouterLink>
                </div>
            </div>
        </template>

        <template v-else>
            <div class="pixel-frame text-center py-12">
                <div class="text-6xl mb-4">❓</div>
                <div class="font-pixel-en text-magenta-300 text-sm tracking-widest mb-4">
                    JOB NOT FOUND
                </div>
                <RouterLink :to="{name: 'HOME_INDEX'}" class="pixel-btn">
                    ◀ 回圖鑑
                </RouterLink>
            </div>
        </template>
    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import CategoryBadge from 'components/common/CategoryBadge.vue';
import StarMeter from 'components/common/StarMeter.vue';
import InfoChip from 'components/pages/detail/InfoChip.vue';
import {getJobBySlug, getAdjacentJobs} from 'data/jobs';
import {useSiteHead, SITE} from 'libs/seo';

export default {
    name: 'JobDetail',
    components: {CategoryBadge, StarMeter, InfoChip},
    setup() {
        const route = useRoute();
        useSiteHead(() => {
            const slug = route.params.slug;
            const job = getJobBySlug(slug);
            if (!job) {
                return {title: '找不到職業 · Super Special Jobs', path: `/job/${slug}`};
            }
            const padded = String(job.id).padStart(3, '0');
            return {
                title: `${job.emoji} ${job.name} · NO.${padded} — Super Special Jobs`,
                description: job.tagline,
                ogImage: `/og/job-${slug}.png`,
                path: `/job/${slug}`,
            };
        });
    },
    data() {
        return {
            shareState: 'idle', // idle | sharing | copied
        };
    },
    computed: {
        slug() {
            return this.$route.params.slug;
        },
        job() {
            return getJobBySlug(this.slug);
        },
        paddedId() {
            return String(this.job?.id ?? 0).padStart(3, '0');
        },
        descParagraphs() {
            return (this.job?.desc ?? '').split('\n\n');
        },
        adjacent() {
            return getAdjacentJobs(this.slug);
        },
        prev() {
            return this.adjacent.prev ?? this.job;
        },
        next() {
            return this.adjacent.next ?? this.job;
        },
        shareUrl() {
            return `${SITE.URL}/job/${this.slug}`;
        },
        shareLabel() {
            return {
                idle: '📤 分享這位挑戰者',
                sharing: '分享中⋯',
                copied: '✔ 連結已複製',
            }[this.shareState];
        },
    },
    methods: {
        async handleShare() {
            if (!this.job) return;
            const padded = this.paddedId;
            const shareData = {
                title: `${this.job.emoji} ${this.job.name} · NO.${padded}`,
                text: `「${this.job.tagline}」 — Super Special Jobs 特別職業圖鑑`,
                url: this.shareUrl,
            };
            this.shareState = 'sharing';
            try {
                if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
                    await navigator.share(shareData);
                    this.shareState = 'idle';
                    return;
                }
                if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                    await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
                    this.shareState = 'copied';
                    setTimeout(() => {
                        this.shareState = 'idle';
                    }, 2000);
                    return;
                }
                window.prompt('複製這個連結：', this.shareUrl);
                this.shareState = 'idle';
            } catch (err) {
                if (err?.name !== 'AbortError') {
                    console.error('[share]', err);
                }
                this.shareState = 'idle';
            }
        },
    },
};
</script>
