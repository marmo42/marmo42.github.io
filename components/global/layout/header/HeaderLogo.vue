<template>
  <PageLink class="px-[20px]" :to="link">
    <Icon class="default-icon-color" size="31px" name="brands/marmo"/>
  </PageLink>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>
