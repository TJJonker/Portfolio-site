<template>
    <div>
        <AnimatedTitle
            title="The Crafts"
            subTitle="What I've been working on lately"
        />
        <div class="project-stack">
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
</template>

<script>
import AnimatedTitle from './AnimatedTitle.vue';
import ProjectCard from './ProjectCard.vue';

export default {
    components: {
        AnimatedTitle,
        ProjectCard
    }
}
</script>

<style lang="css" scoped>
.project-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}
</style>