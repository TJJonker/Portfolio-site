<template>
  <ContactMe></ContactMe>  
  <footer>
    <div class="grid-container spacing">
      <FooterColumn class="position about ml" title="about">
        <p>I'm Tom Jonker, a dedicated Graphics Programmer crafting elegant solutions and captivating visuals.</p>
      </FooterColumn>
      <FooterColumn class="column-start columnWidth" title="quick links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Articles</a></li>
          <li><a href="/">About Me</a></li>
          <li><a href="/">CV</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn class="columnWidth" title="recent">
        <ul>
          <li><a href="/">Rendering Every Pixel</a></li>
          <li><a href="/">Faith and Programming</a></li>
          <li><a href="/">Counting in other Bases</a></li>
          <li><a href="/">Getting Confused</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn class="columnWidth" title="socials">
        <Socials></Socials>
      </FooterColumn>
    </div>
    <div class="grid-container">
      <hr class="divider">
    </div>
    <div class="grid-container">
      <p class="secondary copyright ml">© 2025 Tom Jonker. All rights reserved.</p>
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

<style lang="scss" scoped>
.position {
  grid-column: 2 / span 4;

  @media (max-width: $breakpoint-desktop){
    grid-column: 2 / span 3;
  }
}

.about {
  @media (max-width: $breakpoint-laptop){
    display: none;
  }
}

.column-start {
    @media (max-width: $breakpoint-laptop){
      grid-column-start: 2;
    }

    @media (max-width: $breakpoint-tablet){
      grid-column-start: 1;
    }

    @media (max-width: $breakpoint-tablet){
      grid-column-start: 1;
    }

    @media (max-width: $breakpoint-mobile){
      grid-column-start: 1;
    }
}

.columnWidth {
  grid-column-end: span 2;

  @media (max-width: $breakpoint-desktop){
    grid-column-end: span 2;
  }
  
  @media (max-width: $breakpoint-mobile){
    grid-column-end: span 4;
  }
}

.spacing {
  @media (max-width: $breakpoint-mobile){
    row-gap: var(--space-l);
  }
}

footer {
  border-top: 1px solid var(--background-tertiary-color);
  background-color: var(--background-footer-color);
  padding: var(--space-xl) 0;
  box-sizing: border-box;
}

.divider {
  width: 100%;
  border: 1px solid var(--background-tertiary-color);
  margin: var(--space-l) 0;
  grid-column: 2 / span 10;

  @media (max-width: $breakpoint-desktop){
    grid-column: 2 / span 8;
  }

  @media (max-width: $breakpoint-laptop){
    grid-column: 2 / span 6;
  }

    @media (max-width: $breakpoint-tablet){
    grid-column: 1 / span 6;
  }
}

.copyright {
    grid-column: 2 / span 10;

  @media (max-width: $breakpoint-desktop){
    grid-column: 2 / span 8;
  }

  @media (max-width: $breakpoint-tablet){
    grid-column: 1 / span 6;
  }
}

.ml {
  margin-left: var(--space-m);
}

</style>
