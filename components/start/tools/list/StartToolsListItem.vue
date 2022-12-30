<template>
  <img :src="logoPath" class="w-12 h-12 !rounded-none"/>
</template>

<script>
export default {
  props: {
    logoPath: String
  }
}
</script>
