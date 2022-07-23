<template>
  <PageContainer>
    <EmptyHeaderSection/>
    <ArticlesSection :articles="articles"/>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Blog'
  },
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('date').fetch()

    return {
      articles
    }
  }
}
</script>
