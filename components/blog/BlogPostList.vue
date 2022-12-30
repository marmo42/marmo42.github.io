<template>
  <AppContentItem class="w-full">
    <BlogPostListTitle>{{ title }}</BlogPostListTitle>

    <div class="grid grid-cols-2 gap-12">
      <slot></slot>
    </div>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
