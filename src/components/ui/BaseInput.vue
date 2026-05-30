<script setup>
import { defineProps , defineOptions , defineEmits} from 'vue';

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
<style scoped>
.form-floating{
  position: relative;
  background-color: #1D2328;
  padding: 0 21px;
  border-radius: 55px;
  height: 56px;
}
.baseInpFld{
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  color: var(--bs-white);
  font-weight: 400;
  height: 100%;
}
.baseInpFld::placeholder{
  color: var(--bs-white);
}
.slot-icon-left{
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.slot-icon-right{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
