<template>
  <span class="font-sans font-medium paragraph-text-color text-[16px]">{{ formattedTimestamp }}</span>
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
