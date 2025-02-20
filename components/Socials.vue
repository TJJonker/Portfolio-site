<template>
<div class="container">
    <a href="https://github.com/tjjonker"><img src="/Icons/ic_github_white.svg" alt="GitHub Icon" class="icon i1"></a>
    <a href="https://www.linkedin.com/in/tj-jonker/"><img src="/Icons/ic_linkedin_white.svg" alt="GitHub Icon" class="icon i2"></a>
    <a href="mailto:tjj.jonker@gmail.com"><img src="/Icons/ic_google_white.svg" alt="GitHub Icon" class="icon i3"></a>
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
  transition: filter var(--animation-mode-fast);
}

.icon:hover {
  filter: none;
}
</style>