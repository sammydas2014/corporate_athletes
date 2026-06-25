import { ref, computed, unref, onMounted, onUnmounted } from 'vue';

/**
 * Shared Swiper progress-bar + prev/next-nav state, used by every card
 * slider that renders a "progress bar + circular nav buttons" footer
 * (Audienceslider, RoundtablesSection, UpcomingEvents, ...).
 *
 * @param {Object} options
 * @param {() => number} options.total - returns the current slide count
 * @param {number} options.desktopCols - default visible-slide count on desktop
 * @param {boolean | import('vue').Ref<boolean> | () => boolean} [options.loop] - whether the swiper loops
 * @param {(windowWidth: number) => number} [options.getVisibleCount] - resize-driven visible-slide count
 */
export function useSliderNav({ total, desktopCols = 1, loop = false, getVisibleCount }) {
  const swiperInstance = ref(null);
  const activeIndex = ref(0);
  const visibleCount = ref(desktopCols);

  const isLoop = () => (typeof loop === 'function' ? loop() : unref(loop));

  const updateVisibleCount = () => {
    const w = window.innerWidth;
    visibleCount.value = getVisibleCount ? getVisibleCount(w) : desktopCols;
  };

  function onSwiper(swiper) {
    swiperInstance.value = swiper;
  }

  function onSlideChange(swiper) {
    activeIndex.value = isLoop() ? swiper.realIndex : swiper.activeIndex;
  }

  function slidePrev() {
    swiperInstance.value?.slidePrev();
  }

  function slideNext() {
    swiperInstance.value?.slideNext();
  }

  const totalCount = computed(total);

  const isBeginning = computed(() => activeIndex.value === 0);
  const isEnd = computed(() => activeIndex.value >= totalCount.value - visibleCount.value);
  const showFooter = computed(() => totalCount.value > Math.floor(visibleCount.value));

  const progressWidth = computed(() => {
    const totalItems = totalCount.value;
    if (totalItems <= 1) return '100%';

    if (isLoop()) {
      return `${(((activeIndex.value % totalItems) + 1) / totalItems) * 100}%`;
    }

    const maxSlides = totalItems - visibleCount.value;
    if (maxSlides <= 0) return '100%';
    return `${((activeIndex.value + 1) / (maxSlides + 1)) * 100}%`;
  });

  onMounted(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleCount);
  });

  return {
    swiperInstance,
    activeIndex,
    visibleCount,
    onSwiper,
    onSlideChange,
    slidePrev,
    slideNext,
    isBeginning,
    isEnd,
    showFooter,
    progressWidth,
  };
}
