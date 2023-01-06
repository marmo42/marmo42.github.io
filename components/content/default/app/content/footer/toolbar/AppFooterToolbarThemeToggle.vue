<template>
  <AppFooterToolbarItem @click="onClick">
    Dark mode

    <Icon v-if="toggled" name="toggle/on" class="w-6 h-6"/>
    <Icon v-if="!toggled" name="toggle/off" class="w-6 h-6"/>
  </AppFooterToolbarItem>
</template>

<script setup>
defineProps({
  toggled: false
});

const { toggleTheme } = useTheme();

const onClick = () => toggleTheme();
</script>
