<template>
  <PageLink class="w-min h-full px-[20px] flex items-center group" :to="link" :external="externalLink">
    <span class="font-sans font-semibold subtitle-text-color text-[16px] group-hover:underline underline-offset-4">{{ text }}</span>
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
