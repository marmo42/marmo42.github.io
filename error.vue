<template>
  <div>
    <NuxtLayout>
      <AppLoadingIndicator/>

      <AppContent>
        <ErrorHero/>
      </AppContent>
      
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Page not found | StylexTV'
});

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
