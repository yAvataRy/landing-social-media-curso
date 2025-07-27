<template>
  <section class="hero-gradient min-h-screen flex items-center justify-center text-white">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Domine o <span class="text-yellow-300">Social Media</span> do Zero
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Aprenda as estratégias que realmente funcionam para crescer nas redes sociais e transformar sua presença digital em resultados reais
        </p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <UButton 
            size="xl" 
            color="yellow" 
            variant="solid" 
            class="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            @click="scrollToSection('preco')"
          >
            🚀 Quero Me Inscrever Agora
          </UButton>
          <UButton 
            size="xl" 
            color="white" 
            variant="outline" 
            class="px-8 py-4 text-lg font-semibold border-2 hover:bg-white hover:text-purple-600 transition-all duration-300"
            @click="scrollToSection('sobre')"
          >
            📖 Conhecer o Curso
          </UButton>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="flex flex-col items-center">
            <div class="text-3xl mb-2">⏰</div>
            <p class="font-semibold">Aulas Práticas</p>
            <p class="text-sm opacity-80">Conteúdo direto ao ponto</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl mb-2">🎯</div>
            <p class="font-semibold">Resultados Reais</p>
            <p class="text-sm opacity-80">Estratégias comprovadas</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-3xl mb-2">👩‍🏫</div>
            <p class="font-semibold">Suporte Especializado</p>
            <p class="text-sm opacity-80">Tire suas dúvidas</p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <UButton 
        variant="ghost" 
        color="white" 
        @click="scrollToSection('beneficios')"
        class="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        <UIcon name="i-heroicons-chevron-down" class="w-6 h-6" />
      </UButton>
    </div>
  </section>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

