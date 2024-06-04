<template>
    <header class="header">
        <h1 class="header-title">{{ title }}</h1>
    </header>
</template>

<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .header {
    @apply flex justify-center items-center h-40 w-full bg-midnight-fur;
  }

  .header-title {
    @apply text-white text-4xl md:text-6xl font-jost text-center uppercase;
  }
</style>