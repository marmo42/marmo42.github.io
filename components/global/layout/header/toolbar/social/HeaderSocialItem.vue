<template>
  <PageLink class="px-[20px]" :to="link" external>
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
