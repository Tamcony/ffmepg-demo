<template>
  <div class="flex flex-col w-full h-full">
    <VideoEditHeader></VideoEditHeader>
    <VideoEditToolBar></VideoEditToolBar>
    <div class="flex flex-row w-full h-2/3">
      <div class="w-1/3 ">
        <ResourcePanel></ResourcePanel>
      </div>
      <div class="w-1/3 bg-amber">视频播放区域</div>
      <div class="w-1/3 bg-blue">视频设置区域</div>
    </div>
    <div class="w-full h-1/3 bg-indigo">
      <div>序列</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import VideoEditHeader from './includes/VideoEditHeader.vue'
import VideoEditToolBar from './includes/VideoEditToolBar.vue'
import ResourcePanel from './includes/resource-panel/index.vue'

</script>

<style lang='less' scoped></style>