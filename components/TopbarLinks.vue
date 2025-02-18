<template>
<a :href="url" class="button">
    <p class="title animate">{{ title }}</p>
</a>
</template>

<script>
export default {
    name: "TopbarLinks",
    props: {
        title: { type: String, require: true },
        url: { type: String, require: true }
    }
}
</script>

<style lang="css" scoped>
.button {
    padding: var(--space-s) var(--space-m);
}

.title {
    position: relative;
    display: inline-block;
    z-index: 1; 
}

.title::before {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 30%;
    width: 0;
    background-color: var(--accent-color-underline);
    z-index: -1;
    transition: width var(--animation-mode-fast);
}


.button:hover .title::before {
    width: 100%; 
}

.button:hover p {
    color: var(--text-primary-color);
}


</style>