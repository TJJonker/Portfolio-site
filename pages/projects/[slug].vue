<template>
    <div>
        <template v-for="(block, i) in blocks" :key="i">
            <ComponentRenderer :block="block" />
        </template>
    </div>
</template>


<script setup lang="ts">

import ComponentRenderer from '~/components/temp/ComponentRenderer.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

import { useUi } from '@/js/UseTopbar'

import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize();

const { useTopBar } = useUi();

watchEffect(() => {
    useTopBar.value = width.value > 425
})

// Component registry
import Properties from '~/components/temp/Properties.vue'
import WorkTitle from '~/components/temp/WorkTitle.vue';
import WorkAlinea from '~/components/WorkAlinea.vue';
import Content from '~/components/temp/Content.vue';

const componentMap = {
    Properties,
    WorkTitle,
    WorkAlinea,
    Content
} as const

function resolveComponent(name: string) {
    return (componentMap as Record<string, any>)[name] || null
}

const route = useRoute()
const slug = computed(() =>
    Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
)

type ComponentBlock = {
    type: string
    props?: Record<string, any>
    children?: ComponentBlock[]
}

type ProjectData = {
    frontmatter: {
        components?: ComponentBlock[]
        [key: string]: any
    }
    markdown: string
    html: string
}


const { data, error } = await useFetch<ProjectData>(() => `/api/projects/${slug.value}`)


const blocks = computed(() => data.value?.frontmatter?.components || [])
</script>

<style lang="scss" scoped>
.header {
    margin-top: var(--space-l);

    @media (max-width: $breakpoint-mobile) {
        margin-top: 0;
    }
}

.numbers-container {
    border-radius: 20px;
    background-color: var(--background-secondary-color);
    box-sizing: border-box;
    padding: var(--space-l);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.alinea {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    position: relative;
}

.row {
    display: flex;
    flex-direction: row;
    gap: var(--space-l);
}

.project-content {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--space-xl);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    padding: 0 var(--page-margin);
    overflow-x: hidden;
}

.properties-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.properties-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
}

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

.narrow {
    grid-column: 4 / span 6;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 3 / span 6;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}
</style>