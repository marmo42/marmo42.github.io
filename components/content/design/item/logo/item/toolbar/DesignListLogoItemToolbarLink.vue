<template>
  <DesignListItemToolbarLink :to="logoPath" external download>png</DesignListItemToolbarLink>
</template>

<script>
export default {
  props: {
    logo: String
  },
  computed: {
    logoPath() {
      return '/content/design/assets/images/logos/' + this.logo + '.png';
    }
  }
}
</script>
