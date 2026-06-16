<script setup>
/**
 * Reusable toggle switch (Vue 3.4+, <script setup>, defineModel)
 *
 * Usage:
 *   <ToggleSwitch v-model="isAiEnabled" />
 *   <ToggleSwitch v-model="isAiEnabled" left-label="AI-enabled" right-label="Non-AI" />
 */
defineProps({
  leftLabel: { type: String, default: 'AI-enabled' },
  rightLabel: { type: String, default: 'Non-AI' },
})

// defineModel replaces the old modelValue prop + emit('update:modelValue') boilerplate
const checked = defineModel({ type: Boolean, default: true })

function toggle() {
  checked.value = !checked.value
}
</script>

<template>
  <div class="ai-toggle">
    <span
      class="label label-left"
      :class="{ active: checked }"
      @click="checked = true"
    >
      {{ leftLabel }}
    </span>

    <button
      type="button"
      class="track"
      role="switch"
      :aria-checked="checked"
      @click="toggle"
    >
      <span class="thumb" :class="{ 'thumb-off': !checked }" />
    </button>

    <span
      class="label label-right"
      :class="{ active: !checked }"
      @click="checked = false"
    >
      {{ rightLabel }}
    </span>
  </div>
</template>

<style scoped>

</style>
