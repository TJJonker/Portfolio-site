<template>
    <div :class="{'hidden-layout': loading}">
      <Topbar />
      <slot />
      <Footer />
    </div>
</template>

<script setup>
import { useState } from 'nuxt/app'; 

const loading = useState('loading');
</script>

<style scoped>
.hidden-layout {
  opacity: 0;
  pointer-events: none;
}
</style>