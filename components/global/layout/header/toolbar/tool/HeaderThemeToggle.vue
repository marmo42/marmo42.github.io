<template>
  <div class="px-[20px] cursor-pointer" @click="toggleTheme">
    <Icon v-if="dark" class="default-icon-color" size="20px" name="weather/moon"/>
    <Icon v-else class="default-icon-color" size="20px" name="weather/sun"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  created() {
    
  },
  methods: {
    toggleTheme() {
      const classes = document.documentElement.classList;

      if(this.dark) classes.remove('dark');
      else classes.add('dark');

      this.dark = !this.dark;
    }
  }
}
</script>
