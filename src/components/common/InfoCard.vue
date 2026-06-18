<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },

  sections: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="info-card">
    <h3
      v-if="title"
      class="info-card__title"
    >
      {{ title }}
    </h3>

    <div
      v-for="section in sections"
      :key="section?.id"
      class="info-card__section"
    >
      <div class="info-card__header">
        <span class="iconWrap">
          <img
            :src="section.icon"
            :alt="section.heading"
          />
        </span>

        <span class="headText">
          {{ section?.heading }}
        </span>
      </div>

      <ul v-if="Array.isArray(section?.content)">
        <li
          v-for="(item , index) in section.content"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>

      <p v-else>
        {{ section.content }}
      </p>
    </div>
  </div>
</template>
