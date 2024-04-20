<template>
    <div class="hero">
        <div class="row m-0">
            <div class="col-xl-8">
                <div class="hero-text-container">
                    <div>
                        <h1 class="name primary-color">Tom Jonker</h1>
                        <h3 class="description primary-text-color">Engine- and graphics</h3>
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

.row {
    height: 100vh;
}

.description {
    font-size: 68px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.hero {
    background-color: #F6F6F6;
    overflow: hidden;
}

.hero-text-container {
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.bg-project-primary {
    background: rgb(196,164,132);
    background: linear-gradient(180deg, rgba(196,164,132,1) 0%, rgba(140,108,76,1) 100%);
    /* overflow: hidden; Hide any overflow content */
    position: relative; /* Position context for absolutely positioned children */
    display: none;
}

.bg-project-primary img {
    position: absolute; /* Position the image relative to its container */
    bottom: 0; /* Position at the bottom */
    left: calc(-100vw/3/2); /* Position at the left */
    width: auto; /* Take full width of its container */
    height: 90%; /* Maintain aspect ratio */
    max-height: 100%; /* Limit maximum height to prevent overflow */
}

@media only screen and (min-width: 1200px) {
    .bg-project-primary {
        display: block;
    }
}
</style>