<template>
  <PageLink class="h-full px-[20px] flex items-center" :to="link" external>
    <Icon class="default-icon-color" size="20px" :name="icon"/>
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
