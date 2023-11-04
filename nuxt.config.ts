// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt"
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pwa: {
    manifest: {
      name: "English Roadmap",
      short_name: "English Roadmap",
      display: "standalone",
      description: "Hojas de ruta ordenadas, guias y contenido educaional que ayuden a orientar a las personas a la hora de elegir un camino y guiar su aprendizaje del idioma inglés.",
      theme_color: "#fff",
      icons: [
        {
          src: "er-logo-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "er-logo-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})