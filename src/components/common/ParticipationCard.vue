<script setup>
  import BaseButton from "./BaseButton.vue"
  defineProps({
    data:{
      type: Object,
      default: () =>  {}
    }
  })
</script>

<template>
  <div class="participationCrd">
    <div class="card-innr">
      <div class="card-left">
        <div class="card-img">
          <img :src="data.image" alt="Participance Event Image">
          <div class="date-wrap">
            <p>{{ data.date.day }}</p>
            <span>
              <span class="mnth">
                {{ data.date.month }}
              </span>
             {{ data.date.year }}</span>
          </div>
        </div>
        <div class="card-dtls">
          <h4>{{ data.title }}</h4>
          <p class="location-data">{{ data.location }}</p>

        </div>
      </div>
      <div class="card-right">
        <BaseButton variant="outline-light">
          {{ data.buttonText }}
        </BaseButton>
      </div>
    </div>
  </div>

</template>
