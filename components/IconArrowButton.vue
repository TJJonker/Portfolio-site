<template>
    <a @mouseenter="setActive(true)" @mouseleave="setActive(false)" :href="link" class="button" :class="{active : isActive}">
        <div class="button-left">
            <div v-if="icon" class="icon" :style="iconBackgroundStyle">
                <img :src="icon" :alt="title">
            </div>
            <div class="text">
                <h4>{{ title }}</h4>
                <p v-if="subTitle" class="sub-text">{{ subTitle }}</p>
            </div>
        </div>
        <div class="arrow">
            <img src="@/public/Icons/ic_arrow_white.svg" alt="Arrow White">
        </div>
    </a>
</template>

<script>
export default {
    name: "IconArrowButton",
    props: {
        title: { type: String, required: true },
        subTitle: { type: String, required: false },
        icon: { type: String, required: false },
        link: { type: String, required: true },
        iconBackground: { type: Boolean, required: false, default: true },
        active: { type: Boolean, required: false, default: false },
    },
    data() {
        return {
            localIsActive: false
        }
    },
    computed: {
        iconBackgroundStyle() {
            return this.iconBackground
                ? { backgroundColor: 'var(--background-primary-color)' }
                : {};
        },
        isActive(){
            return this.localIsActive || this.active;
        }
    },
    methods: {
        setActive(state){
            this.localIsActive = state;
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
    padding: var(--space-s) var(--space-l);
    border-radius: 10px;
    width: 100%;
    transition: background-color var(--animation-mode-fast);
}

.active {
    cursor: pointer;
    background-color: var(--background-tertiary-color);
}

.active .arrow {
    filter: none; 
    transform: rotate(-45deg); 
}

.button-left {
    display: flex;
    flex-direction: row;
    gap: var(--space-m);
}

.text {
    padding: var(--space-s) 0;
    align-content: center;
}

.icon {
    padding: var(--space-s); 
    align-self: center; 
    border-radius: 5px;
}

.icon img {
    display: block; 
}

.arrow {
    align-self: center; 
    border-radius: 5px;
    filter: grayscale(100%) brightness(70%);
    transition: transform var(--animation-mode-fast), filter var(--animation-mode-fast);
}

.arrow img {
    display: block; 
}

</style>