<template>
  <section class="mb-48 relative">
    <div class="elstart p-2 w-fit bg-white/10 rounded-full">
      <BaseBadge>New</BaseBadge>
      <span class="mx-5 text-xs tracking-wider">
        High Intensity workout to burn calories
      </span>
    </div>
    <div class="elcenter">
      <h1
        class="-mx-3 pt-8 text-[200px] leading-[170px] font-semibold tracking-[-2px]">
        Cardio Exercise
      </h1>
      <div class="z-20 flex flex-col space-y-6">
        <BaseDesc titleColor="text-yellow" titleData="38:14" type="time" />
        <BaseDesc titleColor="text-rose" titleData="165" type="eas calories" />
      </div>
    </div>
    <p class="w-7/12 py-10 text-white/50">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="flex space-x-6">
      <BaseButton color="bg-green hover:bg-green/80">Get Started</BaseButton>
      <BaseButton color="bg-white/10 hover:bg-white/20">Preview</BaseButton>
    </div>
    <img
      src="/images/hero.webp"
      class="z-10 absolute -top-48 -right-32"
      alt="hero image" />
  </section>
</template>
