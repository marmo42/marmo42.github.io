<template>
  <PageContainer>
    <EmptyHeaderSection/>
    <ArticleListSection class="mt-56" :articles="articles"/>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Blog'
  },
  async asyncData({ $content }) {
    const articles = await $content('articles/posts').sortBy('date').fetch()

    return {
      articles
    }
  }
}
</script>
