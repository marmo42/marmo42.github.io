<template>
  <PageSection class="w-full pt-56 pb-40 flex items-center justify-center" :style="style">
    <div class="max-w-[700px] flex flex-col items-center">
      <slot></slot>
    </div>
  </PageSection>
</template>

<script>
export default {
  props: {
    noBackground: Boolean
  },
  computed: {
    style() {
      if(this.noBackground) return {}

      return {
        'background': 'linear-gradient(180deg, #111 20%, rgba(20,44,105,0) 60%), #1a1a1a'
      }
    }
  }
}
</script>
