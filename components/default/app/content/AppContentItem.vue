<template>
  <div class="max-w-7xl mx-auto p-8 opacity-0 translate-y-20 transition duration-700" :class="{ 'opacity-100 translate-y-0': show }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>
