<template>
  <header class="sticky top-0 z-50 bg-[#220640]">
    <nav class="flex justify-center items-center gap-5 h-16 px-[200px] text-white">
      <div class="flex gap-9">
        <a href="#home" @click.prevent="scrollTo('home')"
           :class="{ 'glow-text': activeSection === 'home' }">Home</a>
        <a href="#about" @click.prevent="scrollTo('about')"
           :class="{ 'glow-text': activeSection === 'about' }">About</a>
        <a href="#skills" @click.prevent="scrollTo('skills')"
           :class="{ 'glow-text': activeSection === 'skills' }">Skills</a>
        <a href="#projects" @click.prevent="scrollTo('projects')"
           :class="{ 'glow-text': activeSection === 'projects' }">Projects</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')

// Handle scroll to highlight links dynamically
const sections = ['home', 'about', 'skills', 'projects']

const handleScroll = () => {
  const scrollY = window.scrollY + 100 // offset for navbar
  let found = 'home'

  for (const sec of sections) {
    const el = document.getElementById(sec)
    if (el && scrollY >= el.offsetTop) {
      found = sec
    }
  }

  activeSection.value = found
}

// Smooth scroll function
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80, // offset for sticky navbar
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onMounted(() => {
  // Remove hash if page loads with it
  if (window.location.hash) {
    history.replaceState(null, '', ' ')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
  /* Static glow for active nav link */
  .glow-text {
    text-shadow: 0 0 12px #a35cf0, 0 0 16px #a35cf0;
    color: #ffffff;
    transition: text-shadow ease;
  }
</style>