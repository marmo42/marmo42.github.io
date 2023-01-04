<template>
  <Image page="blog" :path="path" class="w-10 h-10 !my-0 mr-3 !rounded-full"/>
</template>

<script>
export default {
  props: {
    author: String
  },
  computed: {
    path() {
      return 'authors/' + this.author.toLowerCase() + '.png'
    }
  }
}
</script>
