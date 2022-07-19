<template>
  <PageLink class="w-min h-full px-[40.2px] flex items-center" :to="link" :external="externalLink">
    <SansText class="text-white text-[17.6px]">{{ text }}</SansText>
  </PageLink>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    externalLink: Boolean
  }
}
</script>
