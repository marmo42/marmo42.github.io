<template>
  <div class="prose mb-2">
    <h1>Relaxing Fireplace</h1>
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
