<template>
  <BasePageLoading v-if="isLoading" />
  <MainLayouts v-else>
    <router-view></router-view>
  </MainLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const isLoading = ref(true);
    onMounted(() => {
      document.onreadystatechange = () => {
        if (document.readyState == 'complete') {
          isLoading.value = false;
        }
      };
    });
    return {
      isLoading,
    };
  },
};
</script>
