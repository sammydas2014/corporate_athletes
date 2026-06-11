<script setup>
defineProps({
  score: Number,
  max: {
    type: Number,
    default: 10,
  },
})
</script>
<template>
    <div class="range-slider-wrp">
        <div
            class="range-slider__fill"
            :style="{ width: (`${score}` / max) * 100 + '%' }"
        ></div>
    </div>
</template>
