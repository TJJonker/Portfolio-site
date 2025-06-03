<template>
    <div class="grid-container">
        <div class="wide">
            <AnimatedTitle
            title="Projects"
            subTitle="What I've been working on lately"
            />
            <div class="project-stack">
                <ProjectCard
                title="Rendering Every Pixel"
                subTitle="Void | Rendering Engine"
                content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning, real-time visuals on the screen."
                image="/Images/CityRender.png"
                url="/"
                :goals="['Educational']"
                :years="['2023']"
                :roles="['Researcher', 'Developer']"
                :technologies="['OpenGL', 'C/C++']"
                />
                <ProjectCard
                title="Rendering Every Pixel"
                subTitle="Void | Rendering Engine"
                content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning, real-time visuals on the screen."
                image="/Images/CityRender.png"
                url="/"
                :goals="['Educational']"
                :years="['2023']"
                :roles="['Researcher', 'Developer']"
                :technologies="['OpenGL', 'C/C++']"
                />
                <ProjectCard
                title="Rendering Every Pixel"
                subTitle="Void | Rendering Engine"
                content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning, real-time visuals on the screen."
                image="/Images/CityRender.png"
                url="/"
                :goals="['Educational']"
                :years="['2023']"
                :roles="['Researcher', 'Developer']"
                :technologies="['OpenGL', 'C/C++']"
                />
                <ProjectCard
                title="Rendering Every Pixel"
                subTitle="Void | Rendering Engine"
                content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning, real-time visuals on the screen."
                image="/Images/CityRender.png"
                url="/"
                :goals="['Educational']"
                :years="['2023']"
                :roles="['Researcher', 'Developer']"
                :technologies="['OpenGL', 'C/C++']"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
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