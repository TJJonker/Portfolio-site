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

<style lang="css" scoped>
.stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
}
</style>