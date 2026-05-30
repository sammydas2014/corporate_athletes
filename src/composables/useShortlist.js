import { ref, watch } from 'vue';

// Global shared reactive state
const shortlistedTools = ref([]);

// Retrieve initial state from localStorage if running in browser
if (typeof window !== 'undefined') {
  const cached = localStorage.getItem('altius_shortlist');
  if (cached) {
    try {
      shortlistedTools.value = JSON.parse(cached);
    } catch (e) {
      console.error('Failed to parse cached shortlist', e);
    }
  }
}

// Persist adjustments automatically
watch(
  shortlistedTools,
  (newVal) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('altius_shortlist', JSON.stringify(newVal));
    }
  },
  { deep: true }
);

export function useShortlist() {
  const isShortlisted = (toolId) => {
    return shortlistedTools.value.some((t) => t.id === toolId);
  };

  const toggleShortlist = (tool) => {
    const index = shortlistedTools.value.findIndex((t) => t.id === tool.id);
    if (index > -1) {
      shortlistedTools.value.splice(index, 1);
    } else {
      shortlistedTools.value.push({
        id: tool.id,
        name: tool.name,
        category: tool.category,
        logo: tool.logo,
         FTE: tool.FTE || 'N/A',
        sellersView: tool.sellersView || 'N/A',
        sponsorView: tool.sponsorView || 'N/A',
        cost: tool.cost || 'N/A',
        accuracy: tool.accuracy || 'N/A'
      });
    }
  };

  const removeFromShortlist = (toolId) => {
    shortlistedTools.value = shortlistedTools.value.filter((t) => t.id !== toolId);
  };

  const clearShortlist = () => {
    shortlistedTools.value = [];
  };

  return {
    shortlistedTools,
    isShortlisted,
    toggleShortlist,
    removeFromShortlist,
    clearShortlist,
  };
}
