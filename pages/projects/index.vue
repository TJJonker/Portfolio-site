<template>
    <div class="grid-container">
        <div class="wide">
            <AnimatedTitle
            title="Projects"
            subTitle="What I've been working on lately"
            />
            <div class="project-stack">
                <ProjectCard v-for="project in projects"
                :title="project.title"
                :subTitle="project.subTitle"
                :content="project.content"
                :image="useProjectThumbnail(project.slug)"
                url="/"
                :goals="project.goals"
                :years="project.years"
                :roles="project.roles"
                :technologies="project.technologies"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProjectList } from '~/js/UseProjectList';
import { useProjectThumbnail } from '~/js/UseProjectThumbnail';

const { data: projects } = await useProjectList();
</script>

<style lang="scss" scoped>
.project-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}

.wide {
    grid-column: 3 / span 8;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 2 / span 8;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }

}
</style>