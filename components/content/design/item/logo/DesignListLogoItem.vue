<template>
  <DesignListItem>
    <DesignListLogoItemCover :isPrimary="isPrimary" :path="path"/>

    <DesignListItemToolbar>
      <DesignListItemTitle>{{ name }}</DesignListItemTitle>

      <DesignListItemToolbarLinks>
        <DesignListItemToolbarLink to="/">png</DesignListItemToolbarLink>
      </DesignListItemToolbarLinks>
    </DesignListItemToolbar>
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
