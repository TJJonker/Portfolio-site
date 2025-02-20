<template>
    <a :href="url"
        class="card" 
        @mouseenter="setHover(true)" 
        @mouseleave="setHover(false)"
    >
        <div class="image-container">
            <img class="project-image" :src="image" alt="">
        </div>
        <div class="text">
            <p class="secondary">{{ subTitle }}</p>
            <div class="row">
                <div class="left">
                    <div class="content">
                        <h2>{{ title }}</h2>
                        <p>{{ content }}</p>
                    </div>
                    <IconArrowButton
                        class="btn"
                        title="View work"
                        :active="isHovered"
                        :link="url"
                    />
                </div>
                <div class="right">
                    <div class="properties-stack">
                        <div class="properties-row">
                            <TitleList title="The Goal">
                                <p>{{ goal }}</p>
                            </TitleList>
                            <TitleList title="Year">
                                <p>{{ year }}</p>
                            </TitleList>
                        </div>
                        <div class="properties-row">
                            <TitleList title="My Role">
                                <p v-for="(role, index) in roles" :key="index">{{ role }}</p>
                            </TitleList>
                            <TitleList title="technologies">
                                <p v-for="(tech, index) in technologies" :key="index">{{ tech }}</p>
                            </TitleList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
    </template>
    

<script setup>
    import { ref } from 'vue';
    
    // Props
    defineProps({
        title: String,
        subTitle: String,
        content: String,
        image: String,
        url: String,
        goal: String,
        year: String,
        roles: Array,
        technologies: Array,
    });
    
    // Reactive hover state
    const isHovered = ref(false);
    
    const setHover = (state) => {
        isHovered.value = state;
    };
</script>

<style lang="css" scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    padding: var(--space-m) 0;
}

.card:hover .project-image {
    padding: 0;
}

.card:hover .moving {
    padding-left: 0;
}

.image-container {
    width: 100%; /* Full width */
    height: 500px; /* Fixed height */
    overflow: hidden; /* Hide any overflow */
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    border-radius: 10px;
}

.project-image {
    width: 100%; /* Take up the full width */
    height: auto; /* Maintain aspect ratio */
    transition: transform 0.3s ease-in-out; /* Smooth zoom effect */
}

.card:hover .project-image {
    transform: scale(1.025); /* Zoom in on hover */
}

.content {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}

.text {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}

.left {
    display: flex;
    flex-direction: column;
    gap: var(--space-l)
}

.left p {
    width: 600px;
    overflow: hidden; /* Hide the overflow text */
    display: -webkit-box; /* Flexbox alternative for webkit browsers */
    -webkit-box-orient: vertical; /* Set the orientation to vertical */
    -webkit-line-clamp: 3; /* Limit the number of lines to 3 */
    line-clamp: 3; /* Standard line clamp (future-proof) */
    text-overflow: ellipsis; /* Add "..." when the text overflows */
}

.moving {
    padding-left: var(--space-s);
    transition: padding-left var(--animation-mode-medium);
}

.properties-stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
}

.properties-row {
    display: flex;
    flex-direction: row;
    gap: var(--space-l);
}

.row {
    display: flex;
    flex: row;
    justify-content: space-between;
}

.btn {
    width: 128px;
}
</style>

