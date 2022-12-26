<template>
  <div class="prose mb-2">
    <h1>{{ post.title }}</h1>
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
