<template>
  <PageLink class="w-min h-full px-[40.2px] flex items-center" :to="link" external>
    <Icon class="pb-[3px]" size="18px" :name="icon"/>
  </PageLink>
</template>

<script>
export default {
  props: {
    icon: String,
    link: String
  }
}
</script>
