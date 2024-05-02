<template>
    <div class="icons-row mt-4">
        <a v-for="(icon, index) in icons" :href=icon.url target="_blank" class="icon-container" :class="{ 'wiggle': icon.isWiggling }" :key="index" :style="{ 'animation-delay': 1 + index * 0.2 + 's' }">
            <img class="icon" :src="icon.src" :alt="icon.alt">
        </a>
    </div>
    <img class="arrow" src="Images/Misc/ArrowGetInTouch.png" alt="">
</template>

<script>
export default {
    data() {
        return {
            icons: [
                { src: 'Images/Icons/Dark/LinkedIn.svg', alt: 'LinkedIn', url: "https://linkedin.com/in/tj-jonker", isWiggling: true },
                { src: 'Images/Icons/Dark/Github.svg', alt: 'Github', url: "https://github.com/TJJonker", isWiggling: true },
                { src: 'Images/Icons/Dark/Mail.svg', alt: 'Google', url: "mailto: tjj.jonker@gmail.com", isWiggling: true }
            ]
        };
    },
    mounted() {
        this.startWiggleInterval();
    },
    methods: {
        startWiggleInterval() {
        this.icons.forEach((icon, index) => { 
            setInterval(() => {
                icon.isWiggling = !icon.isWiggling;
            }, 2500); 
        });
        },
        stopWiggleInterval() {
            this.icons.forEach(icon => {
                clearInterval(icon);
            });
        }
    },
    beforeDestroy() {
        // Clear interval timers before component is destroyed
        this.stopWiggleInterval();
    }
};
</script>

<style scoped>
.icons-row {
    display: flex;
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
    animation: wiggle .5s; /* Adjust duration as needed */
}

.arrow {
    position: relative;
    margin-top: 12px;
    margin-left: 24px;
    max-width: 110px;
}
</style>
