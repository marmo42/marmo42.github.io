<template>
  <PageContainer>
    <FullScreenContentSection></FullScreenContentSection>
    <FullScreenContentSection></FullScreenContentSection>
  </PageContainer>
</template>

<script>
export default {
  props: ['error'],
  head: {
    title: 'Marmo | Page not found'
  }
}
</script>
