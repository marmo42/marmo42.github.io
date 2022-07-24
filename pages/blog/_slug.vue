<template>
  <PageContainer>
    <EmptyHeaderSection/>
    <ArticleListSection :articles="[article]"/>
    <ArticleSection :article="article"/>
  </PageContainer>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title
    }
  },
  async asyncData({ params, $content }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article
    }
  }
}
</script>
