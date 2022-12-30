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
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
