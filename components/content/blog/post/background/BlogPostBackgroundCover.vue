<template>
  <Image :page="post._path" path="cover.jpg" class="w-full h-full -z-10 object-cover" :style="{ transform: 'translate(0, ' + translateBy + 'px)' }"/>
</template>

<script>
export default {
  props: {
    post: Object
  },
  data() {
    return {
      translateBy: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const speed = 210;

      this.translateBy = (window.scrollY / window.innerHeight) * speed;
      this.translateBy = Math.round(this.translateBy);
    }
  }
}
</script>
