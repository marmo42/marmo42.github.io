<template>
  <div class="max-w-4xl prose-content">
    <h1>{{ post.title }}</h1>
    <BlogPostDescription>{{ post.description }}</BlogPostDescription>
    <BlogPostDescription>December 15, 2022</BlogPostDescription>
    <BlogPostAuthor :author="post.author"/>

    <ContentDoc/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
