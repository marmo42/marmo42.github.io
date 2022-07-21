<template>
  <PageLink class="w-1/2 h-full px-[16px] flex flex-col" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
    <ArticleItemCover :article="article"/>
    <ArticleItemText :article="article"/>
  </PageLink>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>
