<script setup>
import BaseProggressBar from "./BaseProggressBar.vue"
defineProps({
  title: String,
  score: Number,
  description: String
})

</script>

<template>
  <div class="breakdown-card">
    <div class="crd-hdr">
      <h6>{{title}}</h6>
      <span class="score">{{score}}</span>
    </div>
    <div class="crd-body">
      <BaseProggressBar
        :score="score"
      />
    </div>
    <div class="crd-ftr">
      <p>{{description}}</p>
    </div>
  </div>
</template>
