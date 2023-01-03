<template>
  <DesignListItem>
    <DesignListLogoItemCover :logo="logo" :isPrimary="isPrimary" :darkBackground="darkCover"/>

    <DesignListItemToolbar>
      <DesignListItemTitle>{{ title }}</DesignListItemTitle>

      <DesignListItemToolbarLinks>
        <DesignListItemToolbarLink to="/">png</DesignListItemToolbarLink>
      </DesignListItemToolbarLinks>
    </DesignListItemToolbar>
  </DesignListItem>
</template>

<script>
export default {
  props: {
    logo: String,
    title: String,
    isPrimary: Boolean,
    darkCover: Boolean
  }
}
</script>
