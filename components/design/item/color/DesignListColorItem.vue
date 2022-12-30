<template>
  <DesignListItem>
    <DesignListColorItemCover :color="color"/>

    <DesignListItemTitle>{{ name }}</DesignListItemTitle>
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
