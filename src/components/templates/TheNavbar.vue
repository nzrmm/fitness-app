<template>
  <nav class="mb-20 py-10 elbetween">
    <router-link
      :to="{ name: 'Home' }"
      class="uppercase text-lg tracking-wide font-semibold"
      >Workout
    </router-link>
    <div class="flex space-x-10">
      <a href="#" class="link">Exercises</a>
      <a href="#" class="link">Trainers</a>
      <a href="#" class="link">Pricing</a>
      <a href="#" class="link">Login</a>
    </div>
  </nav>
</template>

<style scoped>
.link {
  @apply uppercase text-white/80 text-xs tracking-widest hover:text-white;
}
</style>
