<template>
  <section id="sobre" class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Conheça sua <span class="text-purple-600">professora</span>
            </h2>
            <h3 class="text-2xl font-semibold text-purple-600 mb-4">Marina Silva</h3>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Especialista em Social Media com mais de 5 anos de experiência, já ajudei centenas de pessoas e empresas a transformarem sua presença digital em resultados reais.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700">+500 alunos formados com sucesso</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700">Especialista certificada em Marketing Digital</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700">Consultora de grandes marcas nacionais</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-gray-700">Palestrante em eventos de marketing</span>
              </div>
            </div>

            <blockquote class="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p class="text-gray-700 italic mb-4">
                "Minha missão é democratizar o conhecimento em social media e mostrar que qualquer pessoa pode ter sucesso nas redes sociais com as estratégias certas."
              </p>
              <footer class="font-semibold text-purple-600">— Marina Silva</footer>
            </blockquote>
          </div>
          
          <div class="order-1 lg:order-2 text-center">
            <div class="relative inline-block">
              <img 
                src="/professora2.jpg" 
                alt="Marina Silva - Professora de Social Media" 
                class="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg">
                ⭐ 4.9/5.0
              </div>
            </div>
            
            <div class="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">500+</div>
                <div class="text-sm text-gray-600">Alunos</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">5+</div>
                <div class="text-sm text-gray-600">Anos</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">98%</div>
                <div class="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

