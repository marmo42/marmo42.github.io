<template>
  <div v-anime="animation">
    <slot></slot>
  </div>
</template>

<script>
  import animations from '@/static/constants/animations';

  export default {
    props: {
      name: String
    },
    created() {
      this.animation = animations[this.name];
    }
  }
</script>
