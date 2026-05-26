<template>
    <div class="rpg-shell">
        <!-- Hero / 開場對話框 -->
        <section class="mb-10">
            <div class="dialog-box max-w-3xl mx-auto">
                <div class="font-pixel-en text-[10px] text-magenta-500 mb-3 tracking-widest">
                    ▶ NARRATOR
                </div>
                <p class="font-body text-base sm:text-lg leading-relaxed text-night-800 pr-6">
                    勇者啊，現代社會充滿了「不需要執照、無教科書、但你身邊就有人在做」的職業。
                    寵物溝通師、植物溝通師、撒嬌教練、排隊員⋯
                    這本圖鑑收錄了 <span class="text-magenta-500 font-bold">{{ jobs.length }} 名</span> 挑戰者，
                    請點擊每張卡片來認識他們。
                </p>
            </div>
        </section>

        <!-- 篩選列 -->
        <section class="mb-6 pixel-frame pixel-frame--panel">
            <div class="flex flex-col gap-4">
                <!-- 搜尋 -->
                <div class="flex items-center gap-3">
                    <label class="font-pixel-en text-gold-300 text-[10px] tracking-widest shrink-0">
                        SEARCH
                    </label>
                    <input
                        v-model="keyword"
                        type="text"
                        class="pixel-input"
                        placeholder="輸入關鍵字，例：寵物、塔羅、撒嬌…"
                    />
                </div>

                <!-- 分類 -->
                <div class="flex flex-wrap items-center gap-2">
                    <label class="font-pixel-en text-gold-300 text-[10px] tracking-widest shrink-0 mr-2">
                        FILTER
                    </label>
                    <button
                        v-for="cat in categories"
                        :key="cat.key"
                        type="button"
                        class="pixel-badge font-pixel-en transition-transform"
                        :class="[
                            cat.badgeClass,
                            activeCategory === cat.key
                                ? '-translate-y-[2px] ring-4 ring-gold-300/60'
                                : 'opacity-70 hover:opacity-100',
                        ]"
                        @click="activeCategory = cat.key"
                    >
                        <span>{{ cat.icon }}</span>
                        <span>{{ cat.labelEn }}</span>
                        <span class="font-body font-bold tracking-normal text-[10px]">
                            {{ cat.label }}
                        </span>
                        <span class="text-[9px] opacity-80">×{{ countByCategory[cat.key] ?? 0 }}</span>
                    </button>
                </div>

                <!-- 排序 -->
                <div class="flex flex-wrap items-center gap-2">
                    <label class="font-pixel-en text-gold-300 text-[10px] tracking-widest shrink-0 mr-2">
                        SORT
                    </label>
                    <button
                        v-for="opt in sortOptions"
                        :key="opt.value"
                        type="button"
                        class="pixel-btn pixel-btn--ghost !py-2 !px-3 !text-[9px]"
                        :class="{'!bg-gold-300 !text-night-800': sortKey === opt.value}"
                        @click="sortKey = opt.value"
                    >
                        {{ opt.label }}
                    </button>
                </div>
            </div>
        </section>

        <!-- 結果統計 -->
        <div class="flex items-center justify-between mb-4 px-2">
            <div class="font-pixel-en text-ink-200 text-[10px] tracking-widest">
                <span class="text-gold-300">{{ filteredJobs.length }}</span>
                / {{ jobs.length }} 筆
            </div>
            <div v-if="keyword || activeCategory !== 'all'" class="font-pixel-en text-[10px]">
                <button class="text-magenta-300 hover:text-magenta-200 underline underline-offset-4" @click="resetFilters">
                    [ RESET ]
                </button>
            </div>
        </div>

        <!-- 卡片網格 -->
        <section v-if="filteredJobs.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
        </section>

        <!-- 空狀態 -->
        <section v-else class="pixel-frame text-center py-12">
            <div class="text-6xl mb-4">🕳</div>
            <div class="font-pixel-en text-magenta-300 text-sm tracking-widest mb-2">
                NO JOBS FOUND
            </div>
            <div class="font-body text-ink-200 text-sm">
                找不到符合的職業。要不要試試別的關鍵字？
            </div>
        </section>
    </div>
</template>

<script>
import {jobs} from 'data/jobs';
import {categories} from 'data/categories';
import JobCard from 'components/common/JobCard.vue';
import {useSiteHead} from 'libs/seo';

export default {
    name: 'HomeIndex',
    components: {JobCard},
    setup() {
        useSiteHead({
            title: '🎮 Super Special Jobs — 特別職業圖鑑',
            description: '收集現代社會那些沒有專業執照、但你身邊就有人在做的職業：寵物溝通師、植物溝通師、撒嬌教練、出租朋友⋯像素 RPG 風幽默圖鑑。',
            ogImage: '/og/home.png',
            path: '/',
        });
    },
    data() {
        return {
            jobs,
            categories,
            activeCategory: 'all',
            keyword: '',
            sortKey: 'id',
            sortOptions: [
                {value: 'id', label: '圖鑑編號'},
                {value: 'aura', label: '玄學等級'},
                {value: 'absurdity', label: '荒謬度'},
                {value: 'realness', label: '實用度'},
            ],
        };
    },
    computed: {
        countByCategory() {
            const map = {all: this.jobs.length};
            this.jobs.forEach((j) => {
                map[j.category] = (map[j.category] ?? 0) + 1;
            });
            return map;
        },
        filteredJobs() {
            const kw = this.keyword.trim().toLowerCase();
            return this.jobs
                .filter((j) => this.activeCategory === 'all' || j.category === this.activeCategory)
                .filter((j) => {
                    if (!kw) return true;
                    return (
                        j.name.toLowerCase().includes(kw) ||
                        j.nameEn.toLowerCase().includes(kw) ||
                        j.tagline.toLowerCase().includes(kw) ||
                        j.desc.toLowerCase().includes(kw) ||
                        j.skills.some((s) => s.toLowerCase().includes(kw))
                    );
                })
                .sort((a, b) => {
                    if (this.sortKey === 'id') return a.id - b.id;
                    return b[this.sortKey] - a[this.sortKey];
                });
        },
    },
    methods: {
        resetFilters() {
            this.keyword = '';
            this.activeCategory = 'all';
            this.sortKey = 'id';
        },
    },
};
</script>
