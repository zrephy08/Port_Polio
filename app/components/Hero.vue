<template>
  <section id="home" class="relative bg-[url('/test2(1).jpg')] bg-cover bg-center">
    <div id="hero-container"
         class="relative flex justify-center items-center lg:gap-[100px] lg:py-10 lg:px-10 lg:h-[600px]
                md:gap-[50px] md:pt-6 md:pb-6 md:h-[500px]">

      <div class="relative flex flex-col items-center md:items-center lg:items-start">
        <!-- Pulsating Glow -->
        <div class="absolute top-1/2 left-1/2 lg:w-[280px] lg:h-[280px] md:h-[180px] md:w-[180px] -translate-x-1/2 -translate-y-1/2 
          bg-[#a35cf0] rounded-xl blur-xl opacity-90 glow-pulse delayed-glow"></div>

        <!-- Image on top -->
        <img src="/test4.jpg" alt="My Photo"
             class="relative lg:h-[300px] lg:w-[300px] md:h-[200px] md:w-[200px] rounded-xl fade-in-image">
      </div>

      <div class="flex flex-col">

        <div class="relative flex flex-col m-0 text-container opacity-0">
            <h1 class="lg:text-[60px] md:text-[30px] font-bold text-white leading-[1.1]">
            HELLO THERE! 
            </h1>
        </div>

        <div class="relative flex flex-col m-0 text-container1 opacity-0">
            <span class="block lg:text-[20px] md:text-[10px] text-white mt-2 leading-[1]">I'm Aljubehr Sahiol, I build digital experiences</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Glow pulsating animation */
@keyframes pulseGlow {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
.glow-pulse {
  animation: pulseGlow 5s ease-in-out infinite;
}

/* Delayed start for the glow */
.delayed-glow {
  animation-delay: 3s; /* wait until both texts are done */
  animation-fill-mode: backwards; /* ensures it starts after delay */
}

/* Simple fade-in for image */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.fade-in-image {
  opacity: 0;
  animation: fadeIn 1.5s ease-out forwards;
}

/* Text animation: fade-in after image */
@keyframes textFadeIn {
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
}
.text-container {
  animation: textFadeIn 1s ease-out 1s forwards;
}
.text-container1 {
  animation: textFadeIn 1s ease-out 2s forwards;
}
</style>