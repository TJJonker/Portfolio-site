<template>
    <div class="alinea" ref="alinea">
        <span class="background-text uppercase" ref="bgText">{{ backgroundText }}</span>
        <!-- <client-only> -->
            <AnimatedTitle v-if="width > 425" :title="title" :sub-title="subTitle" big="false" />
            <AnimatedTitle v-else :title="titleShort" :sub-title="subTitle" big="false" />
        <!-- </client-only> -->
        <div class="content-row">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();

defineProps({
    showTitle: { type: Boolean, default: true },
    title: { type: String },
    titleShort: { type: String },
    subTitle: { type: String },
    backgroundText: { type: String }
})

const alinea = ref(null);
const bgText = ref(null);

onMounted(async () => {
    await nextTick();
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(bgText.value,
        { x: "30vw", opacity: 0, rotate: 15, filter: "blur(20px)", },  // Starts off-screen, rotated, and invisible
        {
            x: "-25vw",  // Moves all the way left after passing center
            opacity: 1,  // Fades in as it enters
            rotate: -10, // Slight rotation for style
            ease: "ease.out",
            filter: "blur(0px)",
            scrollTrigger: {
                trigger: alinea.value,
                start: "top 50%",    // Start when the section enters viewport
                end: "bottom 80%",   // Continue moving after passing center
                scrub: true,         // Smooth movement
            }
        }
    );
});
</script>

<style lang="scss" scoped>
.background-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10rem;
    /* Adjust as needed */
    font-weight: bold;
    color: var(--background-secondary-color);
    /* Subtle effect */
    white-space: nowrap;
    z-index: -1;
}

.content-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);

    @media (max-width: $breakpoint-mobile) {
        gap: var(--space-xl);
    }
}
</style>