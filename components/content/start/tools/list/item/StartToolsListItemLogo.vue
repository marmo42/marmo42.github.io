<template>
  <Image page="start" :path="path" class="w-12 h-12"/>
</template>

<script>
export default {
  props: {
    tool: String
  },
  computed: {
    path() {
      return 'tools/' + this.tool + '.png'
    }
  }
}
</script>
