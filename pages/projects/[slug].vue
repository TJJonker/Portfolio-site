<template>
  <article v-html="html" />
</template>

<script setup>
import { marked } from 'marked'
import { useProjectMarkdown } from '~/js/UseProjectMarkdown'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { markdown } = await useProjectMarkdown(route.params.slug)
const html = computed(() => marked(markdown.value || ''))
console.log(markdown)
</script>
