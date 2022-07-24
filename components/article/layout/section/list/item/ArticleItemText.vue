<template>
  <div class="mt flex flex-col">
    <ArticleItemTitle>{{ article.title }}</ArticleItemTitle>
    <ArticleItemSubtitle>{{ article.description }}</ArticleItemSubtitle>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>
