<template>
  <NuxtLink :to="linkTo">
    <img :src="logoPath" class="w-12 h-12"/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: String
  },
  computed: {
    logoPath() {
      return this.linkTo + '.png'
    },
    linkTo() {
      return 'https://github.com/' + this.name
    }
  }
}
</script>
