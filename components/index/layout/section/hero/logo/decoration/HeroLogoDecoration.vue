<template>
  <div class="absolute w-[135px] h-[135px] rounded-[20px]" :style="style"></div>
</template>

<script>
export default {
  props: ['gradientType'],
  computed: {
    style() {
      const gradients = [
        'linear-gradient(180deg,#edca85,#f093b0)',
        'linear-gradient(180deg,#b097f2,#a0e9ff)',
        'linear-gradient(180deg,#db85b4,#b097f2)'
      ];

      return {
        'background': gradients[this.gradientType]
      }
    }
  }
}
</script>
