<template>
  <div class="opacity-50 hover:opacity-80 flex items-center cursor-pointer" @click="scrollToTop">
    <FooterBTTText>Back to top</FooterBTTText>
    <FooterBTTIcon/>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>
