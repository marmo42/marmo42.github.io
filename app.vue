<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator/>

      <AppContent>
        <AppHeader/>
        <NuxtPage/>
        <AppFooter/>
      </AppContent>
      
    </NuxtLayout>
  </div>
</template>

<script setup>
import Rellax from 'rellax';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | StylexTV` : 'StylexTV';
  }
});

onMounted(() => {
  new Rellax('.rellax');
})
</script>
