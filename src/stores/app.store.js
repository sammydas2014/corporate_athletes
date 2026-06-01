import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)
  const toasts = ref([])

  function setLoading(val) {
    isLoading.value = val
  }

  function addToast(message, type = 'info') {
    const id = Date.now()
    toasts.value.push({ id, message, type })
    setTimeout(() => removeToast(id), 4000)
  }

  function removeToast(id) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return { isLoading, toasts, setLoading, addToast, removeToast }
})
