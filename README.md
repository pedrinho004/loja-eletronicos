# Loja de Eletrônicos - E-commerce Template

Template de e-commerce desenvolvido com Next.js, Tailwind CSS e shadcn/ui, baseado no design da Bento Madeiras.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com SSR
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones
- **Bun** - Runtime e package manager

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   ├── Header.tsx           # Cabeçalho da loja
│   ├── Footer.tsx           # Rodapé
│   ├── HeroBanner.tsx       # Banner principal
│   ├── MainCategories.tsx   # Categorias principais
│   ├── CategorySection.tsx  # Seção de categoria
│   └── ChatWidget.tsx       # Widget de chat
└── lib/
    └── utils.ts             # Utilitários
```

## 🎨 Personalização

### Cores do Tema
As cores estão definidas em `tailwind.config.ts`:

```typescript
// Cores específicas (personalize para sua loja)
'bento-orange': '#e65b10',    // Cor principal
'bento-dark': '#2e2032',      // Cor escura
'bento-light': '#f9f9f8',     // Cor clara
'bento-brown': '#d3935b',     // Cor secundária
'bento-gray': '#898e8f',      // Cor neutra
```

### Produtos
Edite os arrays de produtos em `src/app/page.tsx` para adicionar seus próprios produtos.

### Categorias
Personalize as categorias em:
- `src/components/Header.tsx` (menu de navegação)
- `src/components/MainCategories.tsx` (categorias principais)

## 🛠️ Comandos

```bash
# Desenvolvimento
bun dev

# Build para produção
bun run build

# Iniciar produção
bun start

# Linting e formatação
bun run lint
bun run format
```

## 📱 Recursos

- ✅ Design responsivo
- ✅ Componentes de produto com hover effects
- ✅ Menu mobile com categorias
- ✅ Chat widget interativo
- ✅ Seções de categoria personalizáveis
- ✅ Tipografia otimizada
- ✅ Performance otimizada

## 🎯 Próximos Passos para Personalização

1. **Trocar imagens**: Substitua as URLs das imagens por produtos de eletrônicos
2. **Atualizar textos**: Modifique títulos, descrições e categorias
3. **Personalizar cores**: Ajuste o esquema de cores no Tailwind
4. **Adicionar funcionalidades**: Carrinho, autenticação, pagamento
5. **SEO**: Atualizar meta tags em `layout.tsx`

## 🌐 Deploy

O projeto está pronto para deploy em:
- Vercel (recomendado para Next.js)
- Netlify
- Railway
- Qualquer provedor que suporte Node.js

---

**Desenvolvido com ❤️ para criar lojas incríveis!**