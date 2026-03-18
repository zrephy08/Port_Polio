<!-- <template>
    <section id="skills" class="py-24 bg-gradient-to-b from-[#220640] to-[#2e0f73] flex justify-center">
        <div class="max-w-6xl w-full px-6 text-white">

        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 glowing-text">
            MY SKILLS
        </h2>

        <div class="flex md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-3 md:text-xl md:px-[10px]
            sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-3 sm:text-lg
            lg:flex-row lg:flex-wrap lg:justify-center lg:items-start gap-6 lg:text-3xl lg:px-[30px] font-semibold text-white">
            
            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                sm:w-[170px] sm:h-[170px]
                lg:w-[300px] lg:h-[300px]
                md:w-[220px] md:h-[220px] p-6">
                <div class="absolute inset-0 bg-[url('test-html.jpeg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">HTML</span>
            </div>

            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                sm:w-[170px] sm:h-[170px]
                lg:w-[300px] lg:h-[300px]
                md:w-[220px] md:h-[220px] p-6">
                <div class="absolute inset-0 bg-[url('test-css.jpeg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">CSS</span>
            </div>
            
            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                sm:w-[170px] sm:h-[170px]
                lg:w-[300px] lg:h-[300px]
                md:w-[220px] md:h-[220px] p-6">
                <div class="absolute inset-0 bg-[url('test-javas.jpg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">JAVASCRIPT</span>
            </div>

            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                sm:w-[170px] sm:h-[170px]
                lg:w-[300px] lg:h-[300px]
                md:w-[220px] md:h-[220px] p-6">
                <div class="absolute inset-0 bg-[url('test-php.jpeg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">PHP</span>
            </div>

            <div class="relative flex items-center justify-center bg-[#7c16e9] 
                rounded-lg shadow text-center hover:scale-105 transition-transform
                sm:w-[170px] sm:h-[170px]
                lg:w-[300px] lg:h-[300px]
                md:w-[220px] md:h-[220px] p-6">
                <div class="absolute inset-0 bg-[url('test-videdi.jpg')] bg-cover bg-center opacity-0 hover:opacity-40 transition-opacity rounded-lg"></div>
                <span class="z-10 font-bold text-white">VIDEO EDITTING</span>
            </div>

        </div>

        </div>
    </section>
</template> -->

<template>
    <section id="skills" class="py-24 bg-gradient-to-b from-[#220640] to-[#2e0f73] flex justify-center">
        <div class="max-w-6xl w-full px-6 text-white">

        <!-- Title -->
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 glowing-text">
            MY SKILLS
        </h2>

        <!-- Skills Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

            <div class="relative group w-full h-40 bg-[#7c16e9] rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="/test-html.jpeg" alt="HTML" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div class="absolute inset-0 bg-[#0c0217]/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <span class="z-10 text-lg font-semibold transition-all duration-300 group-hover:text-white">
                    HTML
                </span>
            </div>

            <div class="relative group w-full h-40 bg-[#7c16e9] rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="/test-css.jpeg" alt="CSS" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div class="absolute inset-0 bg-[#0c0217]/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <span class="z-10 text-lg font-semibold transition-all duration-300 group-hover:text-white">
                    CSS
                </span>
            </div>

            <div class="relative group w-full h-40 bg-[#7c16e9] rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="/test-javas.jpg" alt="CSS" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div class="absolute inset-0 bg-[#0c0217]/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <span class="z-10 text-lg font-semibold transition-all duration-300 group-hover:text-white">
                    JAVASCRIPT
                </span>
            </div>

            <div class="relative group w-full h-40 bg-[#7c16e9] rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="/test-php.jpeg" alt="CSS" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div class="absolute inset-0 bg-[#0c0217]/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <span class="z-10 text-lg font-semibold transition-all duration-300 group-hover:text-white">
                    PHP
                </span>
            </div>

            <div class="relative group w-full h-40 bg-[#7c16e9] rounded-2xl overflow-hidden flex items-center justify-center">
                <img src="/test-videdi.jpg" alt="CSS" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div class="absolute inset-0 bg-[#0c0217]/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <span class="z-10 text-lg font-semibold transition-all duration-300 group-hover:text-white">
                    VIDEO EDITING
                </span>
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