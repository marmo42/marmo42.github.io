<template>
  <NuxtLink :to="linkTo" class="rounded-lg flex flex-col-reverse items-center gap-16 md:grid grid-cols-12 md:gap-8 transition bg-gray-750/25 hover:bg-gray-750 ring-1 ring-gray-750 shadow-lg">
    <StartProjectsListItemText>
      <StartProjectsListItemTitle>{{ title }}</StartProjectsListItemTitle>
      <StartProjectsListItemDescription>{{ description }}</StartProjectsListItemDescription>
    </StartProjectsListItemText>

    <StartProjectsListItemLogo :project="project"/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    project: String,
    title: String,
    description: String,
    linkTo: String
  }
}
</script>
