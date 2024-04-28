<template>
    <div class="content">
        <router-link :to="`/Home`">
            <img class="image-button" src="/Images/Logo/Logo_Dark_sm.svg" alt="Button Image">
        </router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default { }
</script>

<style scoped>
.content {
    position: absolute;
    top: 12px;
    left: 12px;
    cursor: pointer;
}
</style>