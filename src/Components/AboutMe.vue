<template>    
<div class="con bg-white">
    <div class="title">
        <h1>Behind the <span class="secondary-text-color">screens</span></h1>
    </div>
    <div class="content">
        <div class="text justified-text">
            <p>I'm Tom, a final-year Game Development student at the Amsterdam University of Applied Sciences. Since my exchange to Fanshawe College Canada, I have had a passion for engine and graphics programming, and I'm not planning on stopping anytime soon. I am currently invested in creating engaging visual effects, conducting research, and diving into optimization techniques. </p>  
            <p>I've started writing articles and documenting my research and projects. Curious to find out what I've made? </p>
        </div>
        <div class="images">
            <img src="Images/Misc/Fanshawe.png" alt="">
            <img src="Images/Misc/HvA.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default { }
</script>

<style scoped>
.title {
    text-align: center;
    margin-bottom: 48px;
}

.content {
    display: flex;
    flex-wrap: wrap;
}

.text {
    font-size: 18px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.justified-text {
    text-align: justify;
     text-justify: inter-word;
}

.images {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
}

.images img {
    max-height: 100px;
    max-width: 300px;
    margin-top: 32px;
}

@media only screen and (min-width: 750px) {
    .images {
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
}

@media only screen and (min-width: 1200px) {
    .images {
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
    }
        
    .text {
        padding-right: 100px;
        font-size: 24px;
        font-family: 'Montserrat';
        font-weight: 400;
    }

    .images img {
        max-height: 200px;
        margin: 0;
    }

    .content {
        flex-direction: row;
        flex-wrap: nowrap;
    }
}

</style>