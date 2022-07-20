<template>
  <div class="absolute h-full left-1/2 -translate-x-1/2 flex items-center justify-center">
    <PageLink class="h-full px-[40.2px] flex items-center" :to="link">
      <Icon size="28px" name="brands/marmo"/>
    </PageLink>
  </div>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>
