<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
// Configurações globais da aplicação
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#667eea' }
  ]
})

// Adicionar funcionalidade de scroll suave ao montar
onMounted(() => {
  // Interceptar cliques em links internos para scroll suave
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (target) {
      e.preventDefault()
      const id = target.getAttribute('href').substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  })
})
</script>

