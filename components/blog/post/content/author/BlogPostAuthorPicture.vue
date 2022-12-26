<template>
  <img :src="'/content/authors/' + author + '/profile_picture.png'" class="w-10 h-10 mb-0 mr-3 !rounded-full"/>
</template>

<script>
export default {
  props: {
    author: String
  }
}
</script>
