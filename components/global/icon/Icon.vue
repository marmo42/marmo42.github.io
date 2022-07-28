<template>
  <img :style="style" :src="path"/>
</template>

<script>
export default {
  props: {
    name: String,
    size: String
  },
  computed: {
    path() {
      return require('~/assets/images/icons/' + this.name + '.svg')
    },
    style() {
      return {
        'min-width': this.size,
        'min-height': this.size
      }
    }
  }
}
</script>
