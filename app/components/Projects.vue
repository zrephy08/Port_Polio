<template>
  <section id="projects" class="bg-[#2e0f73] flex flex-col items-center justify-center pt-24 pb-60 text-white">
    
    <h2 class="text-3xl lg:text-4xl font-bold text-center glowing-text mb-14">
      MY PROJECTS
    </h2>

    <!-- Projects Container -->
    <div class="max-w-6xl w-full px-6 grid md:grid-cols lg:grid-cols-3 gap-10">

        <!-- Project Card -->
        <div class="group relative rounded-xl overflow-hidden shadow-lg">
            
            <img 
            src="/portfolio.jpg"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-[#0c0217]/80 backdrop-blur-lg opacity-0 
                        group-hover:opacity-100 transition duration-500 
                        flex flex-col justify-center items-center text-center p-6">
            
            <h3 class="text-xl font-semibold mb-2">
                Portfolio Website
            </h3>

            <p class="text-sm mb-4">
                Personal portfolio built with Nuxt and Tailwind.
            </p>

            <div class="flex gap-4">
                <a href="#" class="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                Code
                </a>
            </div>

            </div>
        </div>

        <!-- Project Card -->
        <div class="group relative rounded-xl overflow-hidden shadow-lg">
            
            <img 
            src="/irecipe.jpg"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-[#0c0217]/80 backdrop-blur-lg opacity-0 
                        group-hover:opacity-100 transition duration-500 
                        flex flex-col justify-center items-center text-center p-6">
            
            <h3 class="text-xl font-semibold mb-2">
                Irecipe
            </h3>

            <p class="text-sm mb-4">
                Full stack recipe web built with JavaScript, PHP, and MySQL.
            </p>

            <div class="flex gap-4">
                <a href="https://github.com/zrephy08/Irecipe" class="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                Code
                </a>
            </div>

            </div>
        </div>

                <!-- Project Card -->
        <div class="group relative rounded-xl overflow-hidden shadow-lg">
            
            <img 
            src="/youtube1.jpg"
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-[#0c0217]/80 backdrop-blur-lg opacity-0 
                        group-hover:opacity-100 transition duration-500 
                        flex flex-col justify-center items-center text-center p-6">
            
            <h3 class="text-xl font-semibold mb-2">
                Zrephy
            </h3>

            <p class="text-sm mb-4">
                Youtube channel where I record videos about games.
            </p>

            <div class="flex gap-4">
                <a href="https://www.youtube.com/@Zrephy068" class="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                Link
                </a>
            </div>

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