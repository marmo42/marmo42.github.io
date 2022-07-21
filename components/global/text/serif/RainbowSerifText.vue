<template>
  <SerifText class="rainbow-background text-transparent">
    <slot></slot>
  </SerifText>
</template>

<style>
.rainbow-background {
  background: linear-gradient(271deg,#a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%);
  background-clip: text;
}
</style>
