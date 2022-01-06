<template>
  <article
    class="mb-28 relative w-4/12 px-4 hover:scale-105 transition duration-500 cursor-pointer">
    <Animate enterActive="animate__zoomIn" duration="2s">
      <img :src="`/images/${src}`" class="w-full h-auto" alt="card image" />
      <span
        class="absolute px-4 py-2 bg-black font-semibold bottom-0 right-4 rounded-tl-xl">
        {{ time }}
      </span>
      <div class="absolute bottom-0 pl-6 -mb-10">
        <h1 class="text-5xl font-semibold">{{ training }}</h1>
        <span class="text-xs text-white/80">{{ calories }} eas calories</span>
      </div>
    </Animate>
  </article>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    training: {
      type: String,
      default: '',
    },
    calories: {
      type: String,
      default: '',
    },
    time: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>
