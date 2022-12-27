<template>
  <AppContentItem class="w-full flex justify-center">
    <BlogPostBackground :post="post"/>

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
