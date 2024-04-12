<template>
<div class="container-fluid px-0">
    <div class="hero-text">
        <h1>Tom Jonker</h1>
        <h3>Engine- and Graphics programmer</h3>
    </div>
    <div class=""></div>
    <div class="right">
        <img src="Hero-picture.png" class="hero-image" alt="">
    </div>
</div>
</template>

<script>

</script>

<style scoped>
.container-fluid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80vh;
}

.right {
    background-color: #C4A484;
}

.hero-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    translate: calc(-100vw/3/2) calc(80vh - 100% - 24px);
    width: 100%;
}

.hero-text {
    display: block;
    margin-left: auto;
    margin-right: auto;
    translate: calc(100vw/4/2);
}
</style>