<template>
  <div>
    <BlogPostListHeading>Highlighted Posts</BlogPostListHeading>
    <BlogPostList>
      <ContentQuery v-for="path in highlightedPosts" :path="'/blog/' + path" v-slot="{ data }">
        <BlogPostListItem :post="data[0]"/>
      </ContentQuery>
    </BlogPostList>

    <BlogPostListHeading>All Posts</BlogPostListHeading>
    <BlogPostList>
      <ContentList path="/blog" v-slot="{ list }">
        <BlogPostListItem v-for="post in list" :key="post._path" :post="post"/>
      </ContentList>
    </BlogPostList>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  },
  data() {
    return {
      highlightedPosts: ['relaxing-fireplace', 'relaxing-fireplace', 'relaxing-fireplace']
    }
  }
}
</script>
