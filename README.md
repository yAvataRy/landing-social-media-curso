# Landing Page - Curso de Social Media do Zero

Uma landing page completa e responsiva criada com **Nuxt 3** e **Nuxt UI** para promover um curso de social media.

## 🚀 Características

- ✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Nuxt UI Components** - Interface moderna e profissional
- ✅ **SEO Otimizado** - Meta tags, Open Graph e estrutura semântica
- ✅ **Performance** - Carregamento rápido e otimizado
- ✅ **Conversão Focada** - Estrutura pensada para gerar vendas

## 📋 Seções Incluídas

### 🎯 Hero Section
- Título impactante com call-to-action
- Botões de ação principais
- Benefícios em destaque
- Animação de scroll suave

### 📚 O que você vai aprender
- 6 módulos detalhados do curso
- Cards com hover effects
- Seção "Para quem é o curso"

### 👩‍🏫 Sobre a Professora
- Apresentação da instrutora Marina Silva
- Credenciais e experiência
- Estatísticas de sucesso
- Depoimento pessoal

### 💬 Depoimentos
- 3 depoimentos de alunos reais
- Avaliações com estrelas
- Seção de resultados comprovados

### 💰 Preços e Oferta
- Cartão de preços atrativo
- Bônus exclusivos
- Garantia de 7 dias
- Botão de call-to-action integrado com WhatsApp

### 📱 Footer Completo
- Links úteis e navegação
- Informações de contato
- Redes sociais
- Botão flutuante do WhatsApp

## 🛠️ Tecnologias Utilizadas

- **Nuxt 3** - Framework Vue.js para produção
- **Nuxt UI** - Biblioteca de componentes baseada em Tailwind CSS
- **Tailwind CSS** - Framework CSS utilitário
- **Google Fonts** - Tipografia Poppins
- **Heroicons** - Ícones SVG
- **Simple Icons** - Ícones de redes sociais

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clonar o projeto
cd landing-socialmedia

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Estrutura do Projeto
```
landing-socialmedia/
├── assets/
│   └── css/
│       └── main.css          # Estilos customizados
├── components/
│   ├── Hero.vue              # Seção principal
│   ├── Benefits.vue          # Benefícios do curso
│   ├── About.vue             # Sobre a professora
│   ├── Testimonials.vue      # Depoimentos
│   ├── Pricing.vue           # Preços e oferta
│   └── Footer.vue            # Rodapé
├── layouts/
│   └── default.vue           # Layout padrão
├── pages/
│   └── index.vue             # Página principal
├── public/                   # Imagens e assets
├── nuxt.config.ts            # Configuração do Nuxt
└── package.json
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `assets/css/main.css`:
- **Primária**: `#667eea` (Azul/Roxo)
- **Secundária**: `#764ba2` (Roxo)
- **Destaque**: `#f59e0b` (Amarelo)

### Conteúdo
Para personalizar o conteúdo, edite os componentes em `components/`:
- Textos e títulos
- Informações da professora
- Depoimentos
- Preços e ofertas

### Integração WhatsApp
No arquivo `components/Pricing.vue` e `components/Footer.vue`, altere o número do WhatsApp:
```javascript
const openWhatsApp = () => {
  window.open('https://wa.me/SEU_NUMERO?text=Sua mensagem', '_blank')
}
```

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)  
- **Mobile** (320px - 767px)

## 🔧 Funcionalidades

- ✅ Scroll suave entre seções
- ✅ Botões de call-to-action funcionais
- ✅ Integração com WhatsApp
- ✅ Animações e hover effects
- ✅ Meta tags para SEO
- ✅ Open Graph para redes sociais
- ✅ Favicon personalizado

## 🚀 Deploy

### Netlify/Vercel
```bash
npm run build
```
Faça upload da pasta `dist/` ou conecte seu repositório Git.

### Servidor próprio
```bash
npm run build
npm run preview
```

## 📞 Suporte

Para dúvidas ou customizações, entre em contato:
- **WhatsApp**: (11) 99999-9999
- **Email**: contato@socialmediazero.com

---

**Desenvolvido com ❤️ usando Nuxt 3 + Nuxt UI**

