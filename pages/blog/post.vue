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
</script>
