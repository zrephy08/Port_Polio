<template>
    <section id="about" class="flex flex-col items-center bg-[#220640] py-10">
    <!-- Centered heading -->
    <h2 class="font-bold text-3xl md:text-2xl lg:text-4xl text-center text-white mt-16 mb-12 glowing-text">
        ABOUT ME
    </h2>

    <!-- Card -->
    <div class="bg-[#7c17e8] max-w-5xl lg:p-16 md:p-10 text-center text-white rounded-2xl">
        <div class="flex items-center gap-6">
        <p class="lg:text-lg md:text-md flex-1 text-justify">
            Hi, I’m Aljubehr Banguis Sahiol. I create digital experiences that people enjoy, whether it’s 
            building websites and apps, designing clean interfaces, or sharing ideas through videos. I’m passionate about 
            turning concepts into real, usable solutions that make life easier or more enjoyable.
        </p>

        <img src="/logo12.png" alt="My Photo" class="md:h-[150px] md:w-[150px] lg:h-[300px] lg:w-[300px] rounded-xl">

        <p class="lg:text-lg md:text-md flex-1 text-justify">
            I love exploring new technologies, experimenting with creative formats, and finding ways to combine functionality 
            and creativity in everything I do. I’m always looking for new challenges that help me grow and improve my skills.
        </p>
        </div>
    </div>
    </section>
</template>

<style scoped>
/* Subtle small pulsating glow for MY SKILLS */
@keyframes textPulseGlow {
  0%, 100% {
    text-shadow: 0 0 4px #a35cf0, 0 0 8px #a35cf0, 0 0 12px #a35cf0;
    color: #ffffff;
  }
  50% {
    text-shadow: 0 0 5px #a35cf0, 0 0 15px #a35cf0, 0 0 20px #a35cf0;
    color: #ffffff;
  }
}

.glowing-text {
  animation: textPulseGlow 3s ease-in-out infinite;
}
</style>