<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | Marmo` : 'Marmo';
    }
  })
</script>
