<template>
  <p class="w-full flex items-center font-semibold text-gray-600 dark:text-gray-400">
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
