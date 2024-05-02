<template>
<div class="card">
    <div class="image">
        <img :src="ImageUrl" alt="">
    </div>
    <div class="content">
        <div class="title">
            <h2>{{ this.project.Preview.Title }}</h2>
        </div>
        <div class="subtitle">
            <p>{{this.project.Preview.Subtitle}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default { 
    props: ['project'],
    computed: {
        ImageUrl() {
            return "/Projects/" + this.project.ContentFolder + "/Small.png";
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    width: 200px;
    margin: 12px;
    border-radius: 30px;
    overflow: hidden;
    border: 0;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, .25);
}

.image img{
    width: 100%;
}

.content {
    padding: 12px 16px;
}

h2 {
    font-family: 'montserrat';
    font-size: 20px;
    font-weight: 700;
}

p {
}

@media only screen and (min-width: 800px) {
    .card {
        width: 250px;
    }
}

@media only screen and (min-width: 950px) {
    .card {
        width: 300px;
    }
}
</style>