<template>
  <AppContentItem class="w-full h-20 !py-0 grid grid-cols-3" showImmediately>
    <AppHeaderLogo/>

    <AppHeaderNavbar>
      <AppHeaderNavbarItem to="/">Start</AppHeaderNavbarItem>
      <AppHeaderNavbarItem to="/blog">Blog</AppHeaderNavbarItem>
      <AppHeaderNavbarItem to="/design">Design</AppHeaderNavbarItem>
    </AppHeaderNavbar>

    <AppHeaderSocials>
      <AppHeaderSocialsItem iconName="twitter"/>
      <AppHeaderSocialsItem iconName="discord"/>
      <AppHeaderSocialsItem iconName="github"/>
    </AppHeaderSocials>
  </AppContentItem>
</template>
