<template>
  <ContentSection class="pt-[235px] flex flex-wrap">
    <ArticleItem v-for="article of articles" :key="article.slug" :article="article"/>
  </ContentSection>
</template>

<script>
export default {
  props: {
    articles: Array
  }
}
</script>
