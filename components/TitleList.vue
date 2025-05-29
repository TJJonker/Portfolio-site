<template>
    <div :class="{ list: vertical, column: !vertical }">
        <p v-if="!bold" class="uppercase secondary">{{ title }}</p>
        <h4 v-else-if="bold && !vertical" class="uppercase off-white">{{ titleShort }}</h4>
        <h4 v-else class="uppercase">{{ title }}</h4>

        <template v-if="vertical">
            <p v-for="(item, index) in items" :key="index">{{ item }}</p>
        </template>
        <template v-else>
            <div class="fill">
                <span v-for="(item, index) in items" :key="index">
                    {{ item }}<span v-if="index < items.length - 1">,&nbsp;</span>
                </span>
            </div>
        </template>
    </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();

export default {
    name: "TitleList",
    props: {
        title: { type: String, required: true },
        titleShort: { type: String, required: true },
        items: { type: Array, required: true },
        bold: { type: Boolean, default: false },
        vertical: { type: Boolean, default: true }
    }
}
</script>

<style scoped>
.list {
    width: 140px;
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    align-items: center;
}

.column {
    display: grid;
    column-gap: var(--column-gap);
    row-gap: var(--row-gap);
    grid-template-columns: repeat(4, 1fr);
}

.fill {
    grid-column: 2 / span 3;
    display: flex;
    flex-wrap: wrap;
}

.off-white {
    color: var(--text-secondary-color);
}
</style>
