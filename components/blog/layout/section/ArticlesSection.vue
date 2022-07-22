<template>
  <ContentSection class="pt-56 flex flex-wrap">
    <ArticleItem v-for="(article, index) of articles" :key="article.slug" :article="article" :prominent="index == 0"/>
  </ContentSection>
</template>

<script>
export default {
  props: {
    articles: Array
  }
}
</script>
