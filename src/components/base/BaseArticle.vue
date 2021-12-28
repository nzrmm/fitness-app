<template>
  <article
    class="group py-10 border-b border-white/40 hover:bg-white/10 hover:rounded-xl transition-all duration-500">
    <a href="#" class="elbetween">
      <div class="elcenter group-hover:translate-x-6 transition duration-300">
        <span class="mr-72">{{ number }}</span>
        <div>
          <h1 class="mb-4 text-5xl">{{ title }}</h1>
          <span class="text-sm">{{ videos }} videos</span>
        </div>
      </div>
      <img
        src="/icons/arrow-right.svg"
        class="group-hover:-translate-x-6 transition duration-300"
        alt="icon right" />
    </a>
  </article>
</template>

<script>
export default {
  props: {
    number: {
      type: [String, Number],
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    videos: {
      type: String,
      default: '',
    },
  },
};
</script>
