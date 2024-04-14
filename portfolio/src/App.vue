<template>
    <div class="hero">
        <div class="row m-0">
            <div class="col-xl-8">
                <div class="hero-text-container">
                    <div>
                        <h1 class="name">Tom Jonker</h1>
                        <h3 class="description">Engine- and graphics</h3>
                        <h3 class="description secondary-text-color">programmer</h3>
                        <social-media-icons></social-media-icons>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 bg-project-primary">
                <img src="Hero-picture.png" alt="">
            </div>
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
    font-size: 140px;
    font-family: 'Montserrat';
    font-weight: 800;
}

.row{
    height: 100vh;
}

.description {
    font-size: 68px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.secondary-text-color {
    color: #C4A484;
}

.hero {
    background-color: #F6F6F6;
}

.hero-text-container {
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.bg-project-primary {
    background-color: #C4A484;
    display: none;
}

@media only screen and (min-width: 1200px) {
    .bg-project-primary {
        display: block;
    }
}
</style>