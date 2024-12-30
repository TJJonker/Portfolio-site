<template>
    <a :href="link" class="button">
        <div class="button-left">
            <div class="icon" :style="iconBackgroundStyle">
                <img :src="icon" :alt="title">
            </div>
            <div class="text">
                <h4>{{ title }}</h4>
                <p v-if="subTitle" class="sub-text">{{ subTitle }}</p>
            </div>
        </div>
        <div class="arrow">
            <img src="/Icons/ic_arrow_white.svg" alt="Arrow White">
        </div>
    </a>
</template>

<script>
export default {
    name: "IconArrowButton",
    props: {
        title: { type: String, required: true },
        subTitle: { type: String, required: false },
        icon: { type: String, required: true },
        link: { type: String, required: true },
        iconBackground: {type: Boolean, required: false, default: true }
    },
    computed: {
        iconBackgroundStyle() {
            return this.iconBackground
                ? { backgroundColor: 'var(--background-primary-color)' }
                : {};
        }
    }
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
    width: 100%;
    transition: background-color .15s ease;
}

.button:hover {
    cursor: pointer;
    background-color: var(--background-tertiary-color);
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