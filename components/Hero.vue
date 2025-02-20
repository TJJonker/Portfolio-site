<template>
    <div class="hero-container">
        <div class="hero-title">
            <h1 class="hero left-box"><span class="underline-title">Graphics</span> &</h1>
            <h1 class="hero right-box">
                Engine <span class="fill-mask accent">Developer</span>
            </h1>
        </div>
        <div class="sub-hero">
            <div class="left">
                <div class="socials-wrapper">
                    <p class="uppercase secondary sub-header ">Say Hello</p>
                    <Socials />
                    <div class="socials-overlay"></div>
                </div>
            </div>
            <div class="right">
                <div class="header">
                    <img class="icon" src="/Icons/ic_location_white.svg" alt="Location Icon">
                    <p class="uppercase secondary sub-header">purmerend, nl</p>
                </div>
                <div class="typewriter-text-container">
                    <p class="typewriter"><span class="typewriter-text"></span><span class="typewriter-cursor"> |</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";


onMounted(() => {
    if (import.meta.client) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);
    }

    const titleText = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-title",
            start: "top 40%", // Triggers when the section is halfway in view
            end: "top 0%",
            scrub: true,
        }
    });

    titleText.to(".left-box", {
        x: -100, // Moves left
        opacity: 0,
        duration: 1.5,
        ease: "power2.in"
    }, 0); // "0" ensures both start at the same time

    titleText.to(".right-box", {
        x: 100, // Moves right
        opacity: 0,
        duration: 1.5,
        ease: "power2.in"
    }, 0); // Same timing for both

    const text = "Hey, I'm Tom - I perform difficult calculations to determine the perfect color for every pixel on your screen!"; // Your text
    const charsPerSecond = 80; // Adjust for desired speed
    const duration = text.length / charsPerSecond; // Ensures constant speed

    const introAnimation = gsap.timeline(
        { defaults: { duration: 2, ease: "power2.out" } }
    );

    introAnimation
        .to(".underline-title", { "--underline-width": "100%", duration: 1, ease: "power2.out", })
        .to(".fill-mask", { "--gradient-perc": "100%", duration: 1.5, })
        .to(".socials-overlay", { x: "100%" }) // Cover reveal
        .to(".typewriter-cursor", { 
            keyframes: [
                { opacity: 1, duration: 0.1 }, 
                { opacity: 1, duration: 0.3 },
            ],
            ease: "none"
        })
        .to(".typewriter-cursor", { 
            keyframes: [
                { opacity: 0, duration: 0.1 }, 
                { opacity: 0, duration: 0.3 }, 
                { opacity: 1, duration: 0.1 }, 
                { opacity: 1, duration: 0.3 }
            ],
            repeat: 2,
            ease: "none"
        })
        .to(".typewriter-text", { text, duration, ease: "none" }) // Typewriter effect
        .to(".typewriter-cursor", { 
            keyframes: [
                { opacity: 0, duration: 0.1 }, 
                { opacity: 0, duration: 0.3 }, 
                { opacity: 1, duration: 0.1 }, 
                { opacity: 1, duration: 0.3 }
            ],
            repeat: -1,
            ease: "none"
        })
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

.socials-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background-primary-color);
    z-index: 2;
    /* Ensure it covers Socials initially */
}

.left {
    position: relative;
    display: inline-block;
    overflow: hidden;
}

.socials-wrapper {
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

.fill-mask {
    --gradient-perc: 1%;
    position: relative;
    display: inline-block;
    color: white;
    background: linear-gradient(to top, var(--accent-color) calc(var(--gradient-perc) - 1%), white var(--gradient-perc));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.icon {
    filter: grayscale(100%) brightness(70%);
}

.typewriter-text-container {
    width: 400px;
    line-height: 1.5em; /* Adjust as needed */
    height: calc(1.5em * 4);
}

.typewriter {
    white-space: pre-wrap;
    display: inline-block;
}

.typewriter-cursor {
    display: inline-block;
    font-weight: bold;
    color: white;
    opacity: 0;
}

.underline-title {
    position: relative;
    display: inline-block;
    z-index: 1;
    --underline-width: 0%;
}

.underline-title::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    width: var(--underline-width);
    background-color: var(--accent-color-underline);
    z-index: -1;
}
</style>
