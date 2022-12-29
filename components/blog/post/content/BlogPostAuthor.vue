<template>
  <div class="mt-6 font-roboto font-medium flex items-center text-gray-400 text-base">
    <BlogPostAuthorPicture :author="author"/>

    {{ author }}
  </div>
</template>

<script>
export default {
  props: {
    author: String
  }
}
</script>
