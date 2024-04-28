<template>
    <hero></hero>
    <about-me></about-me>
    <latest-works></latest-works> 
    <Footer></Footer>

</template>

<script>
import Hero from '@/Components/Hero.vue';
import AboutMe from '@/Components/AboutMe.vue';
import LatestWorks from '@/Components/LatestWorks.vue';
import Footer from '@/Components/Footer.vue';

export default {
    components: {
        Hero,
        AboutMe,
        LatestWorks,
        Footer
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

.title h1 {
    font-size: 32px;
    font-family: 'Montserrat';
    font-weight: 700;
}

.con {
    padding: 56px 40px;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px; 
}

::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
</style>