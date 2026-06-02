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
                <li>
                  <div class="wrp">
                    <h3>100%</h3>
                    <p>
                      Practitioner-led engagements
                    </p>
                  </div>
                </li>
                <li>
                  <div class="wrp">
                    <h3>30+</h3>
                    <p>
                      Curated consortium experts
                    </p>
                  </div>
                </li>
                <li>
                  <div class="wrp">
                    <h3>0</h3>
                    <p>
                      Vendor reseller agreements
                    </p>
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

<style scoped>
.enterprise-sec {
  padding: var(--sec-gap) 0;
  background-color: #FAFAF8;
}

.ent_img {
  border-radius: 20px;
  background-color: #1E4D5D;
  overflow: hidden;
  position: relative;
  padding: 10px;
  margin-right: 120px;
}

.ent_img img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.ent_content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ent_content .title__eyebrow {
  width: fit-content;
}

.ent_content p+p {
  margin-top: 25px;
}

.btm-wrap {
  margin-top: 55px;
}

.btm-wrap ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 45px;
}

.btm-wrap ul li h3 {
  font-size: 36px;
  font-weight: 600;
  color: #216279;
  letter-spacing: -5%;
  margin-bottom: 15px;
}

.btm-wrap ul.py_list {
  flex-wrap: wrap;
  gap: 35px;
}

.btm-wrap ul.py_list li {
  width: 45%;
  position: relative;
  color: #1A1D21;
  padding-left: 17px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -4%;
}

.btm-wrap ul.py_list li::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 0;
  width: 7px;
  height: 7px;
  background-color: #D6A85F;
  border-radius: 50%;
}

.strategy-governace-sec .ent_content {
  padding-right: 64px;
}

.strategy-governace-sec .ent_content h2.sec__title {
  max-width: 400px;
}
</style>