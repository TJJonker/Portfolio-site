<template>
    <div class="project-content">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.project-content {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--space-xl);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    padding: 0 var(--page-margin);
    overflow-x: hidden;
}
</style>