<template>
  <PageContainer>
    <ArticlesSection v-for="article of articles" :key="article.slug">
      <ArticleItem :article="article"/>
    </ArticlesSection>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Blog'
  },
  async asyncData({ params, $content }) {
    const articles = await $content('articles').sortBy('date').fetch()

    return {
      articles
    }
  }
}
</script>
