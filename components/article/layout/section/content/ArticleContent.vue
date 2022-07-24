<template>
  <div class="w-2/3 px-[10px]">
    <nuxt-content class="min-w-full" :document="article"/>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>
