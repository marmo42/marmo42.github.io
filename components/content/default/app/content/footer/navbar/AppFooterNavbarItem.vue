<template>
  <NuxtLink :to="linkTo" class="font-inter font-normal text-sm text-gray-400">
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
