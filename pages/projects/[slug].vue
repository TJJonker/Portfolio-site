<template>
  <div>
    <component
      v-for="(block, i) in blocks"
      :is="resolveComponent(block.type)"
      v-bind="block.props"
      :key="i"
    />

    <article v-html="html" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// Component registry
import Hero from '~/components/temp/Hero.vue'
import TextBlock from '~/components/temp/TextBlock.vue'

const componentMap = {
  Hero,
  TextBlock,
} as const

function resolveComponent(name: string) {
  return (componentMap as Record<string, any>)[name] || null
}

const route = useRoute()
const slug = computed(() =>
  Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
)

type ProjectData = {
  frontmatter: {
    components?: Array<{ type: string; props?: Record<string, any> }>
    [key: string]: any
  }
  markdown: string
  html: string
}

const { data, error } = await useFetch<ProjectData>(() => `/api/projects/${slug.value}`)


const html = computed(() => data.value?.html || '')
const blocks = computed(() => data.value?.frontmatter?.components || [])
</script>
