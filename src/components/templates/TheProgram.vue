<template>
  <section class="relative h-[730px]">
    <div class="relative z-10 flex h-full">
      <div class="w-6/12">
        <Animate enterActive="animate__fadeInLeft" duration="2s">
          <h1
            class="relative top-28 z-20 text-9xl font-semibold tracking-[-2px]">
            Workout Program Made For You
          </h1>
        </Animate>

        <Animate enterActive="animate__fadeInUpBig" duration="2s">
          <img
            src="/icons/brush.svg"
            class="relative z-10 -left-4 top-0"
            alt="brush icon" />
        </Animate>
      </div>
      <div class="w-6/12 pl-28 py-40">
        <Animate enterActive="animate__fadeInTopRight" duration="3s">
          <p class="mb-10 text-xl text-white/80 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            consectetur adipiscing.
          </p>
        </Animate>
        <BaseButton color="bg-green hover:bg-green/80" ring="ring-white">
          Get Started
        </BaseButton>
      </div>
    </div>
    <div class="absolute top-0 -right-1/4 bg-white/10 w-full h-full"></div>
  </section>
</template>
