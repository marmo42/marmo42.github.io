<template>
  <div class="w-full h-20 px-80 z-30 top-0 fixed flex justify-between transition" :class="{background: showBackground}">
    <AppHeaderLogo/>

    <AppHeaderNavbar>
      <AppHeaderNavbarItem>Start</AppHeaderNavbarItem>
      <AppHeaderNavbarItem>Blog</AppHeaderNavbarItem>
      <AppHeaderNavbarItem>About</AppHeaderNavbarItem>
    </AppHeaderNavbar>

    <AppHeaderSocials>
      <AppHeaderSocialsItem iconName="twitter"/>
      <AppHeaderSocialsItem iconName="discord"/>
      <AppHeaderSocialsItem iconName="github"/>
    </AppHeaderSocials>
  </div>
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
