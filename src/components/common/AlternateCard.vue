<script setup>
defineProps({
  title: String,
  chip: String,
  bullets: Array,
  option: String,
  tradoffData:{
    type: Object
  }
})
</script>
<template>
  <div class="cardWrp">
    <p class="optnsTxt">{{ option }}</p>
    <span class="chip">{{ chip }}</span>
    <h3>{{ title }}</h3>
    <ul class="buletLst">
      <template v-for="(data, index) in bullets" :key="index">
        <li>{{ data }}</li>
      </template>

    </ul>
    <div class="cardFtr">
      <p>{{ tradoffData?.label }} <span>{{ tradoffData?.description }}</span></p>
    </div>
  </div>
</template>
