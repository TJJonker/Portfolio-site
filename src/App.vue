<template>
    <router-view />
    <Footer />
</template>

<script>
import Footer from './components/Footer.vue';

export default {

    components: {
        Footer
    },
};
</script>

<style lang="scss">
@import '/src/assets/styles/global.scss'
</style>