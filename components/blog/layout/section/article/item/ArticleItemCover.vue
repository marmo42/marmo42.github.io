<template>
  <img class="mb-5 rounded-lg" :src="path"/>
</template>

<script>
export default {
  props: {
    article: Object
  },
  computed: {
    path() {
      return this.article.path + '/cover.jpg'
    }
  }
}
</script>
