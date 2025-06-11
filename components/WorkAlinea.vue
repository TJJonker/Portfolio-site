<template>
  <div v-if="isClient" class="alinea-container narrow">
    <h4 class="uppercase">{{ title }}</h4>
    <p v-html="htmlContent"></p> 
  </div>
</template>

<script setup>
import { marked } from 'marked';
import { computed, ref, onMounted } from 'vue';

const props = defineProps(['title', 'content'])

const isClient = ref(false)
onMounted(() => {
  isClient.value = true
})

const htmlContent = computed(() => {
  if (isClient.value && props.content) {
    return marked.parse(props.content.replace(/\n/g, '  \n'))
  }
  return ''
})
</script>



<style lang="scss" scoped>

.alinea-container { 
    display: grid;
    grid-template-columns: repeat( 6, 1fr);
    column-gap: var(--column-gap);
    row-gap: var(--space-l);
}

.alinea-container h4 {
    grid-column: 1 / span 2;

    @media (max-width: $breakpoint-mobile) {
        grid-column: 1 / span 6;
    }
}

.alinea-container p {
    grid-column: 3 / span 4;
    
    @media (max-width: $breakpoint-mobile) {
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