<template>
  <PageSection class="w-full pt-56 pb-40 flex items-center justify-center" :style="containerStyle">
    <div class="flex flex-col items-center" :style="style">
      <slot></slot>
    </div>
  </PageSection>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String,
      default: '700px'
    },
    noBackground: Boolean
  },
  computed: {
    style() {
      return {
        'max-width': this.maxWidth
      }
    },
    containerStyle() {
      if(this.noBackground) return {}

      return {
        'background': 'linear-gradient(180deg, #111 20%, rgba(20,44,105,0) 60%), #1a1a1a'
      }
    }
  }
}
</script>
