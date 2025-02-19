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
                <p class="uppercase">Say Hello</p>
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
    background-color: brown;
}
</style>