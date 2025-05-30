<template>
    <div class="project-number-container">
        <p class="secondary"><span class="divider">| </span>{{ title }}</p>
        <h1>{{ number }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<style lang="css" scoped>
.divider {
    color: var(--accent-color);
}

.project-number-divider {
    display: flex;
    flex-direction: column;
}

.project-number-container {
    display: flex;
    flex-direction: column;
    padding: var(--space-m);
    box-sizing: border-box;
}
</style>

<script setup>
defineProps({
    title: { type: String, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
});
</script>
