<template>
    <span class="inline-flex items-center gap-[2px] font-pixel-en" :class="sizeClass" :title="`${value} / ${max}`">
        <span
            v-for="i in max"
            :key="i"
            :class="i <= value ? activeClass : inactiveClass"
            class="leading-none"
        >
            {{ i <= value ? '◆' : '◇' }}
        </span>
    </span>
</template>

<script>
export default {
    name: 'StarMeter',
    props: {
        value: {type: Number, required: true},
        max: {type: Number, default: 5},
        size: {type: String, default: 'md'},
        tone: {type: String, default: 'gold'},
    },
    computed: {
        sizeClass() {
            return {sm: 'text-[10px]', md: 'text-xs', lg: 'text-base'}[this.size] ?? 'text-xs';
        },
        activeClass() {
            return {
                gold: 'text-gold-300',
                magenta: 'text-magenta-300',
                mint: 'text-mint-300',
                sky: 'text-sky-300',
                crimson: 'text-crimson-300',
            }[this.tone] ?? 'text-gold-300';
        },
        inactiveClass() {
            return 'text-night-400 opacity-60';
        },
    },
};
</script>
