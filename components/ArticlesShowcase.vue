<template>
    <div class="articleStack">
        <AnimatedTitle 
        title="Sharing Insights"
        subTitle="Exploring idea, sharing knowledge, and documenting my journey through code and design."
        />
        <ArticleCard
            title="Structural Frameworks and Optimization Techniques in Rendering Engines"
            subTitle="A look into rendering frameworks and some other stuff that applies to the fields of the creation of rendering engines."
            date="May 17, 2024"
            url="/"
            image="/Images/Void Banner.png"
        />
        <ArticleCard
            title="Building Seamless Communication: Design of a Real-Time Chat System"
            subTitle="Exploring the architecture, technologies, and challenges behind creating a fast, reliable, and user-friendly chat application."
            date="March 14, 2023"
            url="/"
            image="/Images/Chatroom Banner.png"
        />
        <ArticleCard
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
            link="/hoe"
            />
        </div>
    </div>
</template>

<script>
import AnimatedTitle from './AnimatedTitle.vue';
import ArticleCard from './ArticleCard.vue';
import IconArrowButton from './IconArrowButton.vue';

export default {
    name: "ArticlesShowcase",
    components: {
        AnimatedTitle,
        ArticleCard,
        IconArrowButton
    }
}
</script>

<style lang="css" scoped>
.articleStack {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);    
}

.btn {
    width: 128px;
}
</style>