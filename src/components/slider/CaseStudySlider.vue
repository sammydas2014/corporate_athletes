<template>
  <div class="slider-viewport">
    <div
      class="slider-track"
      ref="trackRef"
      :style="{ transform: `translateX(-${offset}px)`, transition: trackTransition }"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
    >
      <div
        v-for="(card, i) in fullData"
        :key="i"
        class="cs-card"
        :class="{ active: i === cur }"
        :style="{ transition: cardTransition }"
        @click="onCardClick(i)"
      >
        <div class="new_slide" style="position: relative">
          <img class="card-img" :src="card.img" :alt="card.tag" loading="lazy" />
          <span v-if="card.tag" class="card-tag">{{ card.tag }}</span>
        </div>
        <div class="card-body">
          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.sub }}</p>
          </div>
          <RouterLink :to="card.to" class="arrow-btn">
            <i class="bi bi-arrow-up-right-circle-fill"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
})

const DUR = 700
const AUTOPLAY_MS = 3000
const CLONES = 5

const N = computed(() => props.cards.length)

const fullData = computed(() => {
  const data = props.cards
  const n = N.value
  const before = Array.from({ length: CLONES }, (_, i) => data[(n - CLONES + i + n) % n])
  const after = Array.from({ length: CLONES }, (_, i) => data[i % n])
  return [...before, ...data, ...after]
})

const trackRef = ref(null)
const cardWidth = ref(300)
const cardGap = ref(16)

function step() {
  return cardWidth.value + cardGap.value
}

function measureCard() {
  if (!trackRef.value) return
  const firstCard = trackRef.value.children[0]
  if (!firstCard) return
  cardWidth.value = firstCard.offsetWidth
  const gap = parseFloat(getComputedStyle(trackRef.value).columnGap)
  if (!isNaN(gap)) cardGap.value = gap
}

const cur = ref(CLONES)
const offset = ref(0)
const trackTransition = ref('none')
const cardTransition = ref('')
const busy = ref(false)
let snapTimer = null
let autoTimer = null
let resizeObserver = null

function offsetFor(ti) {
  return ti * step()
}

function jumpTo(ti) {
  cardTransition.value = 'none'
  trackTransition.value = 'none'
  cur.value = ti
  offset.value = offsetFor(ti)
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      cardTransition.value = ''
      busy.value = false
    }),
  )
}

function slideTo(ti) {
  if (busy.value) return
  busy.value = true
  clearTimeout(snapTimer)
  cur.value = ti
  offset.value = offsetFor(ti)
  trackTransition.value = `transform ${DUR}ms cubic-bezier(0.4,0,0.2,1)`

  snapTimer = setTimeout(() => {
    if (cur.value < CLONES) {
      jumpTo(cur.value + N.value)
    } else if (cur.value >= CLONES + N.value) {
      jumpTo(cur.value - N.value)
    } else {
      busy.value = false
    }
  }, DUR + 30)
}

function onCardClick(i) {
  if (i !== cur.value) slideTo(i)
}

function startAutoplay() {
  stopAutoplay()
  autoTimer = setInterval(() => slideTo(cur.value + 1), AUTOPLAY_MS)
}

function stopAutoplay() {
  clearInterval(autoTimer)
}

onMounted(async () => {
  await nextTick()
  measureCard()
  offset.value = offsetFor(CLONES)

  resizeObserver = new ResizeObserver(() => {
    measureCard()
    trackTransition.value = 'none'
    offset.value = offsetFor(cur.value)
  })
  resizeObserver.observe(trackRef.value)

  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
  clearTimeout(snapTimer)
  resizeObserver?.disconnect()
})
</script>

<style scoped>
.slider-viewport {
  overflow: hidden;
  width: 100vw;
}

.slider-track {
  display: flex;
  gap: 30px;
  will-change: transform;
}

.cs-card {
  flex-shrink: 0;
  width: 390px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background: var(--bs-white);
  cursor: pointer;
  position: relative;
  transition:
    width 700ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 500ms ease;
}

.cs-card.active {
  width: 810px;
  opacity: 1;
  max-width: calc(100dvw - 36px);
}

.new_slide {
  height: 500px;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: var(--border-radius-md);
}

.card-tag {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 13px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bs-secondary);
  background: var(--bs-white);
  border: 1px solid var(--bs-secondary);
  padding: 8px 15px;
  border-radius: var(--bs-border-radius-pill);
}

.card-body {
  background: var(--bs-white);
  padding: 25px 22px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  border-radius: var(--border-radius-sm);
}

.card-body h3 {
  font-weight: 600;
  color: var(--bs-dark);
  line-height: 1.2;
  letter-spacing: -0.05em;
  margin-bottom: 10px;
  transition: var(--bs-transition);
}

.card-body p {
  font-size: 15px;
  color: var(--bs-body-color);
  line-height: 1.5;
  margin-bottom: 0;
}

.arrow-btn > i {
  color: var(--bs-primary);
}
.arrow-btn {
  flex-shrink: 0;
  border-radius: 50%;
  color: var(--bs-primary);
  font-size: 30px;
  border: none;
  flex: 0 0 auto;
  transition: var(--bs-transition);
}

.arrow-btn:hover {
  transform: rotate(45deg);
}
</style>
