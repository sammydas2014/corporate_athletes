<script setup>
import BaseCardChip from './BaseCardChip.vue';
defineProps({
  category:{
    type: String,
    default:""
  },
  title:{
    type: String,
    default:""
  },
  description:{
    type: String,
    default:""
  },
  chosenBecause:{
    type: Array,
    default: () => []
  },
  alternatives:{
    type: Array,
    default: () => []
  },
  tags:{
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="cardWrp">
    <span class="catagory">{{ category }}</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>

    <div class="list-wrp">
      <h4>Chosen because</h4>
      <ul>
        <template v-for="(item , index) in chosenBecause" :key="index">
          <li>{{ item }}</li>
        </template>
      </ul>
    </div>
    <div class="list-wrp list-wrp-alter ">
      <h4>Alternatives</h4>
      <ul>
        <template v-for="item in alternatives" :key="item?.id">
          <li>{{ item?.name }}: <span>{{ item?.reason }}</span></li>
        </template>
      </ul>
    </div>
    <div class="tags-wrp">
      <template v-for="(item , index) in tags" :key="index">
        <BaseCardChip :title="item" variant="secondary" />
      </template>
    </div>
  </div>
</template>
