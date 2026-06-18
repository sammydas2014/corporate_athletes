
<script setup>
defineProps({
  logo:{
    type: String,
    default: ""
  },
  title:{
    type: String,
    default: ""
  },
  description: {
    type: String,
    default:""
  },
  listItem:{
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="lensCrd">
    <span class="logo-wrp">
      <img :src="logo" alt="">
    </span>
    <h3>{{ title }}</h3>
    <p v-if="description">
      {{ description }}
    </p>
    <ul v-if="listItem.length > 0">
      <li v-for="(item, index) in listItem" :key="index">
        {{ item }}
      </li>
    </ul>

  </div>
</template>
