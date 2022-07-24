<template>
  <HeaderSection :noBackground="noBackground">
    <slot></slot>

    <HeaderTitle>{{ title }}</HeaderTitle>
    <HeaderSubtitle>{{ subtitle }}</HeaderSubtitle>
  </HeaderSection>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    noBackground: Boolean
  }
}
</script>
