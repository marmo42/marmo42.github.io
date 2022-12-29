<template>
  <div class="space-y-2 p-6 rounded-xl bg-gray-800">
    <BlogPostListItemCover :post="post"/>
    <BlogPostListItemTitle>{{ post.title }}</BlogPostListItemTitle>
    <BlogPostListItemAuthor>{{ post.author }}</BlogPostListItemAuthor>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
