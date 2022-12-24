<template>
  <ContentList path="/blog" v-slot="{ list }" class="flex flex-wrap justify-center">
    <BlogPostListItem v-for="post in list" :key="post._path" :post="post"/>
  </ContentList>
</template>
