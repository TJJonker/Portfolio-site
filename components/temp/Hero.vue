<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </section>
</template>

<style lang="scss">
  .hero h1 {
    color: var(--accent-color);
  }
</style>

<script setup>
defineProps(['title', 'subtitle'])
</script>
