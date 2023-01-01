<template>
  <p class="mt-6 flex items-center text-gray-400">
    <BlogPostAuthorPicture :author="author"/>

    {{ author }}
  </p>
</template>

<script>
export default {
  props: {
    author: String
  }
}
</script>
