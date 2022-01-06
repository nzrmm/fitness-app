import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import 'animate.css';

// Keeping the space occupied
export const appear = {
  beforeMount(element) {
    element.style.visibility = 'hidden';
  },
  updated(element, binding, vnode) {
    if (!binding.value === !binding.oldValue || null === vnode.transition) {
      return;
    }
    if (!binding.value) {
      vnode.transition.leave(element, () => {
        element.style.visibility = 'hidden';
      });
      return;
    }
    vnode.transition.beforeEnter(element);
    element.style.visibility = '';
    vnode.transition.enter(element);
  },
};

const app = createApp(App);
app.use(router);
app.directive('appear', appear);
app.mount('#app');
