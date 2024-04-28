<template>
<div class="con">
    <router-link :to="'Home'">
        <img class="me-2" src="ArrowProjects.svg"/>
    </router-link>
    <img class="banner" src="Void_Banner.png" />

    <project-markdown></project-markdown>
</div>
</template>

<script>
import ProjectMarkdown from '@/Components/ProjectMarkdown.vue';

export default {
    components: {
        ProjectMarkdown
    }
}
</script>

<style scoped>
.banner {
    width: 100%;
}
</style>