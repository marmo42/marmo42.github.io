<template>
  <PageContainer>
    <HeroSection/>
    <FullScreenSection></FullScreenSection>
  </PageContainer>
</template>

<script>
export default {
  head: {
    title: 'Marmo | Work'
  },
  async asyncData({ $content }) {
    const articles = await $content('work').sortBy('date').fetch()

    return {
      articles
    }
  }
}
</script>

<script>
export default {
  head: {
    title: 'Marmo | Blog'
  },
  async asyncData({ $content }) {
    const articles = await $content('articles/work').sortBy('date').fetch()

    return {
      articles
    }
  }
}
</script>
