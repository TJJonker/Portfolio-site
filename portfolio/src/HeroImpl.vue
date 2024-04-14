<template>
    <img src="Logo_Dark.png" class="p-3 logo">
    <div class="container-fluid hero px-0">
        <div class="hero-text">
            <h1>Tom Jonker</h1>
            <h3>Engine- and Graphics</h3>
            <h3 class="secondary-text-color">programmer</h3>
            <social-media-icons></social-media-icons>
        </div>
        <div class="right">
            <img src="Hero-picture.png" class="hero-image" alt="">
        </div>
    </div>
    </template>
    
    <script>
    import SocialMediaIcons from "./SocialMediaIcons.vue";
    
    export default {
        components: {
            SocialMediaIcons
        }
    }
    </script>
    
    <style scoped>
    .logo {
        position: absolute;
    }
    
    .hero {
        display: grid;
        grid-template-columns: 2fr 1fr;
        height: 100vh;
    }
    
    .right {
        background: rgb(196,164,132);
        background: linear-gradient(180deg, rgba(196,164,132,1) 0%, rgba(140,108,76,1) 100%);
    }
    
    .hero-image {
        /* position: relative;
        translate: calc(-100vw/3/2) calc(100vh - 100%);
        height: 90%; */
    }
    
    .hero-text {
        display: block;
        margin: auto;
    }
    
    .hero-text h1 {
        font-size: 140px;
        font-family: 'Montserrat';
        font-weight: 800;
    }
    
    .hero-text h3 {
        font-size: 68px;
        font-family: 'Montserrat';
        font-weight: 400;
    }
    
    .secondary-text-color {
        color: #C4A484;
    }
    </style>