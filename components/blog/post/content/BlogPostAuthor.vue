<template>
  <div class="font-roboto font-medium flex items-center text-gray-light text-base">
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
