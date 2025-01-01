<template>
    <div class="grid-container">
        <div class="start-3 span-8 stack">
            <ArticlesShowcase/>
            <KnowledgeStacks/>
        </div>
    </div>
</template>

<script>
import KnowledgeStacks from "../components/KnowledgeStacks.vue"
import ArticlesShowcase from "@/components/ArticlesShowcase.vue";

export default {
    name: "Home",
    components: {
        KnowledgeStacks,
        ArticlesShowcase
    }
}
</script>

<style lang="css" scoped>
.stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
}
</style>