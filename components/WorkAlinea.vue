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
p {
    width: 500px;
}

.alinea-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: $breakpoint-mobile) {
        flex-direction: column;
    }
}
</style>