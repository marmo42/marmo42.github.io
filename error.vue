<template>
  <div>
    <NuxtLayout>
      <AppHeader/>

      <AppContent>
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
