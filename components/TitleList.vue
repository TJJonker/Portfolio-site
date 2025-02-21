<template>
    <div class="list">
        <p v-if="!bold" class="uppercase secondary">{{ title }}</p>
        <h4 v-if="bold" class="uppercase">{{ title }}</h4>
        <slot/>
    </div>
</template>

<script>
export default {
    name: "TitleList",
    props: {
        title: { type:String, require: true },
        bold: {type: Boolean, default: false}
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