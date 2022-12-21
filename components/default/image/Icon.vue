<template>
  <img src="~/assets/images/icons/youtube.svg"/>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    path() {
      return '~/assets/images/icons/' + this.name + '.svg'
    }
  }
}
</script>
