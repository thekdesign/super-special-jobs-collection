<template>
    <span class="pixel-badge font-pixel-en" :class="cat.badgeClass">
        <span aria-hidden="true">{{ cat.icon }}</span>
        <span>{{ cat.labelEn }}</span>
        <span class="font-body font-bold tracking-normal text-[10px] opacity-90">{{ cat.label }}</span>
    </span>
</template>

<script>
import {getCategory} from 'data/categories';

export default {
    name: 'CategoryBadge',
    props: {
        categoryKey: {type: String, required: true},
    },
    computed: {
        cat() {
            return getCategory(this.categoryKey);
        },
    },
};
</script>
