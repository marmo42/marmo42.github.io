<template>
  <Image :page="post._path" path="cover.jpg" class="w-full h-full -z-10 object-cover rellax" data-rellax-speed="-4"/>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
