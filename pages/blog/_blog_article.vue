<template>
  <PageContainer>
    <nuxt-content :document="article"/>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Blog | TITLE'
  }
}
</script>
