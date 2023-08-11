import { defineStore } from 'pinia'

export const useSystemStore = defineStore('systemStore', () => {
  const darkMode = ref(false)
  return {
    darkMode,
  }
})
