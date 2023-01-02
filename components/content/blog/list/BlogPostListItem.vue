<template>
  <div class="p-6 rounded-lg bg-gray-750/25 ring-1 ring-gray-750 shadow-lg">
    <BlogPostListItemCover :post="post"/>
    <BlogPostListItemTitle>{{ post.title }}</BlogPostListItemTitle>
    <BlogPostListItemDescription>{{ post.description }}</BlogPostListItemDescription>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
