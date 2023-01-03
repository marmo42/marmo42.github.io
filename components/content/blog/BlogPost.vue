<template>
  <BlogPostBackground :post="post"/>
  <BlogPostNavbar :post="post"/>

  <AppContentItem class="mt-[50vh]">
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
