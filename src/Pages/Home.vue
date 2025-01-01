<template>
    <div class="grid-container">
        <div class="start-3 span-8 stack">
            <ProjectShowcase/>
            <ArticlesShowcase/>
            <KnowledgeStacks/>
        </div>
    </div>
</template>

<script>
import KnowledgeStacks from "../components/KnowledgeStacks.vue"
import ArticlesShowcase from "@/components/ArticlesShowcase.vue";
import ProjectShowcase from "@/components/ProjectShowcase.vue";

export default {
    name: "Home",
    components: {
        KnowledgeStacks,
        ArticlesShowcase,
        ProjectShowcase
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