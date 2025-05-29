<template>
    <div class="articleStack">
        <AnimatedTitle 
        class="full"
        title="Sharing Insights"
        subTitle="Exploring idea, sharing knowledge, and documenting my journey through code and design."
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
            title="See more..."
            link="/home"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.articleStack {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--row-gap);
    grid-template-columns: repeat(10, 1fr);
}

.btn {
    grid-column: 1 / span 2;
}

.full {
    grid-column: 1 / span 10;
}
</style>