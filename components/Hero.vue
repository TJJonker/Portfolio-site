<template>
    <div class="hero-container">
        <div class="hero-title">
            <h1 class="hero">Graphics &</h1>
            <h1 class="hero">Engine <span style="color: var(--accent-color);">Developer</span></h1>
        </div>
        <div class="sub-hero">
            <div class="left">
                <p class="uppercase secondary sub-header">Say Hello</p>
                <Socials/>
            </div>
            <div class="right">
                <div class="header">
                    <img class="icon" src="/Icons/ic_location_white.svg" alt="Location Icon">
                    <p class="uppercase secondary sub-header">purmerend, nl</p>
                </div>
                <div class="text">
                    <p>Hey, I'm Tom - I perform difficult calculations to determine the eprfect color for every pixel on your screen!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.hero-container {
    padding: var(--space-xxl) 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
}

.hero-title {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}

.sub-hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.left {
    display: flex;
    flex-direction: row;
    gap: var(--space-l);
}

.right {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
}

.header {
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
}

.icon {
  filter: grayscale(100%) brightness(70%);
}

.text {
    width: 400px;
}
</style>

