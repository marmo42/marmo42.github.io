<template>
  <div>
    <NuxtLayout>
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

var rellax = new Rellax('.rellax');
</script>
