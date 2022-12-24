<template>
  <div class="w-full flex justify-center">
    <BlogPostBackground :post="post"/>
    <BlogPostContent/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
