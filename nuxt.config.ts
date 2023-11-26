// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
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
      background_color: '#fff',
      theme_color: "#1b6dff",
      icons: [
        {
          src: "icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "icon-512x512.png",
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