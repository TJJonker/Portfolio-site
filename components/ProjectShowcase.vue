<template>
    <div>
        <AnimatedTitle
            v-if="width > 425"
            title="The Crafts"
            subTitle="What I've been working on lately"
        />
        <AnimatedTitle
            v-else
            title="Crafts"
            subTitle="What I've been working on lately"
        />
        <div class="project-stack">
            <client-only>
                <ProjectCard v-for="project in projects.slice(0, 3)"
                :title="project.title"
                :subTitle="project.subtitle"
                :content="project.content"
                :image="useProjectThumbnail(project.slug)"
                :url="`/projects/${project.slug}`"
                :goals="project.goals"
                :years="project.years"
                :roles="project.roles"
                :technologies="project.technologies"
                />
            </client-only>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { useProjectList } from '~/js/UseProjectList';
import { useProjectThumbnail } from '~/js/UseProjectThumbnail';

const { width } = useWindowSize()

const { data: projects } = await useProjectList()
</script>

<style lang="css" scoped>
.project-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}
</style>