<script setup>
import { ref, watch, nextTick } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  rows: {
    type: Number,
    default: 4,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
  maxLength: {
    type: Number,
    default: null,
  },
  autoResize: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textareaRef = ref(null);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);

  if (props.autoResize) {
    resizeTextarea();
  }
};

const resizeTextarea = () => {
  if (!textareaRef.value) return;

  textareaRef.value.style.height = "auto";
  textareaRef.value.style.height =
    textareaRef.value.scrollHeight + "px";
};

watch(
  () => props.modelValue,
  async () => {
    if (props.autoResize) {
      await nextTick();
      resizeTextarea();
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="base-textarea">
    <label
      v-if="label"
      class="base-textarea__label"
    >
      {{ label }}
      <span
        v-if="required"
        class="required"
      >
        *
      </span>
    </label>

    <textarea
      ref="textareaRef"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :maxlength="maxLength"
      class="base-textarea__field"
      :class="{ error: error }"
      @input="updateValue"
    />

    <div
      v-if="maxLength"
      class="base-textarea__counter"
    >
      {{ modelValue.length }}/{{ maxLength }}
    </div>

    <p
      v-if="error"
      class="base-textarea__error"
    >
      {{ error }}
    </p>
  </div>
</template>

<style scoped>

</style>
