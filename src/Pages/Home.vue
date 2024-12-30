<template>
    <div class="grid-container">
        <div class="start-2 span-10">
            <KnowledgeStacks></KnowledgeStacks>
        </div>
    </div>
</template>

<script>
import KnowledgeStacks from "../components/KnowledgeStacks.vue"

export default {
    name: "Home",
    components: {
        KnowledgeStacks
    }
}
</script>