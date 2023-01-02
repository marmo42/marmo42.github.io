<template>
  <Image class="w-14 h-14 !rounded-full" page='design' :path="'logos/' + path + '.png'"/>
</template>

<script>
export default {
  props: {
    path: String
  }
}
</script>
