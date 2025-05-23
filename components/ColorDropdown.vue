<template>
  <div class="dropdown" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div @click="toggleWindow" class="button" :class="{ 'active': isWindowVisible }">
      <p class="line-prefix">Calming Cyan</p>
      <img src="@/public/Icons/ic_arrow_down_white.svg" alt="arrow down">
    </div>

    <transition name="dropdown-fade">
      <div v-if="isWindowVisible" class="wndw">
        <ColorOption title="Neon Green" color="#10B981" />
        <ColorOption title="Tedious Teal" color="#14B8A6" />
        <ColorOption title="Calming Cyan" color="#06B6D4" />
        <ColorOption title="Electric Blue" color="#3B82F6" />
        <ColorOption title="Amethyst Purple" color="#8B5CF6" />
        <ColorOption title="Crimson Red" color="#EF4444" />
        <ColorOption title="Burnt Orange" color="#F97316" />
        <ColorOption title="Golden Yellow" color="#F59E0B" />
      </div>
    </transition>
  </div>
</template>

<script>
import ColorOption from './ColorOption.vue';

export default {
  name: "ColorDropdown",
  components: {
    ColorOption
  },
  data() {
    return {
      isWindowVisible: false
    };
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },

  methods: {
    toggleWindow() {
      this.isWindowVisible = !this.isWindowVisible;
    },
    onMouseEnter() {
      console.log("Works");
      if (!this.isTouchDevice()) {
        console.log("Works too");
        this.isWindowVisible = true;
      }
    },
    onMouseLeave() {
      if (!this.isTouchDevice()) {
        this.isWindowVisible = false;
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target) && this.isTouchDevice()) {
        this.isWindowVisible = false;
      }
    },
    isTouchDevice() {
      return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    }
  }
}
</script>

<style lang="css" scoped>
.line-prefix {
  position: relative;
  padding-left: calc(3px + var(--space-m));
}

.line-prefix::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background-color: var(--accent-color);
  transition: background-color var(--animation-mode-titles)
}

.button {
  display: flex;
  gap: var(--space-s);
  position: relative;
  /* Position relative to the dropdown */
}

.button:hover {
  cursor: pointer;
}

.button p {
  transition: color var(--animation-mode-fast);
}

.active p {
  color: var(--text-primary-color);
}

.button:hover p {
  color: var(--text-primary-color);
}

.dropdown {
  position: relative;
  /* Make this the positioning reference for the modal */
}

.wndw {
  position: absolute;
  top: 100%;
  /* Position right below the button */
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: var(--space-s) var(--space-s);
  background-color: var(--background-primary-color);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.dropdown-fade-enter-to,
.dropdown-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>