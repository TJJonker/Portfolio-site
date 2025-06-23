<template>
    <div>
        <client-only>
            <AnimatedTitle v-if="width > 425" :title="title" :subTitle="subTitle" :big="false" />
            <AnimatedTitle v-else :title="titleShort" :subTitle="subTitle" :big="false" />
        </client-only>
        <div class="content-row">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();

defineProps({
    showTitle: { type: Boolean, default: true },
    title: { type: String, default: "" },
    titleShort: { type: String },
    subTitle: { type: String, default: "" },
    backgroundText: { type: String }
})
</script>

<style lang="scss" scoped>
.content-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);

    @media (max-width: $breakpoint-mobile) {
        gap: var(--space-xl);
    }
}
</style>