<template>
    <div class="articleStack">
        <AnimatedTitle
            class="full"
            v-if="width > 425"
            title="Sharing Insights"
            subTitle="Exploring idea, sharing knowledge, and documenting my journey through code and design."
        />
        <AnimatedTitle
            class="full"
            v-else
            title="Insights"
            subTitle="Ideas, code, design, and insights."
        />
        <ArticleCard
            class="full"    
            title="Structural Frameworks and Optimization Techniques in Rendering Engines"
            subTitle="A look into rendering frameworks and some other stuff that applies to the fields of the creation of rendering engines."
            date="May 17, 2024"
            url="/"
            image="/Images/Void Banner.png"
        />
        <ArticleCard
            class="full"
            title="Building Seamless Communication: Design of a Real-Time Chat System"
            subTitle="Exploring the architecture, technologies, and challenges behind creating a fast, reliable, and user-friendly chat application."
            date="March 14, 2023"
            url="/"
            image="/Images/Chatroom Banner.png"
        />
        <ArticleCard
            class="full"
            title="Crafting Immersive Media Experiences: Development of a Custom Media Player"
            subTitle="Delving into the core featues, playback optimizations, and user-centric design of a robust media player application."
            date="November 26, 2022"
            url="/"
            image="/Images/MediaPlayer Banner.png"
            last="true"
        />
        <div class="btn">
            <IconArrowButton
                v-if="width > 425"
                title="See more..."
                link="/home"
            />

            <IconArrowButton
                v-else
                title="More..."
                link="/home"
            />
        </div>
    </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<style lang="scss" scoped>
.articleStack {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--row-gap);
    grid-template-columns: repeat(var(--grid-columns-mt), 1fr);

    @media (max-width: $breakpoint-mobile) {
        row-gap: 0;
    }
}

.btn {
    grid-column: 1 / span 2;
}

.full {
    grid-column: 1 / span var(--grid-columns-mt);
}
</style>