<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    },
    sectionKey: {
      type: String,
      default: ""
    }
  })

  console.log(props.data)
</script>
<template>
  <div class="comparison-card">
    <div :class="['comparison-wrapper' , `comparison-wrapper-${sectionKey}`]" >
      <h3>{{data.title}}</h3>
      <ul>
        <li v-for="(item, index) in data.points" :key="index" class="list-item">
          <span v-if="sectionKey === 'strengths'" class="grnIcon">
            <i class="bi bi-check2-circle"></i>
          </span>
          <span class="redIcon" v-else>
            <i class="bi bi-x-circle"></i>
          </span>
          <span class="text-item">
            {{item}}
          </span>

        </li>
      </ul>

    </div>
  </div>


</template>
