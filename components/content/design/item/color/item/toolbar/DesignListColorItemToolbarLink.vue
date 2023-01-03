<template>
  <DesignListItemToolbarLink @click="copyToClipboard">Copy</DesignListItemToolbarLink>
</template>

<script>
export default {
  props: {
    color: String
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.color);
    }
  }
}
</script>
