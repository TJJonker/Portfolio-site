<template>
    <div class="text">
        <h1 class="title" :class="{'animate': isVisible}">{{ title }}</h1>
        <p class="subheader">{{ subTitle }}</p>
    </div>
</template>

<script>
export default {
  name: "AnimatedTitle",
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
        const rect = this.$el.getBoundingClientRect();
        this.isVisible = (rect.top < window.innerHeight * getComputedStyle(document.documentElement).getPropertyValue("--animation-scroll-trigger").trim());
    }
  }
}
</script>

<style lang="css" scoped>
.text {
    margin-bottom: var(--space-l);
}

.title {
    position: relative;
    display: inline-block;
    z-index: 1; 
}

.title::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    width: 0;
    background-color: var(--accent-color-underline);
    z-index: -1;
    transition: width var(--animation-mode-titles);
}


.title.animate::before {
    width: 100%; 
}
</style>
