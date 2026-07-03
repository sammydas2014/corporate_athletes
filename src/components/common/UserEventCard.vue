<script setup>
import BaseButton from "./BaseButton.vue";

defineProps({
  icon:{
    type: String,
    default: ''
  },
  value:{
    type: String,
    default: ''
  },
  description:{
    type: String,
    default: ''
  },
  buttonText:{
    type: String,
    default: ''
  }
})

</script>
<template>
  <div class="eventCrd">
    <div class="icon-evnt">
      <img :src="icon" alt="">
    </div>
    <span class="val">
      {{ value }}
    </span>
    <p>{{ description }}</p>
    <BaseButton>
      {{ buttonText }}
    </BaseButton>
  </div>
</template>
