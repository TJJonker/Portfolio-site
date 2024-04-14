<template>
    <hero></hero>
    <about-me></about-me>
</template>

<script>
import Hero from './Hero.vue';
import AboutMe from './AboutMe.vue';

export default {
    components: {
        Hero,
        AboutMe
    }
}
</script>

<style>
.primary-text-color {
    color: black;
}

.secondary-text-color {
    color: #C4A484;
}

::-webkit-scrollbar {
    width: 12px; /* width of the scrollbar */
}

::-webkit-scrollbar-track {
    background: #f1f1f1; /* color of the track */
}

::-webkit-scrollbar-thumb {
    background: #888; /* color of the thumb */
    border-radius: 6px; /* roundness of the thumb */
}

::-webkit-scrollbar-thumb:hover {
    background: #555; /* color of the thumb on hover */
}
</style>