h-[800px] -z-10 left-0 right-0 absolute overflow-hidden flex items-center
<template>
  <div class="h-20 z-20 left-0 right-0 top-0 fixed transition" :class="{ background: showBackground }"></div>
</template>

<style>
.background {
  background: #0c0c0c;
}
</style>

<script>
export default {
  data() {
    return {
      showBackground: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.showBackground = window.scrollY > 0;
    }
  }
}
</script>
