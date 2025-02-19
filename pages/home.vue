<template>
    <div class="grid-container">
        <div class="start-4 span-6">
            <Hero/>
        </div>
        <div class="start-3 span-8 stack">
            <ProjectShowcase/>
            <ArticlesShowcase/>
            <KnowledgeStacks/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useState } from "nuxt/app";
import { useRoute } from "vue-router";

const loading = useState("loading", () => ref(true));
const route = useRoute();

onMounted(() => {
    if(route.query.skipAnimation === "true") {
        loading.value = false;
        return;
    }

    setTimeout(() => {
        loading.value = false;
    }, 3000);
});
</script>

<style lang="css" scoped>
.stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
}
</style>