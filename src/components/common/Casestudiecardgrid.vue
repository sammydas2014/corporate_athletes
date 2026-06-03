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

<!-- styles moved to src/assets/styles/components/Casestudiecardgrid.css -->