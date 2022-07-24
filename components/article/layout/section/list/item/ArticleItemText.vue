<template>
  <div class="m-[25px] flex flex-col">
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
