<template>
  <VitePwaManifest />
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'English Roadmap',
  ogTitle: 'English Roadmap',
  description: 'Hojas de ruta ordenadas, guias y contenido educaional que ayuden a orientar a las personas a la hora de elegir un camino y guiar su aprendizaje del idioma inglés.',
  ogDescription: 'Hojas de ruta ordenadas, guias y contenido educaional que ayuden a orientar a las personas a la hora de elegir un camino y guiar su aprendizaje del idioma inglés.',
  ogImage: 'https://englishroadmap.vercel.app/english-roadmap-meta.png',
  twitterCard: 'summary_large_image',
})
</script>
