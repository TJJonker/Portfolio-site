<template>
  <ContactMe></ContactMe>  
  <footer>
    <div class="grid-container">
      <FooterColumn class="span-4 start-2 ml" title="about">
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
        </ul>
      </FooterColumn>
      <FooterColumn class="span-2" title="socials">
        <Socials></Socials>
      </FooterColumn>
    </div>
    <div class="grid-container">
      <hr class="start-2 span-10 divider">
    </div>
    <div class="grid-container">
      <p class="secondary start-2 span-10 ml">@ 2024 Tom Jonker. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import FooterColumn from "./FooterColumn.vue";
import Socials from "./Socials.vue"
import ContactMe from "./ContactMe.vue"

export default {
  name: "Footer",
  components: {
    FooterColumn,
    Socials,
    ContactMe
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

.divider {
  width: 100%;
  border: 1px solid var(--background-tertiary-color);
  margin: var(--space-l) 0;
}

.ml {
  margin-left: var(--space-m);
}

</style>
