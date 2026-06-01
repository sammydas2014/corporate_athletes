<script setup>
import {defineProps} from 'vue'
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

<style scoped>
.solution-list-wrap + .solution-list-wrap{
  margin-top: 35px;
}
.solution-list-wrap h4{
  font-size: 15px;
  font-weight: 600;
  color: #1A1D21;
  line-height: 26px;
  letter-spacing: -3%;
  text-transform: uppercase;
  position: relative;
  display: inline;
}
.solution-list-wrap h4::before{
  content: "";
    position: absolute;
    top: 7px;
    width: 104px;
    height: 1px;
    background-color: #D6A85F;
    left: 112%;
}
.solution-list-wrap p{
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -3%;
  margin-top: 15px;
}
.solution-list-wrap ul {
    padding: 0;
    margin-top: 17px;
}
.solution-list-wrap ul li{
      padding-left: 27px;
    font-size: 17px;
    color: #6B7280;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -3%;
    position: relative;
}
.solution-list-wrap ul li + li{
  margin-top: 24px;
}
.solution-list-wrap ul li::before{
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  width: 15px;
  height: 15px;
  background: url("../../assets/images/golden-check.png") no-repeat center;
  background-size: contain;
}

</style>