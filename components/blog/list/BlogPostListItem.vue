<template>
  <div class="space-y-2">
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
