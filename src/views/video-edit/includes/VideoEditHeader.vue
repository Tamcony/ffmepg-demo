<template>
  <div class="flex flex-row justify-end w-full items-center h-40 bg-cyan dark:bg-dark dark:color-light">
    <a-switch
      v-model:checked="darkMode"
      class="bg-light"
    >
      <template #checkedChildren>
        <div>
          🌙
        </div>
      </template>
      <template #unCheckedChildren>
        <div>
          ☀️
        </div>
      </template>
    </a-switch>
  </div>
</template>

<script lang='ts' setup>
import { useSystemStore } from '@/stores/systemStore'

const darkMode = ref(false)

watch(darkMode, (value) => {
  useSystemStore().darkMode = value
})
</script>

<style lang='less' scoped></style>