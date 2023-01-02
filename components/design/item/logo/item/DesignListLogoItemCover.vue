<template>
  <DesignListItemCover class="flex items-center justify-center ring-1 ring-gray-750" :class="isPrimary ? 'bg-gray-900' : 'bg-white'">
    <DesignListLogoItemCoverLogo :path="path"/>
    <DesignListLogoItemCoverLabel :isPrimary="isPrimary"/>
  </DesignListItemCover>
</template>

<script>
export default {
  props: {
    isPrimary: Boolean,
    path: String
  }
}
</script>
