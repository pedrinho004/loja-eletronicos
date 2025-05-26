# 🛒 Loja de Eletrônicos - E-commerce Template

Um template moderno e responsivo de e-commerce desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, especializado em eletrônicos, acessórios de celular e controles de jogos.

## 🌟 Características

- ⚡ **Next.js 14** com App Router
- 🔷 **TypeScript** para tipagem estática
- 🎨 **Tailwind CSS** para estilização
- 📱 **Design Responsivo** para mobile e desktop
- 🎯 **shadcn/ui** componentes modernos
- 🛍️ **Interface otimizada** para vendas de eletrônicos
- 💬 **Chat widget** integrado
- 🔍 **Sistema de busca** e filtros
- 🛒 **Carrinho de compras** funcional

## 🛍️ Produtos Suportados

Este template foi projetado especificamente para lojas que vendem:

- 📱 **Acessórios de Celular**
  - Capas e cases
  - Carregadores e cabos
  - Películas e vidros temperados
  - Fones de ouvido
  - Suportes e bases

- 🎮 **Controles de Jogos**
  - Controles para console
  - Controles para celular
  - Acessórios para gaming
  - Joysticks e gamepads

- 💻 **Eletrônicos em Geral**
  - Gadgets tecnológicos
  - Dispositivos móveis
  - Acessórios para computador
  - Produtos eletrônicos diversos

## 🚀 Tecnologias Utilizadas

- **Frontend:** Next.js 14, React 18, TypeScript
- **Estilização:** Tailwind CSS, shadcn/ui
- **Gerenciador:** Bun
- **Linting:** Biome
- **Ícones:** Lucide React

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/pedrinho004/loja-eletronicos.git
cd loja-eletronicos
```

2. **Instale as dependências:**
```bash
bun install
```

3. **Execute o projeto em desenvolvimento:**
```bash
bun dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 🎨 Personalização

### Cores e Tema
As cores principais podem ser customizadas no arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: '#ff6600', // Laranja principal
  secondary: '#333333', // Cinza escuro
  // Adicione suas cores aqui
}
```

### Produtos
Edite os dados dos produtos nos componentes em `src/components/` para incluir seus próprios produtos.

### Logo e Branding
- Substitua o logo no componente `Header.tsx`
- Atualize as informações da empresa no `Footer.tsx`
- Personalize as cores e estilos conforme sua marca

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Componentes shadcn/ui
│   ├── Header.tsx    # Cabeçalho e navegação
│   ├── Footer.tsx    # Rodapé
│   ├── HeroBanner.tsx # Banner principal
│   ├── MainCategories.tsx # Categorias principais
│   ├── CategorySection.tsx # Seções de produtos
│   └── ChatWidget.tsx # Widget de chat
└── lib/
    └── utils.ts      # Utilitários
```

## 🔧 Funcionalidades

- [x] **Header responsivo** com menu mobile
- [x] **Banner promocional** customizável
- [x] **Categorias de produtos** organizadas
- [x] **Grid de produtos** responsivo
- [x] **Carrinho de compras** visual
- [x] **Chat widget** flutuante
- [x] **Footer completo** com links úteis
- [x] **Design mobile-first**
- [ ] Sistema de autenticação
- [ ] Integração com gateway de pagamento
- [ ] Sistema de reviews
- [ ] Painel administrativo

## 🎯 Ideal Para

Este template é perfeito para:

- **Lojistas** que querem vender online
- **Empreendedores** do ramo de tecnologia
- **Desenvolvedores** que precisam de um e-commerce rápido
- **Empresas** que querem modernizar sua presença online

## 📱 Responsividade

O design foi desenvolvido com abordagem **mobile-first**, garantindo uma experiência excelente em:

- 📱 Smartphones (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a documentação acima
2. Procure por issues similares
3. Abra uma nova issue se necessário

---

**Desenvolvido com ❤️ para facilitar a criação de lojas online de eletrônicos**

*Template baseado em design moderno e práticas atuais de desenvolvimento web*