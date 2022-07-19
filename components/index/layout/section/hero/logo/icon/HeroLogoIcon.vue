<template>
  <Icon size="275px" name="brands/maple" v-anime="translate"/>
</template>

<script>
  export default {
    data() {
      return {
        translate: {
          keyframes: [
            {translateY: -20},
            {translateY: 0}
          ],
          easing: 'easeInOutQuad',
          duration: 4000,
          loop: true
        }
      }
    }
  }
</script>
