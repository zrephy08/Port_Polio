<template>
    <section id="skills" class="py-24 bg-gradient-to-b from-[#220640] to-[#2e0f73] flex justify-center">
        <div class="max-w-6xl w-full px-6 text-white">

        <!-- Title -->
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 glowing-text">
            MY SKILLS
        </h2>

        <div class="flex flex-wrap justify-center gap-6 text-3xl font-semibold text-white">
            
            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                w-[350px] h-[350px] p-6">
                <div class="absolute inset-0 bg-[url('test-html.jpeg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">HTML</span>
            </div>

            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                w-[350px] h-[350px] p-6">
                <div class="absolute inset-0 bg-[url('test-css.jpeg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">CSS</span>
            </div>
            
            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                w-[350px] h-[350px] p-6">
                <div class="absolute inset-0 bg-[url('test-javas.jpg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">JAVASCRIPT</span>
            </div>

            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                w-[350px] h-[350px] p-6">
                <div class="absolute inset-0 bg-[url('test-php.jpeg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">PHP</span>
            </div>

            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                w-[350px] h-[350px] p-6">
                <div class="absolute inset-0 bg-[url('test-videdi.jpg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">VIDEO EDITTING</span>
            </div>

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