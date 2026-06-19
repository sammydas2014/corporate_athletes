<script setup>
defineProps({
  card: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="discussionCard">
    <div class="title-wrap">
      <h2>{{ card?.title }}</h2>

    </div>
    <div class="crdBody">
      <!-- Paragraph Type -->
    <template v-if="card.type === 'paragraph'">
      <p
        v-for="(paragraph, index) in card.content"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </template>

    <!-- Bullet Type -->
    <ul
      v-else-if="card.type === 'bullet'"
      :class="`bullet-list bullet-list--${card.bulletStyle}`"
    >
      <li
        v-for="(item, index) in card.content"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>

    </div>
  </div>
</template>
