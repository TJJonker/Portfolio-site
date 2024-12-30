<template>
<div class="button">
    <div class="button-left">
        <div class="icon">
            <img src="/Icons/ic_figma_colored.svg" alt="Something else">
        </div>
        <div class="text">
            <h4>Figma</h4>
            <p class="sub-text">Interface Design Tool</p>
        </div>
    </div>
    <div class="arrow">
        <img src="/Icons/ic_arrow_white.svg" alt="Arrow White">
    </div>
</div>
</template>

<script>
export default {
    name: "IconArrowButton"
}
</script>

<style lang="css" scoped>
.button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--background-secondary-color);
    padding: var(--space-s) var(--space-m);
    border-radius: 10px;
}

.button:hover {
    cursor: pointer;
}

.button:hover .arrow {
    filter: none; 
    transform: rotate(-45deg); 
}

.button-left {
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
}

.text {
    padding: var(--space-s) 0;
    align-content: center;
}

.icon {
    background-color: var(--background-primary-color);
    padding: var(--space-s); 
    margin: var(--space-s);
    align-self: center; 
    border-radius: 5px;
}

.icon img {
    display: block; 
}

.arrow {
    margin: var(--space-s);
    align-self: center; 
    border-radius: 5px;
    filter: grayscale(100%) brightness(70%);
    transition: transform 0.15s ease, filter 0.15s ease;
}

.arrow img {
    display: block; 
}

</style>