<template>
  <AppContentItem class="w-full">
    <BlogPostListHeading>{{ heading }}</BlogPostListHeading>

    <div class="grid grid-cols-3 gap-10">
      <slot></slot>
    </div>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    heading: String
  }
}
</script>
