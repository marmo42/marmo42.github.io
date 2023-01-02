<template>
  <div class="h-[90vh] -z-10 left-0 right-0 absolute overflow-hidden flex items-center">
    <BlogPostBackgroundOverlay/>
    <BlogPostBackgroundGradient/>
    <BlogPostBackgroundCover :post="post"/>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
