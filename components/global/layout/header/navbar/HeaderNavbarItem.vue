<template>
  <PageLink class="w-min h-full px-[20px] flex items-center group" :to="link" :external="externalLink">
    <SansText class="font-semibold text-gray-light dark:text-white text-[16px] group-hover:underline underline-offset-4">{{ text }}</SansText>
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
