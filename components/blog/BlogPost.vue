<template>
  <BlogPostBackground :post="post"/>

  <AppContentItem class="w-full flex justify-center">
    <div class="mt-[575px] flex">
      <BlogPostContent :post="post"/>
      <BlogPostNavbar/>
    </div>
  </AppContentItem>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
