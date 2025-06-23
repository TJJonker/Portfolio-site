<template>
    <img class="content-image wide" :src="useProjectImage(slug, url)" :alt="alt">
</template>

<script setup lang="ts">
defineProps(['url', 'alt'])

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useProjectImage } from '~/js/UseImage'

const route = useRoute()
const slug = computed(() =>
    Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
)
</script>

<style lang="scss" scoped>
.content-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: $breakpoint-desktop) {
        height: 400px;
    }

    @media (max-width: $breakpoint-laptop) {
        height: 300px;
    }

    @media (max-width: $breakpoint-tablet) {
        height: 300px;
    }

    @media (max-width: $breakpoint-mobile) {
        height: 200px;
    }
}

.wide {
    grid-column: 3 / span 8;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 2 / span 8;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }

}
</style>