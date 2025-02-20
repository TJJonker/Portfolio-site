<template>
    <div class="hero-container">
        <div class="hero-title">
            <h1 class="hero left-box">Graphics &</h1>
            <h1 class="hero right-box">
                <span class="fill-text">Engine <span style="color: var(--accent-color);">Developer</span></span>
            </h1>
        </div>
        <div class="sub-hero">
            <div class="left">
                <p class="uppercase secondary sub-header">Say Hello</p>
                <Socials />
            </div>
            <div class="right">
                <div class="header">
                    <img class="icon" src="/Icons/ic_location_white.svg" alt="Location Icon">
                    <p class="uppercase secondary sub-header">purmerend, nl</p>
                </div>
                <div class="text">
                    <p>Hey, I'm Tom - I perform difficult calculations to determine the eprfect color for every pixel on
                        your screen!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


onMounted(() => {
    if (import.meta.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-title",
            start: "top 40%", // Triggers when the section is halfway in view
            end: "top 0%",
            scrub: true,
        }
    });

    tl.to(".left-box", {
        x: -100, // Moves left
        opacity: 0,
        duration: 1.5,
        ease: "power2.in"
    }, 0) // "0" ensures both start at the same time

        .to(".right-box", {
            x: 100, // Moves right
            opacity: 0,
            duration: 1.5,
            ease: "power2.in"
        }, 0); // Same timing for both

    gsap.fromTo(".hero-fill",
        { clipPath: "inset(100% 0 0 0)" },  // Starts fully hidden (bottom)
        {
            clipPath: "inset(0% 0 0 0)",  // Expands upwards
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".hero",
                start: "top 80%", // Starts when near the viewport
                end: "top 30%",
                scrub: true,
            }
        }
    );
});
</script>

<style lang="css" scoped>
.hero-container {
    padding: var(--space-xxl) 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}

.hero-title {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}

.sub-hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.left {
    display: flex;
    flex-direction: row;
    gap: var(--space-l);
}

.right {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}

.header {
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
}

.icon {
    filter: grayscale(100%) brightness(70%);
}

.text {
    width: 400px;
}
</style>
