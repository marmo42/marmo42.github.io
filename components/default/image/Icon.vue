<template>
  <Image :path="path"/>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    path() {
      return 'icons/' + this.name + '.svg'
    }
  }
}
</script>
