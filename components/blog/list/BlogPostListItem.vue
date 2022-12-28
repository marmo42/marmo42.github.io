<template>
  <div class="space-y-2">
    <BlogPostListItemCover :post="post"/>
    <BlogPostListItemHeading>{{ post.title }}</BlogPostListItemHeading>
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
