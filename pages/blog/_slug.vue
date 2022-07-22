<template>
  <PageContainer>
    <TitledHeaderSection :title="article.title" :subtitle="article.description"/>
    <nuxt-content :document="article"/>
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
