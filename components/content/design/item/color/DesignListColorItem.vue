<template>
  <DesignListItem>
    <DesignListColorItemCover :color="color"/>

    <DesignListItemToolbar>
      <DesignListItemTitle>{{ title }}</DesignListItemTitle>

      <DesignListItemToolbarLinks>
        <DesignListItemToolbarLink to="/">Copy</DesignListItemToolbarLink>
      </DesignListItemToolbarLinks>
    </DesignListItemToolbar>

    <DesignListItemSubtitle>{{ color }}</DesignListItemSubtitle>
  </DesignListItem>
</template>

<script>
export default {
  props: {
    color: String,
    title: String
  }
}
</script>
