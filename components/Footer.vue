<template>
  <footer class="bg-gray-900 text-white">
    <div class="section-padding">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4">Social Media do Zero</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Transforme sua presença digital com estratégias comprovadas e resultados reais. 
              Aprenda com quem realmente entende de social media.
            </p>
            <div class="flex space-x-4">
              <UButton 
                color="white" 
                variant="ghost" 
                size="sm" 
                class="hover:bg-white hover:text-gray-900 transition-colors duration-300"
                @click="openWhatsApp"
              >
                <UIcon name="i-simple-icons-whatsapp" class="w-5 h-5" />
              </UButton>
              <UButton 
                color="white" 
                variant="ghost" 
                size="sm" 
                class="hover:bg-white hover:text-gray-900 transition-colors duration-300"
                @click="openInstagram"
              >
                <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
              </UButton>
              <UButton 
                color="white" 
                variant="ghost" 
                size="sm" 
                class="hover:bg-white hover:text-gray-900 transition-colors duration-300"
                @click="openEmail"
              >
                <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
              </UButton>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a href="#beneficios" class="hover:text-white transition-colors duration-300">
                  O que você vai aprender
                </a>
              </li>
              <li>
                <a href="#sobre" class="hover:text-white transition-colors duration-300">
                  Sobre a professora
                </a>
              </li>
              <li>
                <a href="#depoimentos" class="hover:text-white transition-colors duration-300">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#preco" class="hover:text-white transition-colors duration-300">
                  Preços
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contato</h4>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center space-x-2">
                <UIcon name="i-heroicons-phone" class="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li class="flex items-center space-x-2">
                <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
                <span>contato@socialmediazero.com</span>
              </li>
              <li class="flex items-center space-x-2">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-700 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-gray-400 text-sm">
              © 2024 Social Media do Zero. Todos os direitos reservados.
            </p>
            <div class="flex space-x-6 text-sm text-gray-400">
              <a href="#" class="hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" class="hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- WhatsApp Floating Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <UButton 
        color="green" 
        size="xl" 
        class="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        @click="openWhatsApp"
      >
        <UIcon name="i-simple-icons-whatsapp" class="w-6 h-6" />
      </UButton>
    </div>
  </footer>
</template>

<script setup>
const openWhatsApp = () => {
  window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no Curso de Social Media do Zero', '_blank')
}

const openInstagram = () => {
  window.open('https://instagram.com/marinasilva_socialmedia', '_blank')
}

const openEmail = () => {
  window.location.href = 'mailto:contato@socialmediazero.com'
}
</script>

