<template>
  <div class="px-10 py-4 bg-white/10 rounded-2xl">
    <h3 :class="[titleColor, 'font-semibold text-4xl']">
      {{ titleData }}
    </h3>
    <span class="uppercase text-sm tracking-wider">{{ type }}</span>
  </div>
</template>

<script>
export default {
  props: {
    titleColor: {
      type: String,
      default: '',
    },
    titleData: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
