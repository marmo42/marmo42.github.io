<template>
  <HeaderSection :title="title" :subtitle="subtitle" noBackground>
    <HeroLogo/>
    <HeroTitle>{{ title }}</HeroTitle>
    <HeaderSubtitle>{{ subtitle }}</HeaderSubtitle>
  </HeaderSection>
</template>

<script>
export default {
  data() {
    return {
      title: "Hi. I’m Seán.",
      subtitle: "I’m also a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life."
    }
  },
}
</script>
