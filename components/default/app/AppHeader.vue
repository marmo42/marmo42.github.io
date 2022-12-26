<template>
  <div class="w-full h-20 px-20 z-30 top-0 fixed flex justify-between transition" :class="{ background: showBackground }">
    <AppHeaderLogo/>

    <AppHeaderNavbar>
      <AppHeaderNavbarItem>Start</AppHeaderNavbarItem>
      <AppHeaderNavbarItem>Blog</AppHeaderNavbarItem>
      <AppHeaderNavbarItem>About</AppHeaderNavbarItem>
    </AppHeaderNavbar>

    <AppHeaderSocials>
      <AppHeaderSocialsItem iconName="github"/>
      <AppHeaderSocialsItem iconName="youtube"/>
      <AppHeaderSocialsItem iconName="twitter"/>
    </AppHeaderSocials>
  </div>
</template>

<style>
.background {
  background: #0f0f0f;
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
  methods: {
    onScroll() {
      this.showBackground = window.scrollY > 0;
    }
  }
}
</script>
