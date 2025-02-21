<template>
  <div class="text" ref="animatedtxt">
    <h1 class="title" :class="{ 'animate': isVisible }">{{ title }}</h1>
    <p class="subheader">{{ subTitle }}</p>
  </div>
</template>

<script setup>

import { defineProps } from 'vue';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
});

const animatedtxt = ref(null);

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const titleText = gsap.timeline({
    scrollTrigger: {
      trigger: animatedtxt.value,
      start: "top 70%", // Triggers when the section is halfway in view
      end: "top 30%",
      scrub: true,
    }
  });

  titleText.to(animatedtxt.value.querySelector(".title"), {
    "--title-bar-width": "100%",
    duration: 15,
    ease: "power2.out"
  }, 0);
});
</script>

<style lang="css" scoped>
.text {
  margin-bottom: var(--space-l);
}

.title {
  --title-bar-width: 0%;
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
  width: var(--title-bar-width);
  background-color: var(--accent-color-underline);
  z-index: -1;
  transition: background-color var(--animation-mode-titles);
}
</style>
