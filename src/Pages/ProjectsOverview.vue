<template>
    <div class="con section">
        <h1>Projects</h1>
            <div class="projects">
            <desktop-card v-if="desktopCard" v-for="(project, index) in projects" 
            :index="index" 
            :project="project">
            </desktop-card>
            
            <mobile-card v-if="!desktopCard" v-for="(project, index) in projects"
            :project="project"
            :index="index"
            :active="false">
            </mobile-card>
        </div>
    </div>
</template>

<script>
import DesktopCard from '@/Components/ProjectOverviewCard.vue';
import MobileCard from '@/Components/LatestWorkCard.vue';
import {inject} from 'vue';

export default { 
    components: { DesktopCard, MobileCard },
    data() {
        return {
            projects: [],
            desktopCard: false
        };
    },
    mounted() {
        window.addEventListener('resize', this.DetermineDesktopCard);
        this.DetermineDesktopCard();
    },
    destroyed() {
        window.removeEventListener('resize', this.DetermineDesktopCard);
    },
    async created() {
        const projects = inject('$projects');
        this.projects = await projects.GetAllProjects();
    },
    methods: {
        DetermineDesktopCard() {
            this.desktopCard = window.innerWidth > 749 
            console.log(this.desktopCard);            
        }
    }
}

</script>

<style scoped>
.section {
    background-color: #F6F6F6;
}

.section h1 {
    text-align: center;
    font-family: 'montserrat';
    font-weight: 700;
    font-size: 56px;
    margin: 10px 0 40px 0;
}

@media only screen and (min-width: 750px) {
    .projects {
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;
        flex-direction: row;
    }
}

/* @media only screen and (min-width: 1200px) {
    .con {
        padding: 56px 20%;
    }
} */
</style>