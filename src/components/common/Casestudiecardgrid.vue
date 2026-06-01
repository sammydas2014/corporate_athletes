<template>
  <div class="casestudie-grid" :class="`casestudie-grid--cols-${columns}`">
    <Casestudiecard v-for="item in items" :key="item.id" v-bind="item" @click="$emit('card-click', $event)" />
  </div>
</template>

<script setup>
import Casestudiecard from '@/components/common/Casestudiecard.vue';


defineProps({
  items: {
    type: Array,
    required: true,
  },
  columns: {
    type: Number,
    default: 2,
    validator: (v) => [1, 2, 3].includes(v),
  },
})

defineEmits(['card-click'])
</script>

<style scoped>
.casestudie-grid {
  display: grid;
  gap: 30px;
}

.casestudie-grid--cols-1 {
  grid-template-columns: 1fr;
  max-width: 390px;
  margin: 0 auto;
}

.casestudie-grid--cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.casestudie-grid--cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 767px) {

  .casestudie-grid--cols-2,
  .casestudie-grid--cols-3 {
    grid-template-columns: 1fr;
    max-width: 380px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .casestudie-grid--cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>