<template>
  <NuxtLink :to="linkTo" class="font-medium text-gray-300 hover:text-white-50 text-sm">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkTo: String
  }
}
</script>
