<template>
  <div class="w-full h-[800px] -z-10 absolute overflow-hidden flex items-center">
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
