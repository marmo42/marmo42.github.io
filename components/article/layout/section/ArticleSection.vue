<template>
  <ContentSection class="pt-[135px] flex">
    <ArticleAuthor :author="article.author" :timestamp="article.createdAt"/>
    <nuxt-content class="min-w-full" :document="article"/>
  </ContentSection>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>
