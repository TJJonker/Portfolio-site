<template>
    <div class="list">
        <p class="uppercase secondary">{{ title }}</p>
        <slot/>
    </div>
</template>

<script>
export default {
    name: "TitleList",
    props: {
        title: { type:String, require: true }
    }
}
</script>

<style lang="css" scoped>
.list {
    width: 140px;
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
}
</style>