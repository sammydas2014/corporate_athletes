<script setup>
import BaseToolsChip from '@/components/common/BaseToolsChip.vue';
defineProps({
  role:{
    type: String,
  },
  subHdng:{
    type: String,
    default: ""
  },
  description:{
    type: String,
    default: ""
  },
  toolsList:{
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div class="stack-card">
    <h6>{{role}}</h6>
    <span v-if="subHdng" class="sub-hdng">
      {{subHdng}}
    </span>
    <p v-if="description">
      {{description}}
    </p>
    <div class="tools" v-if="toolsList.length > 0">
      <template v-for="(tool, index) in toolsList" :key="index">
        <BaseToolsChip :tools="tool.name" :catagory="tool.category"/>
      </template>
    </div>

  </div>
</template>
