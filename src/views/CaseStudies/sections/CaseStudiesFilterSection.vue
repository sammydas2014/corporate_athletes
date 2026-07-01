  <template>
  <section class="cstd_filter_sec">
    <div class="container">
      <div class="cstd_filter_sec__search">
        <BaseInput v-model="searchQuery" variant="cstd" :placeholder="caseStudiesHeader.searchPlaceholder" readonly>
          <template #icon-right>
            <i class="bi bi-funnel cstd-filter-trigger" @click="openPanel"></i>
          </template>
        </BaseInput>
      </div>

      <div class="cstd_filter_overlay" :class="{ 'is-open': isPanelOpen }" @click="closePanel"></div>

      <div class="cstd_filter_sec__panel" :class="{ 'is-open': isPanelOpen }">
        <button type="button" class="cstd_filter_close" @click="closePanel" aria-label="Close filters">
          <i class="bi bi-x-lg"></i>
        </button>
        <div v-for="group in caseStudiesFilterGroups" :key="group.id" class="cstd_filter_sec__group">
          <span class="cstd_filter_sec__label">{{ group.label }}</span>
          <div class="cstd_filter_sec__chips">
            <button v-for="option in group.options" :key="option.value" type="button" class="cstd_filter_sec__chip"
              :class="{ 'is-active': isActive(group, option) }" @click="toggle(group, option)">
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { caseStudiesHeader, caseStudiesFilterGroups } from '@/services/casestudieslist.service';

const searchQuery = ref('');
const isPanelOpen = ref(false);

function openPanel() { isPanelOpen.value = true; }
function closePanel() { isPanelOpen.value = false; }

const selected = reactive(
  caseStudiesFilterGroups.reduce((acc, group) => {
    acc[group.id] = group.multiple ? [] : (group.default || null);
    return acc;
  }, {})
);

function isActive(group, option) {
  return group.multiple
    ? selected[group.id].includes(option.value)
    : selected[group.id] === option.value;
}

function toggle(group, option) {
  if (group.multiple) {
    const current = selected[group.id];
    const idx = current.indexOf(option.value);
    if (idx === -1) current.push(option.value);
    else current.splice(idx, 1);
  } else {
    selected[group.id] = option.value;
  }
}
</script>
