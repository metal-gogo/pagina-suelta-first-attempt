<template>
  <nuxt-link to="/" class="back-to-index-link">⬅ Back to home</nuxt-link>
</template>

<style lang="scss" scoped>
.back-to-index-link {
  border-bottom: 2px solid $accent-35;
  transition: border-bottom 0.3s ease-in-out;

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom: 2px solid $accent-100;
  }
}
</style>
