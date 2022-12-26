<template>
  <div class="w-full flex justify-center">
    <BlogPostBackground :post="post"/>

    <div class="mt-[575px] flex">
      <BlogPostContent/>
      <BlogPostNavbar/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
