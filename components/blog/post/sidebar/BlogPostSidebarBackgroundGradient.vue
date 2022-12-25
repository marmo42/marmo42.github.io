<template>
  <div class="w-full h-full absolute" :style="style"></div>
</template>

<script>
export default {
  computed: {
    style() {
      return {
        background: 'linear-gradient(to bottom, rgba(89,77,69,0.800) 0%, rgba(89,77,69,0.298) 33.000001%, rgba(15,15,15,1.000) 100%)'
      }
    }
  }
}
</script>
