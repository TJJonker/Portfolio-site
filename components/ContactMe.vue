<template>
    <div class="grid-container">
        <div class="image-wrapper">
            <img src="/Images/CityRender.png" alt="CityRender" class="cropped-image">
            <div class="centering">
                <div class="content">
                    <h1 class="title">Got an idea or just want to say 'hi'</h1>
                    <div class="buns">
                        <IconArrowButton title="Send me a DM" icon="/Icons/ic_linkedin_colored.svg"
                            :iconBackground="false" link="/" />
                        <IconArrowButton title="Send me a message" icon="/Icons/ic_google_colored.svg"
                            :iconBackground="false" link="/" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconArrowButton from './IconArrowButton.vue';

export default {
    name: "ContactMe",
    components: {
        IconArrowButton
    }
}
</script>

<style lang="scss" scoped>
.grid-container {
    @media (max-width: $breakpoint-laptop) {
        padding: 0;
        display: block;
    }
}

.small-grid-container {
    @media (max-width: $breakpoint-laptop) {
        display: grid;
        gap: var(--column-gap);
        grid-template-columns: repeat(var(--grid-columns), 1fr);
        padding: 0 var(--page-margin);
    }
}

.small-outliner {
    @media (max-width: $breakpoint-laptop) {
        grid-column: 1 / span 8;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}

.image-wrapper {
    width: 100%;
    /* Full width */
    height: 500px;
    /* Set a specific height */
    position: relative;
    /* For positioning the gradient and content */
    overflow: hidden;
    /* Hide anything outside the container */
    margin-top: var(--space-xxl);

    grid-column: 2 / span 10;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 2 / span 8;
    }
}

.cropped-image {
    width: 100%;
    /* Full width */
    height: 100%;
    /* Fill the wrapper's height */
    object-fit: cover;
    /* Crop and maintain aspect ratio */
    object-position: center;
    /* Adjust image position */
    position: absolute;
    /* Position the image at the bottom */
    top: 0;
    left: 0;
}

/* Apply gradient to the image only */
.image-wrapper::after {
    content: '';
    /* Empty content for the pseudo-element */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0C0C0D, transparent);
    /* Gradient from the bottom of the image to the color */
    pointer-events: none;
    /* Allow interaction with the image */
}

.centering {
    position: absolute;
    /* Position content on top of the image */
    z-index: 1;
    /* Ensure content is above the gradient */
    width: 100%;
    /* Full width of the parent */
    height: 100%;
    /* Full height of the parent */
    display: flex;
    /* Add flexbox */
    align-items: center;
    /* Vertically center content */
}

.content {
    display: grid;
    gap: var(--column-gap);
    grid-template-columns: repeat(var(--grid-columns), 1fr);

    @media (max-width: $breakpoint-laptop) {
        padding: 0 var(--page-margin);
    }

    @media (max-width: $breakpoint-mobile) {
        row-gap: var(--column-gap);
        column-gap: 0;
    }
}

.title {
    grid-column: 5 / span 4;
    /* Start at column 4 and span 4 columns */
    grid-row: 1;
    /* First row */
    display: flex;
    justify-content: center;

    @media (max-width: $breakpoint-desktop) {
        grid-column: 3 / span 6;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 3 / span 4;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }
}

.buns {
    grid-column: 6 / span 3;
    /* Start at column 5 and span 3 columns */
    grid-row: 2;
    /* Second row */
    display: flex;
    flex-direction: column;
    gap: var(--space-s);

    @media (max-width: $breakpoint-desktop) {
        grid-column: 5 / span 3;
    }

    @media (max-width: $breakpoint-laptop) {
        grid-column: 4 / span 3;
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 3 / span 3;
    }

    @media (max-width: $breakpoint-mobile) {
        grid-column: 1 / span 4;
    }
}
</style>
