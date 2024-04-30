<template>
<div v-if="project != null" class="con bg-white">
    <router-link style="text-decoration: none;" :to="'/Home'">
        <p class="link-text">< Projects</p>
    </router-link>

    <img class="banner" :src="BannerUrl" />
    
    <div class="category-container">
        <p v-for="category in project.Categories" class="category">{{ category }}</p>
    </div>
    
    <project-markdown :file-path="MarkdownUrl"></project-markdown>
</div>
</template>

<script>
import ProjectMarkdown from '@/Components/ProjectMarkdown.vue';
import {inject} from 'vue';

export default {
    props: ['index'],
    components: {
        ProjectMarkdown
    },
    data() {
        return {
            project: null
        }
    }, 
    async created() {
        const projects = inject('$projects');
        this.project = await projects.GetProject(this.index);
    },
    computed: {
        BannerUrl() {
            return "/Projects/" + this.project.ContentFolder + "/Banner.png";
        },
        MarkdownUrl() {
            return "/Projects/" + this.project.ContentFolder + "/Content.md";
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
    margin-bottom: 24px;
    font-size: 8px;
}
</style>