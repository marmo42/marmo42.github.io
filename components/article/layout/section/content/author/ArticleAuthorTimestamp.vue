<template>
  <TransparentSansText class="font-medium text-white text-[16px]" opacity="0.7">{{ formattedTimestamp }}</TransparentSansText>
</template>

<script>
export default {
  props: {
    timestamp: String
  },
  computed: {
    formattedTimestamp() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return new Date(this.timestamp).toLocaleDateString('en', options)
    }
  }
}
</script>
