<script setup>
defineProps({
  score: Number,

})
</script>
<template>
    <div class="range-slider-wrp">
        <div
            class="range-slider__fill"
            :style="{ width: (`${score}` / 10) * 100 + '%' }"
        ></div>
    </div>
</template>
