<template>
  <ContentSection class="pt-56">
    <List>
      <ArticleItem v-for="(article, index) of articles" :key="article.slug" :article="article" :prominent="index == 0"/>
    </List>
  </ContentSection>
</template>

<script>
export default {
  props: {
    articles: Array
  }
}
</script>
