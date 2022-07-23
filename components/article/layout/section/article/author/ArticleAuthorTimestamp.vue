<template>
  <TransparentSansText class="font-medium text-white text-[16px]" opacity="0.7">N/A</TransparentSansText>
</template>

<script>
export default {
  props: {
    timestamp: String
  },
  computed: {
    formattedTimestamp() {
      return this.timestamp
    }
  }
}
</script>
