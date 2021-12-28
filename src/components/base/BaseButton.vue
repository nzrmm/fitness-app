<template>
  <button
    :class="[
      color,
      'w-[200px] h-[70px] rounded-xl focus:ring-2 ring-gray-700 transition duration-300',
    ]">
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
