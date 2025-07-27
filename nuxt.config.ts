import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    [
      "@nuxt/ui",
      {
        // Configurações do Nuxt UI
        global: true,
        icons: ["heroicons", "simple-icons"],
      },
    ],
  ],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],

  // Configurações de SEO
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Curso de Social Media do Zero - Transforme sua Presença Digital",
      meta: [
        {
          name: "description",
          content:
            "Aprenda social media do zero com estratégias comprovadas. Curso completo com suporte, certificado e garantia de 7 dias.",
        },
        {
          name: "keywords",
          content:
            "curso social media, instagram, marketing digital, redes sociais, influenciador digital",
        },
        { property: "og:title", content: "Curso de Social Media do Zero" },
        {
          property: "og:description",
          content:
            "Transforme sua presença digital com estratégias comprovadas",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/professora2.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "theme-color", content: "#667eea" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
    },
  },

  // Configurações de performance
  nitro: {
    compressPublicAssets: true,
  },

  // Configurações de compatibilidade
  compatibilityDate: "2025-07-26",
});
