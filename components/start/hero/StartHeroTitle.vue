<template>
  <h1 class="!text-8xl !tracking-normal" :class="{ 'italic !text-transparent bg-gradient-to-r from-blue-500 via-purple to-pink bg-clip-text': emphasized }">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    emphasized: Boolean
  }
}
</script>
