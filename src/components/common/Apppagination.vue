<template>
  <nav class="app-pagination" aria-label="Pagination">
    <ul class="app-pagination__list">

      <li>
        <button class="app-pagination__btn app-pagination__btn--label" :disabled="modelValue <= 1"
          aria-label="Previous page" @click="go(modelValue - 1)">
          Prev
        </button>
      </li>

      <li v-for="item in pages" :key="item.key">
        <span v-if="item.type === 'ellipsis'" class="app-pagination__ellipsis">
          &hellip;
        </span>
        <button v-else class="app-pagination__btn app-pagination__btn--number"
          :class="{ 'app-pagination__btn--active': item.value === modelValue }" :aria-label="`Page ${item.value}`"
          :aria-current="item.value === modelValue ? 'page' : undefined" @click="go(item.value)">
          {{ item.value }}
        </button>
      </li>

      <li>
        <button class="app-pagination__btn app-pagination__btn--label" :disabled="modelValue >= totalPages"
          aria-label="Next page" @click="go(modelValue + 1)">
          Next
        </button>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

const emit = defineEmits(['update:modelValue'])

function go(page) {
  if (page < 1 || page > props.totalPages) return
  emit('update:modelValue', page)
}

const MAX_NUMBERS = 4

const pages = computed(() => {
  const { modelValue: current, totalPages: total } = props
  const items = []
  const push = (value) => items.push({ type: 'page', value, key: `p-${value}` })
  const pushEllipsis = (key) => items.push({ type: 'ellipsis', key })

  if (total <= MAX_NUMBERS) {
    for (let i = 1; i <= total; i++) push(i)
    return items
  }

  // 3-page block containing the current page, clamped to stay in range
  const start0 = Math.min(Math.max(current - 1, 1), total - 2)
  const end0 = start0 + 2

  // Collapse toward whichever edge is nearer to the current page so only a
  // single ellipsis (and at most 4 page numbers) ever show.
  const collapseToStart = start0 === 1 || (end0 !== total && current - 1 <= total - current)

  let start = start0
  let end = end0
  if (collapseToStart && start <= 2) {
    start = 1
    end = 3
  } else if (!collapseToStart && end >= total - 1) {
    end = total
    start = total - 2
  }

  if (collapseToStart) {
    for (let i = start; i <= end; i++) push(i)
    if (end >= total - 1) {
      for (let i = end + 1; i <= total; i++) push(i)
    } else {
      pushEllipsis('el-right')
      push(total)
    }
  } else {
    if (start <= 2) {
      for (let i = 1; i < start; i++) push(i)
    } else {
      push(1)
      pushEllipsis('el-left')
    }
    for (let i = start; i <= end; i++) push(i)
  }

  return items
})
</script>