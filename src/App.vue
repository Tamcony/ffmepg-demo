<template>
  <div
    class="w-screen h-screen"
    :class="useSystemStore().darkMode ? 'dark' : ''"
  >
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from './stores/systemStore'

</script>

<style scoped></style>
