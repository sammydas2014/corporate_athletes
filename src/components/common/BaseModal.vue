<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="modelValue" class="ca-modal-backdrop" @click.self="$emit('update:modelValue', false)">
        <div class="ca-modal-dialog">
          <div class="ca-modal-content">
            <div class="ca-modal-header">
              <slot name="header" />
              <button type="button" class="ca-modal-close" @click="$emit('update:modelValue', false)" aria-label="Close">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <div class="ca-modal-body">
              <slot />
            </div>
            <div v-if="$slots.footer" class="ca-modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
defineProps({ modelValue: { type: Boolean, default: false } })
defineEmits(['update:modelValue'])
</script>
