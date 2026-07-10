import { defineStore } from 'pinia'
import { ref } from 'vue'
import { imageMap } from '@/assets/images/imageMap'

const DUMMY_USERS = [
  { id: 1, email: 'john@example.com', password: 'password123', name: 'John Doe', avatar: imageMap.profileImage },
  { id: 2, email: 'jane@example.com', password: 'password123', name: 'Jane Smith', avatar: imageMap.profileImage },
]

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = ref(false)

  function login(email, password) {
    const found = DUMMY_USERS.find(u => u.email === email && u.password === password)
    if (!found) return 'Invalid email or password.'
    const { password: _, ...safeUser } = found
    user.value = safeUser
    isLoggedIn.value = true
    return null
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
  }

  return { user, isLoggedIn, login, logout }
})
