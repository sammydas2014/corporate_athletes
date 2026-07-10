<template>
  <BaseModal :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <template #header>
      <div class="login-modal__header">
        <h4 class="login-modal__title">Sign in to your account</h4>
      </div>
    </template>

    <form @submit.prevent="handleSubmit" novalidate class="login-modal__form">
      <p class="login-modal__hint">
        <i class="bi bi-info-circle"></i>
        Use <strong>john@example.com</strong> or <strong>jane@example.com</strong> with password <strong>password123</strong>
      </p>

      <div class="login-modal__field">
        <label for="login-email">Work email <span class="required">*</span></label>
        <BaseInput
          id="login-email"
          type="email"
          variant="cstd"
          v-model="email"
          placeholder="you@example.com"
          autocomplete="email"
          required
          :class="{ 'is-invalid-wrap': error }"
        />
      </div>

      <div class="login-modal__field">
        <label for="login-password">Password <span class="required">*</span></label>
        <BaseInput id="login-password" variant="cstd" v-model="password" :class="{ 'is-invalid-wrap': error }">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="baseInpFld"
            id="login-password"
            v-model="password"
            placeholder="••••••••"
            autocomplete="current-password"
            required
          />
          <template #icon-right>
            <button type="button" class="login-modal__eye" @click="showPassword = !showPassword" tabindex="-1">
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </button>
          </template>
        </BaseInput>
      </div>

      <p v-if="error" class="login-modal__error">
        <i class="bi bi-exclamation-circle"></i> {{ error }}
      </p>

      <BaseButton type="submit" variant="primary" class="login-modal__submit">
        Sign In
      </BaseButton>
    </form>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from '@/components/common/BaseModal.vue'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useAuthStore } from '@/stores/auth.store'

defineProps({ modelValue: { type: Boolean, default: false } })
const emit = defineEmits(['update:modelValue'])

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')
const showPassword = ref(false)

function handleSubmit() {
  error.value = auth.login(email.value, password.value)
  if (!error.value) {
    email.value = ''
    password.value = ''
    showPassword.value = false
    emit('update:modelValue', false)
  }
}
</script>