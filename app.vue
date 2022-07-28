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
    },
    link: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  })
</script>
