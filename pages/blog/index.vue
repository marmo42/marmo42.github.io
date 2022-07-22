<template>
  <PageContainer>
    <HeaderSection class="absolute -z-10 h-[500px]"/>
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
