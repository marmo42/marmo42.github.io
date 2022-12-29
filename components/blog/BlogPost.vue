<template>
  <BlogPostBackground :post="post"/>

  <AppContentItem class="w-full mt-[500px] flex justify-center">
    <BlogPostContent :post="post"/>
    <BlogPostNavbar/>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
