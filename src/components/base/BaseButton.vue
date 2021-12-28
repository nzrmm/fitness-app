<template>
  <button :class="[color, 'w-[200px] h-[70px]  rounded-xl']">
    <span class="text-lg font-semibold">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },
};
</script>
