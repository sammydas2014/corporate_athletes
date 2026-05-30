import { ref } from 'vue';

// Global shared reactive state
const comparedTools = ref([]);

export function useComparison() {
  const isCompared = (toolId) => {
    return comparedTools.value.some((t) => t.id === toolId);
  };

  const addToComparison = (tool) => {
    if (isCompared(tool.id)) {
      return { success: false, message: 'Tool already in comparison list.' };
    }
    if (comparedTools.value.length >= 3) {
      return { success: false, message: 'You can compare a maximum of 3 tools at the same time.' };
    }
    comparedTools.value.push({
      id: tool.id,
      name: tool.name,
      category: tool.category,
      logo: tool.logo,
      FTE: tool.FTE || 'N/A',
      sellersView: tool.sellersView || 'N/A',
      sponsorView: tool.sponsorView || 'N/A',
      cost: tool.cost || 'N/A',
      accuracy: tool.accuracy || 'N/A',
      desc: tool.desc || '',
      compliance: tool.compliance || 'High',
      integrationComplexity: tool.integrationComplexity || 'Medium'
    });
    return { success: true };
  };

  const removeFromComparison = (toolId) => {
    comparedTools.value = comparedTools.value.filter((t) => t.id !== toolId);
  };

  const clearComparison = () => {
    comparedTools.value = [];
  };

  return {
    comparedTools,
    isCompared,
    addToComparison,
    removeFromComparison,
    clearComparison,
  };
}
