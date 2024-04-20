<template>
    <div class="section">
        <!-- Background with angled rectangle effect -->
        <div class="section-background"></div>
        
        <div class="con">
            <div class="col-s-12 title">
                <h1>What I've been <span class="secondary-text-color">working on lately</span></h1>
            </div>
            <div class="cards">
                <latest-work-card :work="work1"></latest-work-card>
                <latest-work-card :work="work2"></latest-work-card>
                <latest-work-card :work="work1"></latest-work-card>
            </div>
        </div>
    </div>
</template>

<script>
import LatestWorkCard from './LatestWorkCard.vue'

export default { 
    components: {
        LatestWorkCard
    },
    data() {
        return {
            work1: {
                imageUrl: {
                    small: "VOID_small.png", 
                    big: "VOID_big.png"
                }, 
                title: "Void Engine",
                subTitle: "Something",
                categories: [
                    { value: "S1" }, 
                    { value: "S1" }, 
                    { value: "S1" }
                ]
            },
            work2: {
                imageUrl: {
                    small: "Article_small.png", 
                    big: "Article_big.png"
                }, 
                title: "Structures and Optimization in rendering engines",
                subTitle: "Something",
                categories: [
                    { value: "Rendering" }, 
                    { value: "Optimization" }, 
                    { value: "Article" }
                ]
            }
        }
    }
}
</script>

<style scoped>
.section {
    position: relative; /* Required for z-index */
}

.section-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-10deg, transparent 39.9%, #C4A484 40%, #C4A484 50%, transparent 50.1%);
    z-index: -1;
}

.con {
    padding: 96px 15%;
}

.title {
    text-align: center;
    margin: 48px 0px;
}

.cards {
    display: flex;
    flex-direction: column;
}

@media only screen and (min-width: 1200px) {
    .cards {
        flex-direction: row;
    }
}
</style>
