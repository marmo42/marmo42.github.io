<template>
  <div class="h-full pt-16 xl:pt-0 aspect-square flex items-center justify-center">
    <Image page="start" :path="path" class="w-20 h-20 rounded-lg ring-1 ring-gray-750"/>
  </div>
</template>

<script>
export default {
  props: {
    project: String
  },
  computed: {
    path() {
      return 'projects/' + this.project + '.png'
    }
  }
}
</script>
