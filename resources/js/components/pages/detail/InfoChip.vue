<template>
    <div class="bg-night-800/70 p-4" :style="{boxShadow: 'inset 0 0 0 2px #507846'}">
        <div class="font-pixel-en text-[9px] text-gold-300 tracking-widest mb-1">
            {{ label }}
        </div>
        <div class="font-pixel-en text-[8px] text-ink-300 tracking-widest mb-2">
            {{ sub }}
        </div>
        <div class="font-body text-ink-100 text-sm leading-snug break-words">
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoChip',
    props: {
        label: {type: String, required: true},
        sub: {type: String, default: ''},
        value: {type: String, required: true},
    },
};
</script>
