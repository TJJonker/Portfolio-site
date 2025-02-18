<template> 
<div class="column">
  <h4 class="uppercase title">{{ title }}</h4>
  <slot></slot>
</div>
</template>
  
<script>
export default {
  name: "FooterColumn",
  props: {
    title: String
  }
};
</script>

<style lang="css" scoped>
  .column {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 360px;
  }

  .title {
    margin-bottom: var(--space-l);
  }

</style>
  