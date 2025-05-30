<template>
    <div class="alinea-container">
        <h4 class="uppercase">project summary</h4>
        <p>The rendering system is the heart of a game engine's visual output, responsible for translating game data
            into stunning, real-time visuals on the screen. At its core, the rendering system takes 3D models, textures,
            and lighting information and processes them through shaders and GPU computations to generate images.
            Shaders—small programs running on the GPU—handle critical tasks like transforming 3D coordinates to 2D
            screen space and applying lighting effects, shadows, and materials.
            <br/><br/>
            real-time visuals on the screen. At its core, the rendering system takes 3D models, textures, and lighting
            information and processes them through shaders and.
            <br/><br/></p>
    </div>
</template>

<style lang="scss" scoped>

.alinea-container {
    display: grid;
    grid-template-columns: repeat( 6, 1fr);
    column-gap: var(--column-gap);
    row-gap: var(--space-l);
}

.alinea-container h4 {
    grid-column: 1 / span 2;

    @media (max-width: $breakpoint-mobile) {
        grid-column: 1 / span 6;
    }
}

.alinea-container p {
    grid-column: 3 / span 4;
    
    @media (max-width: $breakpoint-mobile) {
        grid-column: 1 / span 6;
    }
}
</style>