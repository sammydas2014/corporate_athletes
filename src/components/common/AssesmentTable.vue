<script setup>
defineProps({
  tableData: Array,
  note:String,
})
</script>
<template>
  <div class="main-table-wrap">
    <div class="table-row" v-for="table in tableData" :key="table.id" :class="table.priority">
      <div class="table-title">
        <p>{{ table.label }}</p>

      </div>
      <div class="table-data">
        <p>{{ table.value }}</p>
      </div>
    </div>
    <p v-if="note" class="noteData">{{ note }}</p>
  </div>
</template>
