<template>
  <DesignListItem>
    <DesignListColorItemCover :color="color"/>

    <DesignListItemToolbar>
      <DesignListItemTitle>{{ name }}</DesignListItemTitle>

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
    name: String,
    color: String
  }
}
</script>
