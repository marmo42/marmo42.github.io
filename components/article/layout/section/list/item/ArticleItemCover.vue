<template>
  <img :src="path"/>
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
