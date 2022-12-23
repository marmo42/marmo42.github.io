<template>
  <img :src="path"/>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  name: { type: String }
});

const path = ref();

watchEffect(async () => {
  path.value = (await import(/* @vite-ignore */ `../../../assets/images/icons/${props.name}.svg`)).default;
})
</script>
