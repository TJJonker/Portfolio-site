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
</style>