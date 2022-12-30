<template>
  <div class="p-6 rounded-lg bg-gray-700/25 ring-1 ring-gray-700">
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
