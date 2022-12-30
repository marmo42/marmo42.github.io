<template>
  <DesignListItem>
    <DesignListLogoItemCover :isPrimary="isPrimary" :path="path"/>

    <DesignListItemTitle>{{ name }}</DesignListItemTitle>
  </DesignListItem>
</template>

<script>
export default {
  props: {
    name: String,
    isPrimary: Boolean,
    path: String
  }
}
</script>
