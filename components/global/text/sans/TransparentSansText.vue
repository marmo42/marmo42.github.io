<template>
  <SansText :style="style">
    <slot></slot>
  </SansText>
</template>

<script>
export default {
  props: {
    opacity: {
      type: [String, Number],
      default: 0.8
    }
  },
  computed: {
    style() {
      return {
        'opacity': this.opacity
      }
    }
  }
}
</script>
