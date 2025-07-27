<template>
  <div>
    <Hero />
    <Benefits />
    <About />
    <Testimonials />
    <Pricing />
    <Footer />
  </div>
</template>

<script setup>
// Configuração da página
useHead({
  title: 'Curso de Social Media do Zero - Transforme sua Presença Digital',
  meta: [
    { 
      name: 'description', 
      content: 'Aprenda social media do zero com nossa professora especialista. Estratégias comprovadas, resultados reais e suporte completo. Garante já sua vaga!' 
    },
    { name: 'keywords', content: 'curso social media, instagram, marketing digital, redes sociais, influenciador' },
    { property: 'og:title', content: 'Curso de Social Media do Zero' },
    { property: 'og:description', content: 'Transforme sua presença digital com estratégias comprovadas' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

