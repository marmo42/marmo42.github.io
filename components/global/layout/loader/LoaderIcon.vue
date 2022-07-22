<template>
  <Icon size="88px" name="brands/marmo" v-anime="translate"/>
</template>

<script>
  export default {
    data() {
      return {
        translate: {
          keyframes: [
            {translateY: '-10%'},
            {translateY: 0}
          ],
          easing: 'easeInOutQuad',
          duration: 1000,
          loop: true
        }
      }
    }
  }
</script>
