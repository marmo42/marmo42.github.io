<template>
  <PageContainer>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article"/>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Blog | TITLE'
  },
  async asyncData({ $content }) {
    const article = await $content('articles/my-first-blog-post').fetch()

    return {
      article
    }
  }
}
</script>
