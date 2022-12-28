<template>
  <div class="h-[800px] -z-10 left-0 right-0 absolute overflow-hidden flex items-center">
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
