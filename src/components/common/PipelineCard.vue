<script setup>
  defineProps({
    logo:{
      type: String,
      default: ""
    },
    tagline:{
      type: String,
      default: ""
    },
    title:{
      type: String,
      default: ""
    },
    subTitle:{
      type: String,
      default: ""
    },
    indicators:{
      type: Array,
      default: () => []
    },
    longList:{
      type: Array,
      default: () => []
    }
  })
</script>
<template>
  <div class="pipeline-crd">
    <div v-if="logo" class="logo-wrap">
      <img :src="logo" alt="Layer Logo" />
    </div>
    <p v-if="tagline" class="tagline"> {{ tagline }} </p>
    <h6>{{ title }}</h6>
    <p v-if="subTitle" class="subhdng"> {{ subTitle }} </p>
    <ul v-if="indicators.length" class="indicators">
      <template v-for="item in indicators" :key="item.id">
        <li> <span :class="item.status"></span> {{ item.label }} </li>
      </template>
    </ul>
    <ul v-if="longList.length" class="longList">
      <template v-for="item in longList" :key="item.id">
        <li><span :class="item.status"></span> {{ item.text }} </li>
      </template>
    </ul>
  </div>
</template>
