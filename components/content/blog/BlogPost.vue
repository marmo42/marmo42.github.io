<template>
  <BlogPostNavbar :post="post"/>

  <AppContentItem class="flex flex-col items-center">
    <BlogPostCover :post="post"/>
    <BlogPostTitle>{{ post.title }}</BlogPostTitle>
    <BlogPostDescription>{{ post.description }}</BlogPostDescription>

    <BlogPostContent :post="post"/>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
