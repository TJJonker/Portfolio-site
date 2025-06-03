<script setup>
  import { useUi } from '~/js/UseTopbar'
  const { useTopBar } = useUi();
  useTopBar.value = true
</script>

<template>
    <div>
      <Topbar v-if="useTopBar" />      
      <NuxtPage />
      <Footer />
    </div>
</template>