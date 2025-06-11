<template>
    <WorkTitle class="header" :sub-title="subTitle" :title="title" :min-to-read="minToRead"
        :date="date" :img="useProjectThumbnail(slug)" />
</template>

<script setup lang="ts">
import { useProjectThumbnail } from '~/js/UseProjectThumbnail'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const slug = computed(() =>
  Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
)

defineProps(['title', 'subTitle', 'minToRead', 'date'])
</script>

<style lang="scss" scoped>
.header {
    margin-top: var(--space-l);

    @media (max-width: $breakpoint-mobile) {
        margin-top: 0;
    }
}
</style>