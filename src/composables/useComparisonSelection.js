import { ref } from 'vue';
import { defaultComparisonToolIds } from '@/services/comparison.service';

// Shared across Shortlist (checkboxes) and Comparison (table) views
const selectedForComparison = ref([...defaultComparisonToolIds]);

export function useComparisonSelection() {
  const isSelected = (toolId) => selectedForComparison.value.includes(toolId);

  const setSelected = (toolId, value) => {
    const alreadySelected = selectedForComparison.value.includes(toolId);
    if (value && !alreadySelected) {
      selectedForComparison.value = [...selectedForComparison.value, toolId];
    } else if (!value && alreadySelected) {
      selectedForComparison.value = selectedForComparison.value.filter((id) => id !== toolId);
    }
  };

  return { selectedForComparison, isSelected, setSelected };
}
