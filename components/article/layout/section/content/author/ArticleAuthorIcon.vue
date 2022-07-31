<template>
  <img class="w-[72px] h-[72px] box-shadow rounded-full" :src="path"/>
</template>

<script>
export default {
  props: {
    author: String
  },
  computed: {
    path() {
      return '/authors/' + this.author + '/icon.png'
    }
  }
}
</script>
