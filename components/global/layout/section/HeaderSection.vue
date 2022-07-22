<template>
  <PageSection class="w-full pt-56 pb-40 fade-background flex items-center justify-center">
    <slot></slot>
  </PageSection>
</template>

<style>
.fade-background {
  background: linear-gradient(180deg,#111 20%,rgba(20,44,105,0) 60%),#1a1a1a;
}
</style>
