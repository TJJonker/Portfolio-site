<template>
    <client-only>
        <div v-if="width > 425" class="project-content">
            <div class="work-header">
                <div class="work-title">
                    <div>
                        <p class="sub-header secondary">{{ subTitle }}</p>
                        <h1>{{ title }}</h1>
                    </div>
                    <div>
                        <p class="secondary"><span>{{ minToRead }}</span> min read <span class="divider">| </span>
                            <span>{{
                                date }}</span>
                        </p>
                        <div class="icons">
                            <img src="/public/Icons/ic_share_white.svg" alt="">
                            <img src="public/Icons/ic_bookmark_white.svg" alt="">
                        </div>
                    </div>
                </div>
                <img class="cover-image" :src="img" alt="">
            </div>
        </div>

        <div v-else>
            <div class="overlay">
                <img class="cover-image" :src="img" alt="">
            </div>
            <div class="project-content">
                <div class="work-header work-title">
                    <p class="sub-header secondary">{{ subTitle }}</p>
                    <h2>{{ title }}</h2>
                    <p class="secondary"><span>{{ minToRead }}</span> min read <span class="divider">| </span>
                        <span>{{ date }}</span>
                    </p>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();

defineProps({
    subTitle: { type: String, required: true },
    title: { type: String, required: true },
    minToRead: { type: String, required: true },
    date: { type: String, required: true },
    img: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.project-content {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--space-xl);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    padding: 0 var(--page-margin);
    overflow-x: hidden;
}

.work-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    padding-bottom: var(--space-xl);
    grid-column: 3 / span 8;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 2 / span 8;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}

.work-title {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.divider {
    color: var(--accent-color);
    padding: 0 var(--space-xs);
}

.icons {
    margin: var(--space-m) 0;
    display: flex;
    flex-direction: row;
    gap: var(--space-m);
}

.cover-image {
    border-radius: 10px;

    @media (max-width: $breakpoint-mobile) {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
    }
}

.overlay {
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: var(--space-l);
        width: 100%;
        background-color: var(--background-primary-color);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        z-index: 10;
        border-top: 1px solid var(--background-tertiary-color); // adjust color and opacity as needed
        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.3); // soft upward shadow
    }
}
</style>