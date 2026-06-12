<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="highlight-card">
    <div class="score-prt">
      <p class="score-val"> <span class="val">{{ data?.score?.value }}</span>/<span class="max-scr">{{ data?.score?.max }}</span></p>
      <p class="label-itm">
        {{ data?.score?.label }}
      </p>
    </div>
    <div class="higlight-list">
      <ul>
        <li v-for="(item, index) in data?.highlights" :key="index">
          <span v-if="item?.type == 'positive'" class="tick-mark">
            <i class="bi bi-check2-circle"></i>
          </span>
          <span v-else-if="item?.type == 'warning'" class="alert-cls">
            <i class="bi bi-exclamation-triangle"></i>
          </span>
          <span class="listval">{{ item?.text }}</span>
        </li>
      </ul>
    </div>
    <div class="estimate-wrp">
      <ul >
        <li v-for="(item, index) in data?.metrics" :key="index">
          <span class="tag">
            <i :class="['bi', `bi-${item?.icon}`]"></i>
          </span>
          <span class="estimate-val">
             <p>{{ item?.label }}</p>
             <span class="mode">{{ item?.value }}</span>
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>
