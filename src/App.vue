<template>
    <Topbar/>
    <router-view />
    <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Topbar from './components/Topbar.vue';

export default {

    components: {
        Topbar,
        Footer
    },
};
</script>

<style lang="scss">
@import '/src/assets/styles/global.scss'
</style>