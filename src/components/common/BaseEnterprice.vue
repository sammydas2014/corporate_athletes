<script setup>
defineProps({
  title: {
    type: String,
    default: "We are senior operators first, advisors second."
  },
  details: {
    type: [Array, String],
    default: " "
  },
  imageData: {
    type: String,
    default: ""
  },
  tagData: {
    type: String,
    default: "Who We Are"
  },
  statsData: {
    type: Array,
    default: () => []
  },
  buletLists: {
    type: Array,
    default: () => []
  },
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section :class="['enterprise-sec', className]">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
          <div class="ent_img">
            <img :src="imageData" alt="">
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="ent_content">
            <span class="title__eyebrow"> {{ tagData }} </span>
            <h2 class="sec__title">{{ title }}</h2>
            <div v-if="Array.isArray(details)">
              <template v-for="(data, index) in details" :key="index">
                <p>{{ data.para }}</p>
              </template>
            </div>
            <div v-else>
              <p>{{ details }}</p>
            </div>
            <div class="btm-wrap">
              <!-- Stats Data -->
              <ul v-if="statsData.length">
                <li v-for="(stat, index) in statsData" :key="index">
                  <div class="wrp">
                    <h3>{{ stat.value }}</h3>
                    <p>{{ stat.label }}</p>
                  </div>
                </li>
              </ul>
              <!-- Bulet Lists -->
              <ul v-if="buletLists.length" class="py_list">
                <li v-for="(list, index) in buletLists" :key="index">
                  {{ list }}
                </li>
              </ul>
              <!-- Stats Data -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- styles moved to src/assets/styles/components/BaseEnterprice.css -->