<template>
  <NuxtLink :to="linkTo" class="rounded-lg grid grid-cols-12 gap-8 transition bg-gray-750/25 hover:bg-gray-750 ring-1 ring-gray-750 shadow-lg">
    <StartProjectsListItemText>
      <StartProjectsListItemTitle>Shortcuts</StartProjectsListItemTitle>
      <StartProjectsListItemDescription>Optimized for efficiency with keyboard shortcuts for everything.</StartProjectsListItemDescription>
    </StartProjectsListItemText>

    <StartProjectsListItemLogo/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkTo: String
  }
}
</script>
