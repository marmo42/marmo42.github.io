<template>
  <PageLink class="w-min h-full px-[20px] flex items-center" :to="link" :external="externalLink">
    <SansText class="font-semibold text-white text-[16px]">{{ text }}</SansText>
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
