<template>
  <img class="mb-[25px] rounded-lg" :src="path"/>
</template>

<script>
export default {
  props: {
    article: Object
  },
  computed: {
    path() {
      return '/content' + this.article.path + '/cover.jpg'
    }
  }
}
</script>
