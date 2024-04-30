<template>
    <router-view></router-view>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style>
.primary-text-color {
    color: black;
}

.secondary-text-color {
    color: #C4A484;
}

.con {
    padding: 56px 40px;
}

@media only screen and (min-width: 750px) {
    .con {
        padding: 56px 15%;
    }
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px; 
}

::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
</style>