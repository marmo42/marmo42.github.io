<template>
  <PageContainer>
    <HeroSection/>
    <ArticleListSection class="mt-32" :articles="articles" noProminence/>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Work'
  },
  async asyncData({ $content }) {
    const articles = await $content('articles/work').sortBy('date').fetch()

    return {
      articles
    }
  }
}
</script>
