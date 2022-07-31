<template>
  <div class="mx-8 flex flex-col">
    <BioTitle>{{ title }}</BioTitle>
    <BioDescription v-for="line in description" :key="line">{{ line }}</BioDescription>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>
