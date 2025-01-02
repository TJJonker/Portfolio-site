<template>
<div class="grid-container">
    <div class="start-3 span-8 row">
        <div class="left">
            <a href="/"><img src="/Icons/ic_logo_white.svg" alt=""></a>
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
                url="/"
            />
            <TopbarLinks
                title="Projects"
                url="/"
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

<style lang="css" scoped>
.row {
    padding: var(--space-m);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-xl);
}

.left {
    display: flex;
    flex-direction: row;
    gap: var(--space-xl);
    align-items: center;
}

.right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: var(--space-l);
}
</style>