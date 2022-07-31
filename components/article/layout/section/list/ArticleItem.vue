<template>
  <PageLink class="bg-gray box-shadow rounded-lg overflow-hidden flex flex-col dark" :style="style" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
    <ArticleItemCover :article="article"/>
    <ArticleItemText :article="article"/>
  </PageLink>
</template>

<script>
export default {
  props: {
    article: Object,
    prominent: Boolean
  },
  computed: {
    style() {
      var width = this.prominent ? '100%' : '50%';
      var marginBottom = this.prominent ? '128px' : '72px';

      return {
        'width': width,
        'margin-bottom': marginBottom
      }
    }
  }
}
</script>
