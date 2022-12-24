<template>
  <img :src="'/content' + post._path + '/cover.jpg'" class="w-full h-full -z-10 rellax" data-rellax-speed="-4"/>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
