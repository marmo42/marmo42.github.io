<template>
  <PageSection class="w-full pt-56 pb-40 fade-background flex items-center justify-center">
    <div class="max-w-[700px] flex flex-col items-center">
      <HeaderTitle>{{ title }}</HeaderTitle>
      <HeaderSubtitle>{{ subtitle }}</HeaderSubtitle>
    </div>
  </PageSection>
</template>

<style>
.fade-background {
  background: linear-gradient(180deg,#111 20%,rgba(20,44,105,0) 60%),#1a1a1a;
}
</style>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>
