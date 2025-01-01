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
        <div class="container">
            <a href="/" class="button">
                <h4>See more...</h4>
            </a>
        </div>
    </div>
</template>

<script>
import AnimatedTitle from './AnimatedTitle.vue';
import ArticleCard from './ArticleCard.vue';

export default {
    name: "ArticlesShowcase",
    components: {
        AnimatedTitle,
        ArticleCard
    }
}
</script>

<style lang="css" scoped>
.articleStack {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);    
}

.container {
    display: flex;
    flex-direction: row;
}

.button {
    border: 1px solid var(--accent-color);
    padding: var(--space-m) var(--space-l);
    border-radius: 10px;
    transition: background-color var(--animation-mode-fast);
}

.button:hover {
    background-color: var(--accent-color);
}

.button:hover h4 {
    color: var(--background-primary-color);
}

h4 {
    transition: color var(--animation-mode-fast);
}

</style>