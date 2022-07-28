<template>
  <ContentSection class="px-5 flex">
    <ArticleAuthor :author="article.author" :timestamp="article.createdAt"/>
    <ArticleContent :article="article"/>
  </ContentSection>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>
