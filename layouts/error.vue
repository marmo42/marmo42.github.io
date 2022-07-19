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
    title: 'Maple | Page not found'
  }
}
</script>
