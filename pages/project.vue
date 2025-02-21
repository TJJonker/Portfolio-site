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
            <AnimatedTitle title="The Visual Experience" sub-title="Translating complex rendering into an accessible visual interface." big="false"/>
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
            <WorkAlinea />
        </Grid>
        <Grid start="4" span="6">
            <WorkAlinea />
        </Grid>
        <Grid start="4" span="6">
            <WorkAlinea />
        </Grid>
        <Grid start="3" span="8">
            <img class="content-image" src="/Images/Editor.png" alt="">
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