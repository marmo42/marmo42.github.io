<template>
  <DesignListItemCover class="flex items-center justify-center bg-gray-900 ring-1 ring-gray-700">
    <DesignListLogoItemCoverLogo :path="path"/>
    <DesignListLogoItemCoverLabel>{{ isPrimary ? 'Primary' : 'Secondary' }}</DesignListLogoItemCoverLabel>
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
