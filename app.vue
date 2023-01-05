<template>
  <div>
    <NuxtLayout>
      <AppLoadingIndicator/>
      
      <AppContent>
        <AppHeader/>
        <NuxtPage/>
        <AppFooter/>
      </AppContent>
      
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | StylexTV` : 'StylexTV';
  }
});
</script>
