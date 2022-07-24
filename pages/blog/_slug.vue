<template>
  <PageContainer>
    <EmptyHeaderSection/>
    <ArticleListSection class="mt-56" :articles="[article]"/>
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
    const article = await $content('articles/posts', params.slug).fetch()

    return {
      article
    }
  }
}
</script>
