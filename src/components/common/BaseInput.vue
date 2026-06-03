<script setup>

defineOptions({
  inheritAttrs: false
})

defineProps({
  type:{
    type: String,
    default: 'text',
  },
  id:{
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'name@example.com',
  },
  modelValue:{
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits(['update:modelValue'])

</script>
<template>
  <div :class="['form-floating' , `form-floating-${variant}`]">
    <span v-if="$slots['icon-left']" class="slot-icon-left">
      <slot name="icon-left"></slot>
    </span>
    <slot>
      <input
      :type="type"
      class='baseInpFld'
      :value="modelValue"
      :id="id"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    </slot>
    <span v-if="$slots['icon-right']" class="slot-icon-right">
      <slot name="icon-right"></slot>
    </span>
  </div>
</template>
<!-- styles moved to src/assets/styles/components/BaseInput.css -->
