<template>
  <NuxtLink :to="linkTo" class="font-medium text-gray-300 hover:text-white-50 text-sm" :class="{ 'text-white-50': isActive }">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkTo: String
  },
  computed: {
    isActive() {
      const path = this.$route.path;

      return path == this.linkTo || (this.linkTo.length > 1 && path.startsWith(this.linkTo));
    }
  }
}
</script>
