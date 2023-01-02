<template>
  <iframe :src="path" class="embed"></iframe>
</template>

<script>
export default {
  props: {
    path: String
  }
}
</script>
