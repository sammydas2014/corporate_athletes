<script setup>
import BaseCardChip from '@/components/common/BaseCardChip.vue';
import RadarChart from '@/components/charts/RadarChart.vue';
import { ref } from 'vue';
import BaseButton from '@/components/common/BaseButton.vue';

defineProps({
  data:{
    type: Object,
    default: () => {}
  }
})
const chartOptions = ref({
  chart: {
    id: 'radar',
    height: 520,
    type: 'radar',
    toolbar: {
      show: false
    },
    background: 'transparent'
  },
  series: [
    {
      name: 'Performance',
      data: [85, 60, 75, 70, 80, 68],
    }

  ],
  xaxis: {
    categories: ['Ease of Use', 'Integration', 'Scalability', 'Enterprise', 'ROI Potential' , 'Maturity'],
    labels: {
      show: true,
      style: {
        colors: ["#262B30","#262B30","#262B30","#262B30","#262B30","#262B30"],
        fontSize: "15px",
        fontFamily: 'Inter',
        fontWeight: 500,
      }
    }
  },
  yaxis: {
  show: false,
  min: 0,
  max: 100,
  tickAmount: 5,

  labels: {
    show: false
  }
},
stroke: {
    width: 3,
    colors: ['#064D4D']
  },

  fill: {
    opacity: 0.47,
    colors: ['#488487']
  },

  markers: {
    size: 6,
    colors: ['#085B5D'],
    strokeColor: '#085B5D',
    strokeWidth: 2,
    hover: {
      size: 8
    }
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColors: '#d8d8d8',
        connectorColors: '#d8d8d8',
        fill: {
          colors: ['transparent']
        }
      }
    }
  },

  dataLabels: {
    enabled: false
  },

  tooltip: {
    enabled: true
  },

  legend: {
    show: false
  }
});
</script>

<template>
  <section class="tools-hero-section">
    <div class="container">
      <div class="toolsWrap">
        <div class="tools-hdng">
          <div class="top-tag">
            <template v-for="(item, index) in data.tags" :key="index">
              <BaseCardChip :title="item" variant="secondary" />
            </template>

          </div>
          <h1>{{ data.title }}</h1>
          <p>{{ data.shortDescription }}</p>
          <span class="sub-desp">
            {{ data.aboutData }}
          </span>
          <div class="price-wrap">
            <template v-for="(item, index) in data.priceData" :key="index">
              <p><span class="lbl">{{ item.title }}</span> <span class="val"> {{ item.value }}</span></p>
            </template>
          </div>
          <div class="btnwrap">
            <BaseButton>
              Compare Tools
            </BaseButton>
            <BaseButton variant="outline-light">
              <template #icon_left>
                <i class="bi bi-plus"></i>
              </template>
              Shortlist
            </BaseButton>
          </div>
        </div>
        <div class="tools-data">
          <RadarChart :options="chartOptions" :series="chartOptions.series" />
        </div>
      </div>
    </div>
  </section>
</template>
