<template>
    <div class="icons-row mt-4">
        <a href="#" class="icon-container">
            <img class="icon" src="Social IconsLinkedIn.svg" alt="">
        </a>
        <a href="#" class="icon-container">
            <img class="icon" src="Social IconsGithub.svg" alt="">
        </a>
        <a href="#" class="icon-container">
            <img class="icon" src="Social IconsGoogle.svg" alt="">
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icons-row {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    padding-left: 4px;
}

.icon-container {
    display: inline-block;
    margin-right: 48px;
    transition: transform 0.1s ease-in-out; /* Add transition for smooth animation */
}

.icon {
    height: 40px;
}

/* Scale up the icon on hover */
.icon-container:hover {
    transform: scale(1.3); /* Adjust scale factor as needed */
}
</style>