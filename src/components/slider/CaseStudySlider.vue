<template>
  <div class="slider-viewport">
    <div class="slider-track" ref="trackRef"
      :style="{ transform: `translateX(-${offset}px)`, transition: trackTransition }" @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay">
      <div v-for="(card, i) in fullData" :key="i" class="cs-card" :class="{ active: i === cur }"
        :style="{ transition: cardTransition }" @click="onCardClick(i)">
        <div class="new_slide">
          <img class="card-img" :src="card?.img" :alt="card?.tag" loading="lazy" />
          <span v-if="card?.tag" class="card-tag">{{ card?.tag }}</span>
        </div>
        <div class="card-body">
          <div>
            <h3>{{ card?.title }}</h3>

            <div class="btm_wrp_con">
              <p v-if="card?.sub" class="casestudie-card__desc">{{ card?.sub }}</p>

              <div v-if="card?.meta || card?.badges?.length"
                class="casestudie-card__meta d-flex align-items-center flex-wrap">
                <span v-if="card?.meta" class="casestudie-card__meta-label">{{ card?.meta }}</span>
                <component :is="badge.route ? 'router-link' : 'span'" v-for="badge in card?.badges" :key="badge.label"
                  :to="badge.route || undefined" class="casestudie-card__badge"
                  :class="`casestudie-card__badge--${badge.type || 'default'}`">
                  <i v-if="badge.type === 'down'" class="bi bi-arrow-down-short me-1"></i>
                  <i v-else-if="badge.type === 'up'" class="bi bi-arrow-up-short me-1"></i>
                  {{ badge.label }}
                </component>
              </div>
            </div>
          </div>
          <RouterLink :to="card?.to" class="arrow-btn">
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
    // default: () => []
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

