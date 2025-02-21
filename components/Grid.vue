<template>
    <div class="grid-container">
        <div :class="computedClass" class="stack">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    start: {
        type: String,
        required: true
    },
    span: {
        type: String,
        required: true
    }
});

const computedClass = computed(() => `start-${props.start} span-${props.span}`);
</script>