<template>
    <div class="text">
        <h1 class="title">{{ title }}</h1>
        <p class="subheader">{{ subTitle }}</p>
    </div>
</template>

<script>
export default {
    name: "AnimatedTitle",
    props: {
        title: { Type: String, required: true },
        subTitle: {Type: String, required: true }
    },
    mounted() {
    const titles = document.querySelectorAll(".title"); 
    titles.forEach((title) => {
        setTimeout(() => {
            title.classList.add("animate");
        }, 100); 
    });
},

};
</script>

<style lang="css" scoped>
.text {
    margin-bottom: var(--space-l);
}

.title {
    position: relative;
    display: inline-block;
    z-index: 1; 
}

.title::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    width: 0;
    background-color: var(--accent-color-underline);
    z-index: -1;
    transition: width 0.5s ease-in-out;
}


.title.animate::before {
    width: 100%; 
}
</style>
