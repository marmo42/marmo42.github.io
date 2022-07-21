<template>
  <a v-if="external" :href="to">
    <slot></slot>
  </a>
  <NuxtLink v-else :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: [String, Object],
    external: Boolean
  }
}
</script>
