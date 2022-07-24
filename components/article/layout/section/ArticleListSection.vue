<template>
  <ContentSection class="pt-56">
    <List>
      <ArticleItem v-for="(article, index) of articles" :key="article.slug" :article="article" :prominent="index == 0 && !noProminence"/>
    </List>
  </ContentSection>
</template>

<script>
export default {
  props: {
    articles: Array,
    noProminence: Boolean
  }
}
</script>
