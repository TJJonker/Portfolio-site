<template>
    <div @click="setColor" class="option">
      <div class="color-square" :style="{ backgroundColor: color }"></div> <!-- Dynamic square -->
      <p class="line-prefix" :style="{ color: color }">{{ title }}</p>
    </div>
</template>
  
<script>
import { setAccentColor } from '~/js/colorManager.js';

  export default {
    name: "ColorOption",
    props: {
      title: { type: String, required: true },
      color: { type: String, required: true }
    },
    methods: {
        setColor(){
            setAccentColor(this.color);
        }
    }
  }
</script>

<style lang="css" scoped>
.option {
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
    align-items: center; /* Align square and text vertically */
    padding: var(--space-xs);
    transition: gap var(--animation-mode-fast);
}

.option p {
    white-space: nowrap; /* Prevents wrapping of text */
}

.color-square {
    width: 3px;  /* Set the size of the square */
    height: 24px;
}

.option:hover {
    gap: var(--space-m);
    cursor: pointer;
}
</style>
  