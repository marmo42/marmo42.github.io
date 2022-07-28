<template>
  <div v-if="loading" class="absolute z-10 w-full h-full bg-gray-dark flex items-center justify-center">
    <LoaderIcon/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>
