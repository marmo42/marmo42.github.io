<template>
  <PageLink class="h-full px-[20px] flex items-center" :to="link">
    <Icon size="31px" name="brands/marmo"/>
  </PageLink>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>
