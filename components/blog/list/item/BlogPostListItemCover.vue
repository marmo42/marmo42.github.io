<template>
  <Image :page="post._path" path="cover.jpg" class="w-full mb-8 !rounded-md"/>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
