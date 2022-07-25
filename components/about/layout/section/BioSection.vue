<template>
  <HeaderSection maxWidth="1200px" noBackground>
    <div class="flex flex-row">
      <BioPicture/>
      <BioText>
        <BioTitle>I’m Seán, a Product Designer working remotely for Help Scout on their mobile products in sunny Dublin, Ireland.</BioTitle>
        <BioDescription>I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.</BioDescription>
      </BioText>
    </div>
  </HeaderSection>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello there!",
      subtitle: "I’m also a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life."
    }
  },
}
</script>
