<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator/>

      <AppContent>
        <ErrorContent/>
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
