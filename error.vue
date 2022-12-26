<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator/>
      <AppHeader/>

      <AppContent>
        <div class="flex flex-col items-center">
          <ErrorHeading>404</ErrorHeading>
          <ErrorMessage>Page not found!</ErrorMessage>
        </div>

        {{ error }}
        <button @click="handleError">Clear errors</button>
      </AppContent>

      <AppFooter/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
