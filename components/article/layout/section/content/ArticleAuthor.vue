<template>
  <div class="w-1/4 px-[10px] flex flex-col">
    <ArticleAuthorIcon :author="author"/>
    <ArticleAuthorName :author="author"/>
    <ArticleAuthorTimestamp :timestamp="timestamp"/>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    timestamp: String
  }
}
</script>
