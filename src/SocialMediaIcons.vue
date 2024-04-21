<template>
    <div class="icons-row mt-4">
        <a href="#" class="icon-container wiggle" v-for="(icon, index) in icons" :key="index" :style="{ 'animation-delay': 1 + index * 0.2 + 's' }">
            <img class="icon" :src="icon.src" :alt="icon.alt">
        </a>
    </div>
    <img class="arrow" src="ArrowGetInTouch.png" alt="">
</template>

<script>
export default {
    data() {
        return {
            icons: [
                { src: 'Social IconsLinkedIn.svg', alt: 'LinkedIn' },
                { src: 'Social IconsGithub.svg', alt: 'Github' },
                { src: 'Social IconsGoogle.svg', alt: 'Google' }
            ]
        };
    }
};
</script>

<style scoped>
.icons-row {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    padding-left: 4px;
}

.icon-container {
    display: inline-block; 
    margin-right: 48px;
    transition: transform 0.1s ease-in-out; /* Add transition for smooth animation */
}

.icon {
    height: 40px;
}

/* Scale up the icon on hover */
.icon-container:hover {
    transform: scale(1.3); /* Adjust scale factor as needed */
}

@keyframes wiggle {
    0% {
        transform: rotate(0deg);
    }
    20% {
        transform: rotate(-10deg);
    }
    40% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(-5deg);
    }
    80% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(0deg); /* Rotate back to 0 degrees */
    }
}

.icon-container.wiggle {
    animation: wiggle 0.5s; /* Adjust duration as needed */
}

.arrow {
    position: relative;
    margin-top: 12px;
    margin-left: 12px;
    max-width: 110px;
}
</style>
