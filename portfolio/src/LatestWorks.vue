<template>
    <div class="section">
        <div class="con">
            <div class="col-s-12 title">
                <h1>What I've been <span class="secondary-text-color">working on lately</span></h1>
            </div>
            <div class="cards">
                <latest-work-card :work=work1></latest-work-card>
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
    data(){
        return {
            work1: {
                imageUrl: "VOID.png",
                title: "Void Engine",
                subTitle: "Something",
                categories: [
                    {value: "S1"}, 
                    {value: "S1"}, 
                    {value: "S1"}
                ]
            }
        }
    }
}
</script>

<style scoped>
.section {
    background-color: #F6F6F6;
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
</style>
