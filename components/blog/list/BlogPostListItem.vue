<template>
  <div class="w-[360px] mx-2 mb-10">
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
