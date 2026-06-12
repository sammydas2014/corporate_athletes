<script setup>
import { ref } from 'vue';

const props = defineProps({
  selectedTools: {
    type: Array,
    required: true,
  },
  availableTools: {
    type: Array,
    required: true,
  },
  max: {
    type: Number,
    default: 5,
  },
  activeToolId: {
    type: [Number, String],
    default: null,
  },
});

const emit = defineEmits(['remove', 'add', 'clear-all', 'update:activeToolId']);

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
}

function selectTool(tool) {
  emit('add', tool.id);
  closeDropdown();
}
</script>

<template>
  <div class="comparison-toolbar">
    <div class="comparison-toolbar__group">
      <span class="comparison-toolbar__label">Selected Tools ({{ selectedTools.length }} of {{ max }})</span>

      <span v-for="tool in selectedTools" :key="tool.id" class="comparison-toolbar__chip"
        :class="{ 'is-active': tool.id === activeToolId }"
        :style="{ '--chip-accent-bg': tool.accentBg, '--chip-accent-text': tool.accentText }"
        @click="emit('update:activeToolId', tool.id)">
        <span class="comparison-toolbar__icon" :style="{ backgroundColor: tool.iconBg, color: tool.accentText }">{{
          tool.initials }}</span>
        {{ tool.name }}
        <button type="button" class="comparison-toolbar__remove" :aria-label="`Remove ${tool.name}`"
          @click.stop="emit('remove', tool.id)">
          <i class="bi bi-x"></i>
        </button>
      </span>

      <div v-if="selectedTools.length < max && availableTools.length" class="comparison-toolbar__add">
        <button type="button" class="comparison-toolbar__chip comparison-toolbar__chip--add" @click="toggleDropdown">
          <i class="bi bi-plus"></i> Add Tool
        </button>

        <template v-if="isOpen">
          <div class="comparison-toolbar__backdrop" @click="closeDropdown"></div>
          <div class="comparison-toolbar__dropdown">
            <button v-for="tool in availableTools" :key="tool.id" type="button"
              class="comparison-toolbar__dropdown-item" @click="selectTool(tool)">
              <span class="comparison-toolbar__icon"
                :style="{ backgroundColor: tool.iconBg, color: tool.accentText }">{{ tool.initials
                }}</span>
              {{ tool.name }}
            </button>
          </div>
        </template>
      </div>
    </div>

    <button type="button" class="comparison-toolbar__clear" :disabled="!selectedTools.length"
      @click="emit('clear-all')">
      Clear All
    </button>
  </div>
</template>
