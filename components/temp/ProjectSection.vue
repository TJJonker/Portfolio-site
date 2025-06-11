<template>
<ProjectSection class="narrow" :title="title" :title-short="titleShort"
    :sub-title="subTitle" :background-text="backgroundText">
        <slot/>
    </ProjectSection>
</template>

<script setup>
defineProps(['title', 'titleShort', 'subTitle', 'backgroundText'])
</script>

<style lang="scss" scoped>
.narrow {
    grid-column: 4 / span 6;
    
    @media (max-width: $breakpoint-desktop) {
        grid-column: 3 / span 6;
    }
    
    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }
    
    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}
</style>