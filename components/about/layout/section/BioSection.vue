<template>
  <HeaderSection maxWidth="1200px" noBackground>
    <div class="flex flex-row">
      <BioPicture/>
      <BioText :title="title" :description="description"/>
    </div>
  </HeaderSection>
</template>

<script>
export default {
  data() {
    return {
      title: 'I’m Seán, a Product Designer working remotely for Help Scout on their mobile products in sunny Dublin, Ireland.',
      description: [
        'I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.',
        'These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.',
        'Out of the office you’ll find me dreaming of soccer, playing bass guitar, and petting all the good dogs.'
      ]
    }
  },
}
</script>
