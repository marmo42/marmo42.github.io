<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator/>
      <AppHeader/>

      <AppContent>
        <NuxtPage/>
      </AppContent>

      <AppFooter/>
    </NuxtLayout>
  </div>
</template>

<script>
import Rellax from "rellax";

export default {
  mounted() {
    new Rellax('.rellax');
  }
}
</script>
