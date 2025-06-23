<template>
  <component :is="resolveComponent(block.type)" v-bind="block.props">
    <template v-if="block.children" #default>
      <ComponentRenderer v-for="(child, i) in block.children" :key="i" :block="child" />
    </template>
  </component>
</template>

<script setup lang="ts">
import Properties from '~/components/temp/Properties.vue'
import WorkTitle from '~/components/temp/WorkTitle.vue'
import WorkAlinea from '~/components/WorkAlinea.vue'
import Content from '~/components/temp/Content.vue'
import ProjectSection from './ProjectSection.vue'
import Image from './Image.vue'
import Numbers from './Numbers.vue'
import ProjectNumber from '../ProjectNumber.vue'

const props = defineProps(['block'])

const componentMap = {
  Properties,
  WorkTitle,
  WorkAlinea,
  Content,
  ProjectSection,
  Image,
  Numbers,
  ProjectNumber
} as const

function resolveComponent(name: string) {
  return (componentMap as Record<string, any>)[name] || null
}

</script>
