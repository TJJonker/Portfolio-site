<template>
    <div class="numbers-container">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
.numbers-container {
    border-radius: 20px;
    background-color: var(--background-secondary-color);
    box-sizing: border-box;
    padding: var(--space-l);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>