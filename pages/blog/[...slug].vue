<template>
  <div>
    <BlogPost/>
  </div>
</template>

<script setup>
  const { path } = useRoute();

  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
  });

  if(!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Blog post not found!' });
  }
</script>
