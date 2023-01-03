<template>
  <NuxtLink @contextmenu="onRightClick" to="/">
    <Icon class="w-7 h-7" name="stylextv"/>
  </NuxtLink>
</template>

<script>
export default {
  methods: {
    onRightClick(event) {
      event.preventDefault();

      navigateTo('/design');
    }
  }
}
</script>
