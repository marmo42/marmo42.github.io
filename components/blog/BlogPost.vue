<template>
  <BlogPostBackground :post="post"/>
  <BlogPostNavbar :post="post"/>

  <AppContentItem class="mt-[500px]">
    <BlogPostContent :post="post"/>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
