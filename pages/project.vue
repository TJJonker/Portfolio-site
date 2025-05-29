<template>
    <WorkTitle class="header" sub-title="Void | Rendering Engine" title="Rendering Every Pixel" min-to-read="3"
    date="Nov 18, 2024" img="/Images/CityRender.png" />
    <div class="project-content">
        <div class="properties-row narrow">
            <TitleList bold="true" title="Roles">
                <p v-for="(role, index) in roles" :key="index">{{ role }}</p>
            </TitleList>
            <TitleList bold="true" title="Technologies">
                <p v-for="(tech, index) in technologies" :key="index">{{ tech }}</p>
            </TitleList>
            <TitleList bold="true" title="Goal">
                <p>{{ goal }}</p>
            </TitleList>
            <TitleList bold="true" title="Year">
                <p>{{ year }}</p>
            </TitleList>
        </div>
        <WorkAlinea class="narrow" />
        <img class="content-image wide" src="/Images/AudioRender.png" alt="">
        <ProjectSection class="narrow" title="The Visual Experience"
            sub-title="Translating complex rendering into an accessible visual interface." , background-text="Summary">
            <WorkAlinea />
            <WorkAlinea />
            <WorkAlinea />
        </ProjectSection>
        <img class="content-image wide" src="/Images/SpaceportRender.png" alt="">
        <ProjectSection class="narrow" show-title="false" background-text="Project">
            <WorkAlinea />
            <WorkAlinea />
            <WorkAlinea />
        </ProjectSection>
        <img class="content-image wide" src="/Images/Editor.png" alt="">
        <ProjectSection class="narrow" title="The Visual experience"
            sub-title="Translating complex rendering into an accessible visual interface." background-text="Visual">
            <WorkAlinea />
            <WorkAlinea />
        </ProjectSection>
        <ProjectSection class="narrow" title="The Project in Numbers"
            sub-title="Time, code, and complexity — a snapshot of what went into creating the rendering engine.">
            <div class="numbers-container">
                <div class="row">
                    <ProjectNumber class="proj-num" title="Months" number="3"
                        description="The physics engine brings realism to games by simulating physical laws " />
                    <ProjectNumber class="proj-num" title="Months" number="3"
                        description="The physics engine brings realism to games by simulating physical laws " />
                </div>
                <div class="row">
                    <ProjectNumber class="proj-num" title="Months" number="3"
                        description="The physics engine brings realism to games by simulating physical laws " />
                    <ProjectNumber class="proj-num" title="Months" number="3"
                        description="The physics engine brings realism to games by simulating physical laws, enabling interactions like collisions, " />
                </div>
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

const goal = "Educational";
const year = "2023";
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
    width: 100%;
    background-color: var(--background-secondary-color);
    padding: var(--space-l);
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
}

.proj-num {
    width: 380px;
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