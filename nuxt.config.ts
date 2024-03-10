// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system',
    dataValue: 'theme', 
    classSuffix: '',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'English Roadmap',
        htmlAttrs: {
            lang: 'es-VE'
        },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Hojas de ruta ordenadas, guias y contenido educaional que ayuden a orientar a las personas a la hora de elegir un camino y guiar su aprendizaje del idioma inglés.' },
        { hid: 'title', name: 'title', content: 'English Roadmap' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:locale', property: 'og:locale', content: 'es-VE' },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://englishroadmap.vercel.app/public/img/desktop-view.png'
            },
            { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
            {
                hid: 'twitter:image',
                property: 'twitter:image',
                content: 'https://englishroadmap.vercel.app/public/img/desktop-view.png'
            },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
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