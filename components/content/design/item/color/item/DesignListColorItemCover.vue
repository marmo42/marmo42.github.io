<template>
  <DesignListItemCover :style="'background-color: ' + color"/>
</template>

<script>
export default {
  props: {
    color: String
  }
}
</script>
