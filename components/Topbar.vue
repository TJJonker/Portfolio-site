<template>
<div class="grid-container">
    <div class="position row">
        <div class="left">
            <a href="/home"><img src="@/public/Icons/ic_logo_white.svg" alt=""></a>
            <ColorDropdown/>
        </div>

        <div class="right">
            <TopbarLinks
                title="CV"
                url="/"
            />
            <TopbarLinks
                title="About" 
                url="/"
            />
            <TopbarLinks
                title="Articles"
                url="/articles"
            />
            <TopbarLinks
                title="Projects"
                url="/projects"
            />
        </div>
    </div>
</div>
</template>

<script>
import TopbarLinks from './TopbarLinks.vue';
import ColorDropdown from './ColorDropdown.vue';

export default {
    name: "Topbar",
    components: {
        TopbarLinks,
        ColorDropdown
    }
}
</script>

<style lang="scss" scoped>

.position {
    grid-column: 3 / span 8;

    @media (max-width: $breakpoint-desktop){
        grid-column: 2 / span 8;
    }

    @media (max-width: $breakpoint-laptop) {
       grid-column: 2 / span 6; 
    }

    @media (max-width: $breakpoint-tablet) {
        grid-column: 1 / span 6;
    }

    @media (max-width: $breakpoint-mobile) {
        grid-column: 1 / span 4;
    }
}

.row {
    padding: var(--space-m);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-l);
}

.left {
    display: flex;
    flex-direction: row;
    gap: var(--space-xl);
    align-items: center;
    width: 100%;

    @media (max-width: $breakpoint-mobile) {
        justify-content: space-between;
    }
}

.right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: var(--space-l);

    @media (max-width: 480px) {
        display: none;
    }
}
</style>