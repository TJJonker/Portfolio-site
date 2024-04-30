<template>
    <div class="page">    
        <div class="content">
            <router-link :to="`/Home`">
                <img class="image-button" src="/Images/Logo/Logo_Dark.svg" alt="Button Image">
            </router-link>
        </div>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'

export default { 
    components: {
        Footer
    }
}
</script>

<style scoped>
.content {
    position: absolute;
    top: 12px;
    left: 12px;
    cursor: pointer;
}

.content img {
    width: 24px;
}

.page {
    background-color: #142429;
}

@media only screen and (min-width: 750px) {
    .content img {
        width: 32px;
    }
}
</style>