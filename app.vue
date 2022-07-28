<template>
  <PageContainer>
    <PageHeader/>
    <slot></slot>
    <PageFooter/>
  </PageContainer>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | Marmo` : 'Marmo';
    }
  })
</script>
