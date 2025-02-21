<template>
    <div class="work-header">
        <div class="work-title">
            <div>
                <p class="sub-header secondary">{{ subTitle }}</p>
                <h1>{{ title }}</h1>
            </div>
            <div>
                <p class="secondary"><span>{{ minToRead }}</span> min read <span class="divider">|</span> <span>{{ date }}</span></p>
                <div class="icons">
                    <img src="/Icons/ic_share_white.svg" alt="">
                    <img src="/Icons/ic_bookmark_white.svg" alt="">
                </div>
            </div>
        </div>
        <img class="cover-image" :src="img" alt="">
    </div>
</template>

<script setup>
defineProps({
    subTitle: { type: String, required: true },
    title: { type: String, required: true },
    minToRead: { type: String, required: true },
    date: { type: String, required: true },
    img: { type: String, required: true },
});
</script>

<style lang="css" scoped>
.work-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
}

.work-title {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.divider {
    color: var(--accent-color);
}

.icons {
    margin: var(--space-m) 0;
    display: flex;
    flex-direction: row;
    gap: var(--space-m);
}

.cover-image {
    border-radius: 10px;
}
</style>