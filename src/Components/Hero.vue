<template>
    <div class="hero">
        <div class="left">
            <div class="hero-text-container">
                <h1 class="name primary-color">Tom Jonker</h1>
                <h3 class="description primary-text-color">Engine- and graphics <span class="secondary-text-color" style="display: block;">programmer</span></h3>
                <social-media-icons></social-media-icons>
            </div>
        </div>
        <div class="right bg-project-primary">
            <img src="Images/Misc/Hero-picture.png" alt="">
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
.name {
    font-size: 72px;
    font-family: 'Montserrat';
    font-weight: 800;
}

.hero {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 60px);
    background-color: #F6F6F6;
    overflow: hidden;
}

.description {
    font-size: 32px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.hero-text-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 48px;
}

.left {
    flex: 2;
    display: flex;
    justify-content: center;
}

.right {
    flex: 1;
    display: none;
}

.bg-project-primary {
    background: linear-gradient(180deg, rgba(196,164,132,1) 0%, rgba(140,108,76,1) 100%);
}

.right img {
    position: absolute; 
    bottom: -6px; 
    left: 50vw; 
    width: auto; 
    height: 90%; 
}

@media only screen and (min-width: 750px) {
    .name {
        font-size: 90px;
    }

    .description {
        font-size: 48px;
    }
}

@media only screen and (min-width: 1500px) {
    .right {
        display: flex;
    }

    .hero {
        height: 100vh;
    }
}
</style>