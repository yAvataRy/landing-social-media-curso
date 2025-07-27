<template>
  <section id="preco" class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Transforme sua vida digital <span class="text-purple-600">hoje mesmo</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Invista no seu futuro digital com condições especiais por tempo limitado
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
            🔥 OFERTA LIMITADA
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-3xl md:text-4xl font-bold mb-6">
                Curso Social Media do Zero
              </h3>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center space-x-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-300" />
                  <span>6 módulos completos em vídeo</span>
                </div>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-300" />
                  <span>Material de apoio em PDF</span>
                </div>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-300" />
                  <span>Templates prontos para usar</span>
                </div>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-300" />
                  <span>Grupo VIP no WhatsApp</span>
                </div>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-300" />
                  <span>Certificado de conclusão</span>
                </div>
                <div class="flex items-center space-x-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-yellow-300" />
                  <span>Acesso vitalício ao conteúdo</span>
                </div>
              </div>

              <div class="bg-white/20 rounded-xl p-6 mb-8">
                <h4 class="text-xl font-bold mb-4 text-yellow-300">🎁 BÔNUS EXCLUSIVOS:</h4>
                <ul class="space-y-2 text-sm">
                  <li>• E-book: "50 Ideias de Conteúdo"</li>
                  <li>• Planilha de Planejamento Editorial</li>
                  <li>• Aula bônus: "Como criar Reels virais"</li>
                  <li>• 30 dias de mentoria no grupo VIP</li>
                </ul>
              </div>
            </div>

            <div class="text-center">
              <div class="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div class="mb-6">
                  <div class="text-lg opacity-75 line-through">De R$ 497,00</div>
                  <div class="text-5xl font-bold text-yellow-300 mb-2">R$ 197</div>
                  <div class="text-lg">ou 12x de R$ 19,70</div>
                </div>

                <UButton 
                  size="xl" 
                  color="yellow" 
                  variant="solid" 
                  class="w-full py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mb-4"
                  @click="redirectToCheckout"
                >
                  🚀 GARANTIR MINHA VAGA AGORA
                </UButton>

                <div class="text-sm opacity-90 mb-4">
                  💳 Cartão, PIX ou Boleto
                </div>

                <div class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  ✅ 7 DIAS DE GARANTIA
                </div>

                <p class="text-xs opacity-75">
                  Não gostou? Devolvemos 100% do seu dinheiro
                </p>
              </div>

              <div class="mt-6 text-center">
                <div class="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                  <span>Oferta válida por tempo limitado!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <h4 class="text-2xl font-bold text-gray-800 mb-8">Ainda tem dúvidas?</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">🛡️</div>
              <h5 class="font-bold text-gray-800 mb-2">Garantia Total</h5>
              <p class="text-gray-600 text-sm">7 dias para testar sem risco</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">📱</div>
              <h5 class="font-bold text-gray-800 mb-2">Suporte Completo</h5>
              <p class="text-gray-600 text-sm">Tire suas dúvidas no grupo VIP</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🎯</div>
              <h5 class="font-bold text-gray-800 mb-2">Resultados Reais</h5>
              <p class="text-gray-600 text-sm">Método testado e aprovado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const redirectToCheckout = () => {
  // Aqui você pode integrar com Hotmart, Monetizze ou outro gateway
  window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no Curso de Social Media do Zero', '_blank')
}
</script>

