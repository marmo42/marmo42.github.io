<template>
  <div class="opacity-0" v-anime="animation">
    <slot></slot>
  </div>
</template>

<script>
  import { bounceIn } from '@/static/constants/animations';

  export default {
    created() {
      this.animation = bounceIn;
    }
  }
</script>
