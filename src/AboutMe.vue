<template>
    <div class="con">
        <div class="col-s-12 title">
            <h1>Behind the <span class="secondary-text-color">screens</span></h1>
        </div>
        <div class="content">
            <div class="col-sm-12 col-xl-9 text justified-text">
                <p>I'm Tom, a final-year Game Development student at the Amsterdam University of Applied Sciences. Since my exchange to Fanshawe College Canada, I have had a passion for engine and graphics programming, and I'm not planning on stopping anytime soon. I am currently invested in creating engaging visual effects, conducting research, and diving into optimization techniques. </p>  
                <p>I've started writing articles and documenting my research and projects. Curious to find out what I've made? </p>
            </div>
            <div class="col-sm-12 col-xl-3 images">
                <img src="Fanshawe.png" alt="">
                <img src="HvA.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default { }
</script>

<style scoped>
.con {
    padding: 96px 15%;
}

.title {
    text-align: center;
    margin: 48px 0px;
}

.content {
    display: flex;
    flex-wrap: wrap;
}

.text {
    font-size: 34px;
    font-family: 'Montserrat';
    font-weight: 400;
}

.justified-text {
    text-align: justify;
    text-justify: inter-word;
}

.images {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 24px 0;
}

.images img {
    max-height: 200px;
}

@media only screen and (min-width: 1200px) {
    .images {
        flex-direction: column;
        margin: 0;
    }

    .text {
        padding-right: 100px;
    }
}

@media only screen and (min-width: 3600px) {
.con {
    margin: 0 30%;
}
}
</style>