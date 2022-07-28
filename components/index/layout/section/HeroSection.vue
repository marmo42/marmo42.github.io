<template>
  <HeaderSection noBackground>
    <HeroLogo/>
    <HeroTitle>{{ title }}</HeroTitle>
    <HeaderSubtitle>{{ subtitle }}</HeaderSubtitle>
  </HeaderSection>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello there!',
      subtitle: 'I’m also a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life.'
    }
  },
}
</script>
