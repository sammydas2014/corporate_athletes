<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<template>

  <div class="timeline">

    <div
      v-for="(item , index) in items"
      :key="item.id"
      class="timeline-item"
    >

      <div class="time">
        {{ item.time }}
      </div>
      <div class="time-icon">
        <span>
          {{ index + 1 }}
        </span>
      </div>

      <div class="content">

        <h4>
          {{ item.title }}
        </h4>

        <p>
          {{ item.description }}
        </p>

      </div>

    </div>

  </div>

</template>
