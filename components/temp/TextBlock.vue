<template>
  <div v-html="text" />
</template>

<script setup>
import { marked } from 'marked'
const props = defineProps(['text'])
const html = marked(props.text)
</script>
