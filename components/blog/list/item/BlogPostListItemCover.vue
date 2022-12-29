<template>
  <img :src="'/content' + post._path + '/cover.jpg'" class="w-full mb-4 !rounded-md"/>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
