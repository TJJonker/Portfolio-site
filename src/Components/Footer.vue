<template>
    <div class="footer">
        <div class="con">
            <div class="layout">
                <div class="social-media">
                    <a :href=icon.url target="_blank" class="icon-container wiggle" v-for="(icon, index) in icons" :key="index" :style="{ 'animation-delay': 1 + index * 0.2 + 's' }">
                        <img class="icon" :src="icon.src" :alt="icon.alt">
                    </a>
                </div>
                <router-link class="logo" :to="'/home'">
                    <img class="logo" src="/Images/Logo/Logo_Light.svg">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icons: [
                    { src: '/Images/Icons/Light/LinkedIn.svg', alt: 'LinkedIn', url: "https://linkedin.com/in/tj-jonker"},
                    { src: '/Images/Icons/Light/Github.svg', alt: 'Github', url: "https://github.com/TJJonker" },
                    { src: '/Images/Icons/Light/Mail.svg', alt: 'Google', url: "mailto: tjj.jonker@gmail.com"}
                ]
            }
        }
    }
</script>

<style scoped>
.footer {
    background-color: #142429;
}

.layout {
    display: flex;    
    flex-direction: column;
}

.links {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}

.social-media {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.social-media img {
    width: 24px;
    margin: 12px 16px;
}

.social-media img:hover {
    transform: scale(1.3); 
}

.logo {
    width: 48px;
    margin: 4px auto;
}

.con {
    padding: 28px 40px;
}
</style>