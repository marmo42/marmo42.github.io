<template>
  <div class="rounded-lg overflow-hidden bg-gray-750/25 ring-1 ring-gray-750 shadow-lg">
    <BlogPostListItemCover :post="post"/>

    <BlogPostListItemText>
      <BlogPostListItemTitle>{{ post.title }}</BlogPostListItemTitle>
      <BlogPostListItemDescription>{{ post.description }}</BlogPostListItemDescription>
    </BlogPostListItemText>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
