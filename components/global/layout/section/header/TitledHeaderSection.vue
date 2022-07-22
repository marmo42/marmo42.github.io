<template>
  <HeaderSection>
    <div class="max-w-[700px] flex flex-col items-center">
      <HeaderTitle>{{ title }}</HeaderTitle>
      <HeaderSubtitle>{{ subtitle }}</HeaderSubtitle>
    </div>
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
