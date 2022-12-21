<template>
  <div class="w-full h-full absolute" :style="style"></div>
</template>

<script>
export default {
  computed: {
    style() {
      return {
        background: 'linear-gradient(to bottom, rgba(13,89,74,0.800) 0%, rgba(13,89,74,0.298) 33.000001%, rgba(15,15,15,1.000) 100%)'
      }
    }
  }
}
</script>
