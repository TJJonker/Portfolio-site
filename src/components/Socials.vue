<template>
<div class="container">
    <a href="/"><img src="/Images/Icons/GitHub.svg" alt="GitHub Icon" class="icon"></a>
    <a href="/"><img src="/Images/Icons/Linkedin.svg" alt="GitHub Icon" class="icon"></a>
    <a href="/"><img src="/Images/Icons/Google.svg" alt="GitHub Icon" class="icon"></a>
</div>
</template>

<script>
export default {
    name: "Socials",
}
</script>

<style lang="css" scoped>

a {
    margin-right: var(--space-l);
}

.icon {
  filter: grayscale(100%) brightness(70%);
  transition: filter 0.15s ease;
}

.icon:hover {
  filter: none;
}
</style>