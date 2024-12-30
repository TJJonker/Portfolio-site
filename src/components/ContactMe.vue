<template>
    <div class="container">
        <div class="grid-container">
            <div class="start-2 span-10">
                <div class="image-wrapper">
                    <img src="/Images/CityRender.png" alt="CityRender" class="cropped-image">
                    <div class="content">
                        <h1>Welcome to My Site</h1>
                        <p>Your description or catchy phrase goes here!</p>
                        <button class="cta-button">Learn More</button>
                    </div>
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
    margin: 0 var(--page-margin);
}

.image-wrapper {
    width: 100%; /* Full width */
    height: 500px; /* Set a specific height */
    position: relative; /* For positioning the gradient and content */
    overflow: hidden; /* Hide anything outside the container */
}

.cropped-image {
    width: 100%; /* Full width */
    height: 100%; /* Fill the wrapper's height */
    object-fit: cover; /* Crop and maintain aspect ratio */
    object-position: center; /* Adjust image position */
    position: absolute; /* Position the image at the bottom */
    top: 0;
    left: 0;
}

/* Apply gradient to the image only */
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

/* Ensure content sits above the image and gradient */
.content {
    position: absolute; /* Position content on top of the image */
    bottom: 20px; /* Adjust the distance from the bottom */
    left: 20px; /* Adjust the distance from the left */
    color: white; /* Text color */
    padding: 20px; /* Padding for spacing */
    max-width: 80%; /* Limit width of content */
    z-index: 1; /* Ensure content is above the gradient */
}

.content h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.content p {
    font-size: 1rem;
    margin-bottom: 20px;
}

.cta-button {
    background-color: #2196F3; /* Button color */
    color: white; /* Text color */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #1976D2; /* Button hover color */
}
</style>
