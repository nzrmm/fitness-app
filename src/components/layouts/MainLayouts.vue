<template>
  <div class="antialiased min-h-screen bg-black text-white overflow-hidden">
    <div v-if="!isMobile" class="container">
      <TheNavbar />
      <slot></slot>
    </div>
    <div v-else class="px-6 elcenter flex-col text-center w-full h-screen">
      <span class="mb-6 text-8xl">🙁</span>
      <h2 class="mb-4 text-2xl font-semibold">
        Sorry, not supported on mobile devices.
      </h2>
      <span class="text-sm text-white/60">
        To visit the site, please open with desktop only !
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const isMobile = ref();
    const checkScreen = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1024) {
        isMobile.value = true;
        return;
      }
      isMobile.value = false;
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return {
      isMobile,
    };
  },
};
</script>
