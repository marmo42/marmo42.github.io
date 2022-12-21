<template>
  <Button class="w-10 h-10 mx-1 filter">
    <Icon :name="iconName" class="w-5 h-5"/>
  </Button>
</template>

<script>
export default {
  props: {
    iconName: String
  }
}
</script>
