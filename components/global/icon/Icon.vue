<template>
  <div :style="style"></div>
</template>

<script>
export default {
  props: {
    name: String,
    size: String
  },
  methods: {
    path() {
      return require('~/assets/images/icons/' + this.name + '.svg')
    }
  },
  computed: {
    style() {
      const path = this.path();

      return {
        'mask-image': 'url(' + path + ')',
        'mask-size': 'cover',
        'min-width': this.size,
        'min-height': this.size
      }
    }
  }
}
</script>
