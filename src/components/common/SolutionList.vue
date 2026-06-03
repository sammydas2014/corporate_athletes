<script setup>
defineProps({
  heading: {
    type: String,
    default: "Situation"
  },
  description: {
    type: String,
    default: ""
  },
  listItems:{
    type: Array,
    default: ()=>[]
  }
})
</script>

<template>
  <div class="solution-list-wrap">
    <h4>{{ heading }}</h4>
    <template v-if="description">
        <p>{{ description }}</p>
    </template>
    <template v-if="listItems.length > 0">
      <ul>
        <li v-for="(item, index) in listItems" :key="index">
          {{ item }}
        </li>
      </ul>
    </template>
  </div>
</template>

<!-- styles moved to src/assets/styles/components/SolutionList.css -->