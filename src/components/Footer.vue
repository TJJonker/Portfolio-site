<template>
  <footer class="grid-container">
      <FooterColumn class="span-4" title="about">
        <p>I'm Tom Jonker, a dedicated Graphics Programmer crafting elegant solutions and captivating visuals.</p>
      </FooterColumn>
      <FooterColumn class="span-2" title="quick links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Articles</a></li>
          <li><a href="/">About Me</a></li>
          <li><a href="/">CV</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn class="span-2" title="recent">
        <ul>
          <li><a href="/">Rendering Every Pixel</a></li>
          <li><a href="/">Faith and Programming</a></li>
          <li><a href="/">Counting in other Bases</a></li>
          <li><a href="/">Getting Confused</a></li>
          <li><a href="/">Living with disappointment 101</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn class="span-2" title="socials">
        <Socials></Socials>
      </FooterColumn>
  </footer>
</template>

<script>
import FooterColumn from "./FooterColumn.vue";
import Socials from "./Socials.vue"

export default {
  name: "Footer",
  components: {
    FooterColumn,
    Socials
  },
};
</script>

<style lang="css" scoped>
footer {
  border-top: 1px solid var(--background-tertiary-color);
  background-color: var(--background-footer-color);
  padding: var(--space-xl) var(--page-margin);
  box-sizing: border-box;
}

.grid-container {
  display: grid;
  gap: var(--column-gap);
  grid-template-columns: repeat(12, 1fr);
  background-color: var(--background-footer-color);
}

.span-4 {
  grid-column: 2 / span 4;
}

.span-2 {
  grid-column: span 2;
}

</style>
