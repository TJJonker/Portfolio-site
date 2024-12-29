<template>
<div class="container">
    <a href="https://github.com/tjjonker"><img src="/Icons/GitHub.svg" alt="GitHub Icon" class="icon"></a>
    <a href="https://www.linkedin.com/in/tj-jonker/"><img src="/Icons/Linkedin.svg" alt="GitHub Icon" class="icon"></a>
    <a href="mailto:tjj.jonker@gmail.com"><img src="/Icons/Google.svg" alt="GitHub Icon" class="icon"></a>
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