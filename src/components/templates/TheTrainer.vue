<template>
  <section class="mb-96 flex">
    <div class="w-3/12 h-[320px]">
      <Animate enterActive="animate__zoomIn" duration="2s">
        <img
          src="/images/trainer-1.webp"
          class="w-full mb-4 h-full object-cover"
          alt="trainer-image" />
        <div>
          <h4 class="text-xl font-medium">Samantha William</h4>
          <span class="text-white/80 text-sm">Trainer</span>
        </div>
      </Animate>
    </div>
    <div class="relative top-[320px] w-3/12 h-[320px]">
      <Animate enterActive="animate__zoomInDown" duration="2s">
        <img
          src="/images/trainer-2.webp"
          class="w-full mb-4 h-full object-cover"
          alt="trainer-image" />
        <div>
          <h4 class="text-xl font-medium">Karen Summer</h4>
          <span class="text-white/80 text-sm">Trainer</span>
        </div>
      </Animate>
    </div>
    <div class="relative -top-[200px] w-6/12 h-[520px]">
      <Animate enterActive="animate__fadeInBottomRight" duration="2s">
        <img
          src="/images/trainer-3.webp"
          class="w-full mb-4 h-full object-cover"
          alt="trainer-image" />
        <div class="ml-4">
          <h4 class="text-xl font-medium">Jonathan Wise</h4>
          <span class="text-white/80 text-sm">Trainer</span>
        </div>
      </Animate>
    </div>
  </section>
</template>
