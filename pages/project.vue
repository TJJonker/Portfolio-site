<template>
    <div class="project-content">
        <Grid start="3" span="8">
            <WorkTitle class="header" sub-title="Void | Rendering Engine" title="Rendering Every Pixel" min-to-read="3"
                date="Nov 18, 2024" img="/Images/CityRender.png" />
        </Grid>
        <Grid start="4" span="6">
            <div class="properties-row">
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
        </Grid>
        <Grid start="4" span="6">
            <WorkAlinea />
        </Grid>
        <Grid start="3" span="8">
            <img class="content-image" src="/Images/AudioRender.png" alt="">
        </Grid>
        <Grid start="4" span="6">
            <AnimatedTitle title="The Visual Experience"
                sub-title="Translating complex rendering into an accessible visual interface." big="false" />
        </Grid>
        <Grid start="4" span="6">
            <WorkAlinea />
        </Grid>
        <Grid start="4" span="6">
            <WorkAlinea />
        </Grid>
        <Grid start="4" span="6">
            <WorkAlinea />
        </Grid>
        <Grid start="3" span="8">
            <img class="content-image" src="/Images/SpaceportRender.png" alt="">
        </Grid>
        <Grid start="4" span="6">
            <ProjectSection show-title="false" background-text="Project">
                <WorkAlinea />
                <WorkAlinea />
                <WorkAlinea />
            </ProjectSection>
        </Grid>
        <Grid start="3" span="8">
            <img class="content-image" src="/Images/Editor.png" alt="">
        </Grid>
        <Grid start="4" span="6">
            <ProjectSection title="The Visual experience"
                sub-title="Translating complex rendering into an accessible visual interface." background-text="Visual">
                <WorkAlinea />
                <WorkAlinea />
            </ProjectSection>
        </Grid>
        <Grid start="4" span="6">
            <AnimatedTitle title="The Project in Numbers"
                sub-title="Time, code, and complexity — a snapshot of what went into creating the rendering engine."
                big="false" />
        </Grid>
        <Grid start="4" span="6">
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
        </Grid>
    </div>
</template>

<script setup>
const goal = "Educational";
const year = "2023";
const roles = ["Researcher", "Developer"];
const technologies = ["OpenGL", "C/C++", "PreMake"];
</script>

<style lang="css" scoped>
.header {
    margin-top: var(--space-l);
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
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
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
}
</style>