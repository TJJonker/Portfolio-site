<template>
    <Hero />
    <div class="grid-container">
        <div class="outlining stack">
            <ProjectShowcase />
            <ArticlesShowcase />
            <!-- <KnowledgeStacks /> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useState } from "nuxt/app";
import { useRoute } from "vue-router";

useHead({
  title: 'Home'
})

const loading = useState("loading", () => ref(true));
const route = useRoute();

onMounted(() => {
    if (route.query.skipAnimation === "true") {
        loading.value = false;
        return;
    }

    setTimeout(() => {
        loading.value = false;
    }, 3000);
});
</script>

<style lang="scss" scoped>
.stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
}

.outlining {
    grid-column: 3 / span 8;

    @media (max-width: $breakpoint-desktop){
        grid-column: 2 / span 8;
    }

    @media (max-width: $breakpoint-laptop){
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet){
        grid-column: 1 / span 6;
    }
}
</style>