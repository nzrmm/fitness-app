<template>
  <transition @enter="enter">
    <div v-appear="animate" ref="target">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, toRefs } from 'vue';
export default {
  props: {
    enterActive: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      default: '1s',
    },
  },
  setup(props) {
    const target = ref();
    const animate = ref(false);

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate.value = entry.isIntersecting;
        }
      });
    };

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);

    onMounted(() => {
      observer.observe(target.value);
    });

    const enter = el => {
      console.log(el);
      el.classList.add('animate__animated', props.enterActive);
      el.style.setProperty('--animate-duration', props.duration);
    };

    return {
      target,
      animate,
      enter,
    };
  },
};
</script>

<style>
:root {
  --animate-duration: 1500ms;
  /* --animate-delay: 0.9s; */
}
</style>
