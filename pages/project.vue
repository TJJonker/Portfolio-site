<template>
    <WorkTitle class="header" sub-title="Void | Rendering Engine" title="Rendering Every Pixel" min-to-read="3"
        date="Nov 18, 2024" img="/Images/CityRender.png" />
    <div class="project-content">
        <client-only>
            <div class="narrow" :class="{ 'properties-row': width > 425, 'properties-column': width < 425 }">
                <TitleList :bold="true" title="Roles" title-short="Roles" :items="roles" :vertical="width > 425" />
                <TitleList :bold="true" title="Technologies" title-short="Techs" :items="technologies"
                    :vertical="width > 425" />
                <TitleList :bold="true" title="Goal" title-short="Goal" :items="goal" :vertical="width > 425" />
                <TitleList :bold="true" title="Year" title-short="Year" :items="year" :vertical="width > 425" />
            </div>
        </client-only>
        <WorkAlinea class="narrow" />
        <img class="content-image wide" src="/Images/AudioRender.png" alt="">
        <ProjectSection class="narrow" title="The Visual Experience" title-short="Visual"
            sub-title="Translating complex rendering into an accessible visual interface." , background-text="Summary">
            <WorkAlinea title="Something" content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting information and processes them through shaders and GPU computations to generate images. Shaders—small programs running on the GPU—handle critical tasks like transforming 3D coordinates to 2D screen space and applying lighting effects, shadows, and materials. \n \n Real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting information and processes them through shaders and."  />
            <WorkAlinea title="Something" content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting information and processes them through shaders and GPU computations to generate images. Shaders—small programs running on the GPU—handle critical tasks like transforming 3D coordinates to 2D screen space and applying lighting effects, shadows, and materials. \n \n Real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting information and processes them through shaders and."  />
            <WorkAlinea title="Something" content="The rendering system is the heart of a game engine's visual output, responsible for translating game data into stunning real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting information and processes them through shaders and GPU computations to generate images. Shaders—small programs running on the GPU—handle critical tasks like transforming 3D coordinates to 2D screen space and applying lighting effects, shadows, and materials. \n \n Real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting information and processes them through shaders and."  />
        </ProjectSection>
        <img class="content-image wide" src="/Images/SpaceportRender.png" alt="">
        <ProjectSection class="narrow" :show-title="false" background-text="Project">
            <WorkAlinea />
            <WorkAlinea />
            <WorkAlinea />
        </ProjectSection>
        <img class="content-image wide" src="/Images/Editor.png" alt="">
        <ProjectSection class="narrow" title="The Visual experience" title-short="Visual"
            sub-title="Translating complex rendering into an accessible visual interface." background-text="Visual">
            <WorkAlinea />
            <WorkAlinea />
        </ProjectSection>
        <ProjectSection class="narrow" title="The Project in Numbers" title-short="Numbers"
            sub-title="Time, code, and complexity — a snapshot of what went into creating the rendering engine.">
            <div class="numbers-container">
                <ProjectNumber class="proj-num" title="Months" number="3"
                    description="The physics engine brings realism to games by simulating physical laws " />
                <ProjectNumber class="proj-num" title="Months" number="3"
                    description="The physics engine brings realism to games by simulating physical laws " />
                <ProjectNumber class="proj-num" title="Months" number="3"
                    description="The physics engine brings realism to games by simulating physical laws " />
                <ProjectNumber class="proj-num" title="Months" number="3"
                    description="The physics engine brings realism to games by simulating physical laws, enabling interactions like collisions, " />
            </div>
        </ProjectSection>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { useUi } from '@/js/UseTopbar'

const { width } = useWindowSize();
const { useTopBar } = useUi();

watchEffect(() => {
    useTopBar.value = width.value > 425
})

const goal = ["Educational"];
const year = ["2023"];
const roles = ["Researcher", "Developer"];
const technologies = ["OpenGL", "C/C++", "PreMake"];
</script>

<style lang="scss" scoped>
.header {
    margin-top: var(--space-l);

    @media (max-width: $breakpoint-mobile) {
        margin-top: 0;
    }
}

.numbers-container {
    border-radius: 20px;
    background-color: var(--background-secondary-color);
    box-sizing: border-box;
    padding: var(--space-l);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: $breakpoint-mobile) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.alinea {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    position: relative;
}

.row {
    display: flex;
    flex-direction: row;
    gap: var(--space-l);
}

.project-content {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--space-xl);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    padding: 0 var(--page-margin);
    overflow-x: hidden;
}

.properties-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.properties-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
}

.content-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: $breakpoint-desktop) {
        height: 400px;
    }

    @media (max-width: $breakpoint-laptop) {
        height: 300px;
    }

    @media (max-width: $breakpoint-tablet) {
        height: 300px;
    }

    @media (max-width: $breakpoint-mobile) {
        height: 200px;
    }
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

.narrow {
    grid-column: 4 / span 6;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 3 / span 6;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}
</style>