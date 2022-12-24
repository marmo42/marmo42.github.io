<template>
  <div class="flex flex-row flex-wrap items-center">
    <ContentList path="/blog" v-slot="{ list }">
      <BlogPostListItem v-for="post in list" :key="post._path" :post="post"/>
    </ContentList>
  </div>
</template>
