<script setup>
import { defineProps } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'normal',
  },
  chipTitle: {
    type: String,
    default: 'March 8, 2026',
  },
  title: {
    type: String,
    default: 'AI adoption patterns in enterprise finance',
  },
  paraTxt: {
    type: String,
    default:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
})
</script>

<template>
  <div :class="['transform-crd', `transform-crd-${variant}`]">
    <span class="text-wrap">
      <slot>
        <span class="title__eyebrow"> {{ chipTitle }} </span>
        <h3>{{ title }}</h3>
        <p>
          {{ paraTxt }}
        </p>
      </slot>
    </span>
    <span v-if="$slots['icon-right']" class="icon-right-crd">
      <slot name="icon-right"></slot>
    </span>
  </div>
</template>

<style scoped>
.transform-crd {
  padding: 42px 0 45px 0;
  background-color: transparent;
}

.transform-crd h3 {
  font-size: 26px;
}

.transform-crd p {
  font-size: 17px;
  line-height: 27px;
  color: var(--bs-body-color);
  letter-spacing: -4%;
}

.transform-crd-icon-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.transform-crd-icon-right .text-wrap {
  width: 88%;
}

.icon-right-crd {
  flex-shrink: 0;
  border-radius: 50%;
  color: var(--bs-primary);
  font-size: 35px;
  line-height: 1;
  border: none;
  flex: 0 0 auto;
  transition: var(--bs-transition);
}

.icon-right-crd:hover {
  transform: rotate(45deg);
}

.transform-crd-icon-right p {
  max-width: 450px;
}
</style>
