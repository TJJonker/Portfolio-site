<template>
    <div class="hero-container">
        <div class="grid-container">
            <div class="hero-title">
                <h1 class="hero left-box">
                    <span class="underline-title at-1">Performance</span>
                </h1>
                <h1 class="hero right-box">
                    <span class="at-3">Software</span> <span class="fill-mask accent at-4">Architect</span>
                </h1>
            </div>
            <div class="left">
                <div class="socials-wrapper">
                    <p class="uppercase secondary sub-header ">Say Hello</p>
                    <Socials />
                    <div class="socials-overlay"></div>
                </div>
            </div>
            <div class="right">
                <div class="header">
                    <div class="icon-container">
                        <img class="icon" src="/Icons/ic_location_white.svg" alt="Location Icon">
                    </div>
                    <div class="text-container">
                        <p class="uppercase secondary sub-header text-container-text">purmerend, nl</p>
                    </div>
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
            start: "top 30%", // Triggers when the section is halfway in view
            end: "top -20%",
            scrub: true,
        }
    });

    // titleText.to(".left-box", {
    //     x: -50, // Moves left
    //     opacity: 0,
    //     duration: 1.5,
    //     ease: "ease.inOut"
    // }, 0); // "0" ensures both start at the same time

    // titleText.to(".right-box", {
    //     x: 50, // Moves right
    //     opacity: 0,
    //     duration: 1.5,
    //     ease: "ease.inOut"
    // }, 0); // Same timing for both

    const introAnimation = gsap.timeline(
        {
            defaults: { duration: 2, ease: "power2.out" },
            onComplete: () => { typeDefaultText(loopTypewriter); }
        },
    );

    // Animate the titles
    introAnimation
        .from(".at-1", { y: -50, opacity: 0, duration: .5, ease: "power3.out" })
        // .from(".at-2", { y: -50, opacity: 0, duration: .5, ease: "power3.out" })
        .from(".at-3", { x: -50, opacity: 0, duration: .5, ease: "power3.out" })
        .from(".at-4", { x: 50, opacity: 0, duration: .5, ease: "power3.out" })
        .to(".underline-title", { "--underline-width": "100%", duration: .5, ease: "power3.out" })
        .to(".fill-mask", { color: "var(--accent-color)", duration: .5, ease: "power3.out" })
        .to(".socials-overlay", { width: "0%", duration: .5, ease: "power3.out" })
        .to(".container .i1", { scale: 1.3, yoyo: true, repeat: 1, duration: .125 })
        .to(".container .i2", { scale: 1.3, yoyo: true, repeat: 1, duration: .125 }, "-=0.1")
        .to(".container .i3", { scale: 1.3, yoyo: true, repeat: 1, duration: .125 }, "-=0.1")
        .from(".icon-container .icon", { y: -50, opacity: 0, duration: .5 })
        .to(".text-container-text", { x: 0, duration: .5 }) // Overlaps with icon animation
        .to(".typewriter-cursor", {
            keyframes: [
                { opacity: 1, duration: 0.1 },
                { opacity: 1, duration: 0.4 },
            ],
            ease: "none"
        });

    const texts = ["I make software faster than your thoughts", "I get ego boosts when things work and an existensial crisis when they don't!", "Milliseconds...? More like Nanoseconds...!"];
    let currentIndex = 0;
    const typeTarget = document.querySelector(".typewriter-text");
    const defaultText = "Hi, I'm Tom - ";  // Default text

    // Set the default text initially

    function BlinkCursor(timeline, number) {
        timeline.to(".typewriter-cursor", {
            keyframes: [
                { opacity: 0, duration: 0.05 },
                { opacity: 0, duration: 0.55 },
                { opacity: 1, duration: 0.05 },
                { opacity: 1, duration: 0.55 }
            ],
            repeat: number,
            ease: "none"
        });
    }

    // Function to type out the default text
    function typeDefaultText(onComplete) {
        let tl = gsap.timeline({ onComplete });
        for (let i = 0; i < defaultText.length; i++) {
            tl.to(typeTarget, { textContent: defaultText.substring(0, i + 1), duration: 0.04 });
        }
    }


    // Typewriter function
    function typeText(text, onComplete) {
        let tl = gsap.timeline({ onComplete });
        for (let i = 0; i < text.length; i++) {
            tl.to(typeTarget, { textContent: defaultText + text.substring(0, i + 1), duration: 0.04 });
        }
        BlinkCursor(tl, 2);
    }

    // Erase function
    function eraseText(onComplete) {
        let text = typeTarget.textContent;
        let tl = gsap.timeline({ onComplete });
        for (let i = text.length; i >= defaultText.length; i--) {
            tl.to(typeTarget, { textContent: text.substring(0, i), duration: 0.02 });
        }
        BlinkCursor(tl, 1);
    }

    // Typewriter loop function
    function loopTypewriter() {
        typeText(texts[currentIndex], () => {
            eraseText(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                loopTypewriter();
            });
        });
    }
});
</script>

<style lang="scss" scoped>
.hero-container {
    padding: var(--space-xxl) 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}

.hero-title {
    white-space: nowrap;
    grid-column: 4 / span 6;

    @media (max-width: $breakpoint-desktop){
        grid-column: 3 / span 6;
    }
    
    @media (max-width: $breakpoint-laptop){
        grid-column: 2 / span 6;
    }

    @media (max-width: $breakpoint-tablet){
        grid-column: 1 / span 6;
    }

    @media (max-width: $breakpoint-mobile){
        white-space: unset;
        grid-column: 1 / span 4;

    }
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
    transform-origin: right center;
    /* Shrinks from the right side */
}

.left {
    position: relative;
    display: inline-block;
    grid-column: 4 / span 3;

    @media (max-width: $breakpoint-desktop){
        grid-column: 3 / span 3;
    }

    @media (max-width: $breakpoint-laptop){
        grid-column: 2 / span 3;
    }

    @media (max-width: $breakpoint-tablet){
        grid-column: 1 / span 3;
    }

    @media (max-width: $breakpoint-mobile){
        grid-column: 1 / span 4;
    }
}

.socials-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: var(--space-l);
    row-gap: var(--space-m);

    @media (max-width: $breakpoint-mobile) {
        flex-direction: column;
    }
}

.at-2,
.at-3 {
    display: inline-block;
    /* Or block/flex */
    will-change: transform;
    /* Optimizes animation */
}

.right {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    grid-column: 7 / span 3;

    @media (max-width: $breakpoint-desktop){
        grid-column: 6 / span 3;
    }

    @media (max-width: $breakpoint-laptop){
        grid-column: 5 / span 3;
    }

    @media (max-width: $breakpoint-tablet){
        grid-column: 4 / span 3;
    }

    @media (max-width: $breakpoint-mobile){
        grid-column: 1 / span 4;
    }
}

.header {
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
}

.icon-container {
    position: relative;
    overflow: hidden;
    /* Ensures the text starts behind */
}

.text-container {
    overflow: hidden;
    /* Starts behind the icon */
}

.text-container-text {
    transform: translateX(-100%);
}

.fill-mask {
    --gradient-perc: 1%;
    position: relative;
    display: inline-block;
    color: white;
    transition: color var(--animation-mode-titles);
}

.icon {
    filter: grayscale(100%) brightness(70%);
}

.typewriter-text-container {
    width: 100%;
    line-height: 1.5em;
    /* Adjust as needed */
    height: calc(1.5em * 4);
}

.typewriter {
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
    transition: background-color var(--animation-mode-titles);
}
</style>
