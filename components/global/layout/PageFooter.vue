<template>
  <div class="max-w-[790px] my-60 text-center flex flex-col items-center">
    <FooterTitle>{{ title }}</FooterTitle>
    <FooterSubtitle>{{ subtitle }}</FooterSubtitle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'I occasionally take on freelance opportunities.',
      subtitle: 'Have an exciting project where you need some help?\nSend me over a message, and let\'s chat.'
    }
  },
}
</script>
