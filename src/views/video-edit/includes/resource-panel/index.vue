<template>
  <div class="flex flex-row w-full h-full">
    <div class="flex flex-col w-1/5 h-full bg-emerald">
      <ResourcePanelSider></ResourcePanelSider>
    </div>
    <div class="flex flex-row w-4/5 h-full">
      <ResourcePanelMaterial></ResourcePanelMaterial>
    </div>
  </div>
</template>

<script lang='ts' setup>
import ResourcePanelMaterial from './ResourcePanelMaterial.vue'
import ResourcePanelSider from './ResourcePanelSider.vue'

</script>

<style lang='less' scoped></style>