<template>
    <div class="section">
        <div class="con">
            <div class="col-s-12 title">
                <h1>What I've been <span class="secondary-text-color">working on lately</span></h1>
            </div>
            <!-- <div class="background-overlay"></div> -->
            <div class="cards">
                <latest-work-card :work=work2></latest-work-card>
                <latest-work-card :work=work2></latest-work-card>
                <latest-work-card :work=work3></latest-work-card>
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
            },
            work2: {
                imageUrl: "VOID.png",
                title: "Void Engine 2",
                subTitle: "Something",
                categories: [
                    {value: "S1"}, 
                    {value: "S1"}, 
                    {value: "S1"}
                ]
            },
            work3: {
                imageUrl: "VOID.png",
                title: "Void Engine 3",
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

.page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(30deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%);
  z-index: 2;
}

@media only screen and (min-width: 1200px) {
    .cards {
        flex-direction: row;
    }
}

</style>
