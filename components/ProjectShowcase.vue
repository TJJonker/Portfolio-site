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
            <ProjectCard
                title="Rendering Every Pixel"
                subTitle="Void | Rendering Engine"
                content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning, real-time visuals on the screen."
                image="/Images/CityRender.png"
                url="/"
                goal="Educational"
                year="2023"
                :roles="['Researcher', 'Developer']"
                :technologies="['OpenGL', 'C/C++']"
            />
            <ProjectCard
                title="Rendering Every Pixel"
                subTitle="Void | Rendering Engine"
                content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning, real-time visuals on the screen."
                image="/Images/CityRender.png"
                url="/"
                goal="Educational"
                year="2023"
                :roles="['Researcher', 'Developer']"
                :technologies="['OpenGL', 'C/C++']"
            />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<style lang="css" scoped>
.project-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}
</style>