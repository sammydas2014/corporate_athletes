<template>
  <ol ref="listRef" class="step-list" role="list" :style="cssVars">
    <li
      v-for="(step, i) in steps"
      :key="step.id ?? i"
      class="step-list__item"
      :class="{
        'is-active': i <= activeIndex,
        'is-current': i === activeIndex
      }"
    >
      <span class="step-list__bar" aria-hidden="true"></span>

      <span class="step-list__icon" aria-hidden="true">
        <img :src="step?.icon" alt="Idea Image">
      </span>

      <div class="step-list__content">
        <h3 class="step-list__title">{{ step.title }}</h3>
        <p class="step-list__desc">{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

/**
 * Self-contained step list. Knows nothing about the section around it —
 * give it a `steps` array and it handles its own scroll-triggered,
 * cumulative, replay-on-reenter activation.
 */
const props = defineProps({
  steps: { type: Array, required: true },

  // ms between each item becoming active
  interval: { type: Number, default: 1400 },
  // restart from the top once the last item is reached, while still in view
  loop: { type: Boolean, default: false },
  // begin automatically whenever the list scrolls into view, reset when it leaves
  autoStart: { type: Boolean, default: true },
  // how much of the list must be visible to count as "in view" (0-1)
  visibilityThreshold: { type: Number, default: 0.15 },

  // optional override — if omitted, it inherits --accent from an ancestor,
  // or falls back to the gold default below
  accentColor: { type: String, default: null }
})

const cssVars = computed(() =>
  props.accentColor ? { '--accent': props.accentColor } : {}
)

const listRef = ref(null)
const activeIndex = ref(-1)

let intervalId = null
let observer = null

function advance() {
  if (activeIndex.value < props.steps.length - 1) {
    activeIndex.value += 1
  } else if (props.loop) {
    activeIndex.value = 0
  } else {
    stopSequence()
  }
}

function startSequence() {
  if (intervalId || !props.steps.length) return
  activeIndex.value = 0
  intervalId = setInterval(advance, props.interval)
}

function stopSequence() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// clears progress so the next time this list enters view it replays from card 1
function resetSequence() {
  stopSequence()
  activeIndex.value = -1
}

function restart() {
  resetSequence()
  startSequence()
}

// lets a parent (or a demo page) trigger a manual replay
defineExpose({ restart })

onMounted(() => {
  if (!props.autoStart) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startSequence()
        } else {
          resetSequence()
        }
      })
    },
    { threshold: props.visibilityThreshold }
  )

  if (listRef.value) observer.observe(listRef.value)
})

onBeforeUnmount(() => {
  stopSequence()
  if (observer) observer.disconnect()
})
</script>
