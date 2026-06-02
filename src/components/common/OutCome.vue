<script setup>
  import {defineProps} from 'vue'
  defineProps({
    heading: {
      type: String,
      default: "Outcome"
    },
    description: {
      type: String,
      default: ""
    }
  })
</script>
<template>
  <div class="outcome-wrap">
    <h4>{{ heading }}</h4>
    <template v-if="description">
        <p>{{ description }}</p>
    </template>

  </div>
</template>
<style scoped>
.outcome-wrap {
    margin-top: 38px;
    padding-left: 30px;
    position: relative;
}
.outcome-wrap::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    height: 100%;
    background-color: var(--bs-secondary);
}
.outcome-wrap h4{
  font-size: 15px;
  font-weight: 600;
  color: #1A1D21;
  line-height: 26px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  position: relative;
  display: inline;
}
.outcome-wrap h4::before{
  content: "";
    position: absolute;
    top: 7px;
    width: 104px;
    height: 1px;
    background-color: var(--bs-secondary);
    left: 112%;
}
.outcome-wrap p{
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.04em;
  margin-top: 15px;
  color: #1A1D21;
  font-weight: 400;
}
</style>
