<template>
    <a :href="url" class="card" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
        <div class="image-container">
            <img class="project-image" :src="image" alt="">
        </div>
        <div class="text-container">
            <p class="project-name secondary">{{ subTitle }}</p>
            <div class="container-left">
                <h2 class="fill">{{ title }}</h2>
                <p class="fill">{{ content }}</p>
                <IconArrowButton 
                    v-if="width > 425"
                    class="btn" 
                    title="View work" 
                    :active="isHovered" 
                    :link="url" 
                />

            </div>
            <div class="container-right">
                <div class="properties-stack">
                    <div class="properties-row">
                        <TitleList title="The Goal">
                            <p>{{ goal }}</p>
                        </TitleList>
                        <TitleList title="Year">
                            <p>{{ year }}</p>
                        </TitleList>
                    </div>
                    <div class="properties-row">
                        <TitleList title="My Role">
                            <p v-for="(role, index) in roles" :key="index">{{ role }}</p>
                        </TitleList>
                        <TitleList title="Techs">
                            <p v-for="(tech, index) in technologies" :key="index">{{ tech }}</p>
                        </TitleList>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>


<script setup>
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();

// Props
defineProps({
    title: String,
    subTitle: String,
    content: String,
    image: String,
    url: String,
    goal: String,
    year: String,
    roles: Array,
    technologies: Array,
});

// Reactive hover state
const isHovered = ref(false);

const setHover = (state) => {
    isHovered.value = state;
};


</script>

<style lang="scss" scoped>

.card {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    padding: var(--space-m) 0;
}

.card:hover .project-image {
    padding: 0;
}

.card:hover .moving {
    padding-left: 0;
}

.image-container {
    width: 100%;
    /* Full width */
    max-height: 500px;
    /* Fixed height */
    overflow: hidden;
    /* Hide any overflow */
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    border-radius: 10px;
}

.container-left {
    --grid-span: 5;

    grid-column: 1 / span var(--grid-span);
    display: grid;
    row-gap: var(--space-l);
    column-gap: var(--column-gap);
    grid-template-columns: repeat(var(--grid-span), 1fr);

    @media (max-width: $breakpoint-laptop) {
        --grid-span: 4
    }
}

.container-right {
    grid-column: 7 / span 4;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 7 / span 2;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 5 / span 2;
    }

    @media (max-width: $breakpoint-mobile) {
        display: none;
    }
}

.project-image {
    width: 100%;
    /* Take up the full width */
    height: auto;
    /* Maintain aspect ratio */
    transition: transform 0.3s ease-in-out;
    /* Smooth zoom effect */
}

.project-name {
    grid-column: 1 / span var(--grid-columns-mt);
}

.card:hover .project-image {
    transform: scale(1.025);
    /* Zoom in on hover */
}

.text-container {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns-mt), 1fr);
    column-gap: var(--column-gap);
}

.fill {

    --grid-span: 5;

    grid-column: 1 / span var(--grid-span);

    @media (max-width: $breakpoint-laptop) {
        --grid-span: 4
    }
}

.btn {
    grid-column: 1 / span 2;
}

.properties-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
}

.properties-row {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: var(--space-l);
}
</style>
