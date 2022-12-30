<template>
  <DesignHero/>

  <DesignItem title="Logotype" subtitle="Nuxt Logo">
    <DesignItemText>The logo is made from two elements: the triangular mountains and the wordmark. In most cases, they should appear together as the opposite master lockup shows. The triangular mountains can be used on their own as an icon, profile picture or badge, but the wordmark should never be used without this symbol on the side.</DesignItemText>

    <DesignList>
      <DesignListLogoItem name="Logo red" isPrimary path="red"/>
      <DesignListLogoItem name="Logo dark" path="red"/>
    </DesignList>
  </DesignItem>
  
  <DesignItem title="Colors" subtitle="Color Palette">
    <DesignItemText>Our color palette is based on our iconic NuxtJS green and colours have been carefully considered to work in harmony and consistency across various media. When creating Nuxt communications, use the colour values shown to make sure your designs stay on-brand.</DesignItemText>

    <DesignList>
      <DesignListColorItem name="Red" color="#FE004E"/>
      <DesignListColorItem name="White" color="#FFFFFF"/>
      <DesignListColorItem name="Gray" color="#18181B"/>
    </DesignList>
  </DesignItem>

  <DesignItem title="Typography" subtitle="Roobert font">
    <DesignItemText>Our brand typeface is Roobert PRO by the Display Foundry. This typeface was chosen for it’s aesthetic reminding the shape of Nuxt logo by many aspects (joints, apex, vertex of the structure). It provides modernity and sobriety while giving an iconic aspect of our visual content and without decreasing the accessibility of texts.</DesignItemText>
    
    <h1>Roobert PRO</h1>
    <br>
    <br>
    <h2>The quick brown fox jumps over the lazy dog.</h2>
  </DesignItem>
</template>

<script setup>
useHead({
  title: 'Design Kit'
});
</script>
