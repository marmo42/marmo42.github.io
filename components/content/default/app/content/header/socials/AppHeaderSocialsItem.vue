<template>
  <NuxtLink :to="linkTo">
    <Icon :name="iconName" class="w-[18px] h-[18px]"/>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    iconName: String,
    linkTo: String
  }
}
</script>
