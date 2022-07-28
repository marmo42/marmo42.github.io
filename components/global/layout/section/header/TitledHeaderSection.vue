<template>
  <HeaderSection>
    <HeaderTitle>{{ title }}</HeaderTitle>
    <HeaderSubtitle>{{ subtitle }}</HeaderSubtitle>
  </HeaderSection>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>
