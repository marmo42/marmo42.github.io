<template>
  <div class="w-full h-20 px-80 z-30 top-0 fixed flex justify-between transition" :class="showBackground ? 'bg-black-pale' : 'bg-transparent'">
    <AppHeaderLogo/>

    <AppHeaderNavbar>
      <AppHeaderNavbarItem>Start</AppHeaderNavbarItem>
      <AppHeaderNavbarItem>Blog</AppHeaderNavbarItem>
      <AppHeaderNavbarItem>About</AppHeaderNavbarItem>
    </AppHeaderNavbar>

    <AppHeaderSocials>
      <AppHeaderSocialsItem iconName="twitter2"/>
      <AppHeaderSocialsItem iconName="discord"/>
      <AppHeaderSocialsItem iconName="github2"/>
    </AppHeaderSocials>
  </div>
</template>

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
