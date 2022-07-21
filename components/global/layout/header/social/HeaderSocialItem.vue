<template>
  <PageLink class="h-full pl-[40.2px] flex items-center" :to="link" external>
    <Icon size="20px" :name="icon"/>
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
