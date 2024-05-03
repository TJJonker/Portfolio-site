<template>
<div v-if="project != null" class="con bg-white">
    <router-link style="text-decoration: none;" :to="'/projects'">
        <p class="link-text">< Projects</p>
    </router-link>

    <img class="banner" :src="BannerUrl" />
    
    <div class="category-container">
        <p v-for="category in project.Categories" class="category">{{ category }}</p>
    </div>

    <project-markdown :file-path="MarkdownUrl"></project-markdown>
    <hr class="my-5">
    <div class="project-links">
        <div class="link-container">
            <!-- Previous project link -->
            <router-link :to="'/projects/' + this.previousProject.slug" class="link" v-if="previousProject">
                <p><<</p>
                <p>{{ previousProject.Preview.Title }}</p>
            </router-link>
        </div>
        <div class="link-container">
            <!-- Next project link -->
            <router-link :to="'/projects/' + this.nextProject.slug" class="link" v-if="nextProject">
                <p style="text-align: end;">{{ nextProject.Preview.Title }}</p>
                <p>>></p>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import ProjectMarkdown from '@/Components/ProjectMarkdown.vue';
import {inject} from 'vue';

export default {
    props: ['slug'],
    components: {
        ProjectMarkdown
    },
    data() {
        return {
            project: null,
            index: -1,
            previousProject: null,
            nextProject: null,
            projects: inject('$projects')
        }
    }, 
    async created() {
        await this.GetInformation();
    },
    methods: {
        async GetInformation() {
            console.log(this.slug);
            this.index = await this.projects.GetIndexBySlug(this.slug);
            console.log(this.index);
            this.project = await this.projects.GetProject(this.index);

            if(this.projects.IsIndexValid(this.index + 1))
                this.nextProject = await this.projects.GetProject(this.index + 1);

            if(this.projects.IsIndexValid(this.index - 1))
                this.previousProject = await this.projects.GetProject(this.index - 1);
        }
    },
    computed: {
        BannerUrl() {
            return "/Projects/" + this.project.ContentFolder + "/Banner.png";
        },
        MarkdownUrl() {
            return "/Projects/" + this.project.ContentFolder + "/Content.md";
        }
    },
    watch: {
        async slug(newSlug, oldSlug) {
            await this.GetInformation();
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

@media only screen and (min-width: 1200px) {
    .category {
        font-size: 10px;
    }
}

@media only screen and (min-width: 1200px) {
    .con {
        padding: 56px 30%;
    }
}

.project-links {
  display: flex;
  justify-content: space-between;
}

.link {
    display: flex;
    gap: 4px;
    width: 80%;
}

</style>