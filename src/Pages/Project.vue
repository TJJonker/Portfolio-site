<template>
<div class="con">
    <router-link style="text-decoration: none;" :to="'Home'">
        <p class="link-text">< Projects</p>
    </router-link>

    <img class="banner" src="VOID_Banner.png" />
    
    <div class="category-container">
        <p v-for="category in categories" class="category">{{ category }}</p>
    </div>
    
    <project-markdown></project-markdown>
</div>
</template>

<script>
import ProjectMarkdown from '@/Components/ProjectMarkdown.vue';

export default {
    components: {
        ProjectMarkdown
    },
    data() {
        return {
            categories: [
                "Engine", "Rendering", "ECS", "Physics"
            ]
        }
    }
}
</script>

<style scoped>
.banner {
    width: 100%;
}

.link-text {
    color: black;
}

.category-container {
    display: flex;
    /* justify-content: flex-start; */
}

.category {
    background-color: #172C31;
    color: #FFF;
    border-radius: 20px;
    padding: 4px 8px;
    margin-right: 4px;
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 8px;
}
</style>