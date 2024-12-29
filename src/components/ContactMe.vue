<template>
    <div class="container">
        <div class="grid-container">
            <div class="start-2 span-10">
                <div class="image-wrapper">
                    <img src="/Images/CityRender.png" alt="CityRender" class="cropped-image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactMe"
}
</script>

<style lang="css" scoped>
.container {
    padding-top: 300px;
    margin: 0 var(--page-margin);
}

.image-wrapper {
    width: 100%; /* Full width */
    height: 500px; /* Set a specific height */
    position: relative; /* For positioning the gradient */
    overflow: hidden; /* Hide anything outside the container */
}

.cropped-image {
    width: 100%; /* Full width */
    height: 100%; /* Fill the wrapper's height */
    object-fit: cover; /* Crop and maintain aspect ratio */
    object-position: center; /* Adjust image position */
    position: absolute; /* Position the image on top of the gradient */
    top: 0;
    left: 0;
}

.image-wrapper::after {
    content: ''; /* Empty content for the pseudo-element */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0C0C0D, transparent); /* Gradient from the bottom of the image to the color */
    pointer-events: none; /* Allow interaction with the image */
}
</style>
