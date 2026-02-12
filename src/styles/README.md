# 🎨 Estrutura de Estilos - Arquitetura SASS 7-1

Este projeto usa a arquitetura **SASS 7-1**, um padrão profissional de organização de estilos usado por empresas como Airbnb, GitHub e Spotify.

## 📁 Estrutura Completa

```
styles/
├── 1️⃣ abstracts/          # Variáveis e mixins (sem output CSS)
│   ├── _variables.scss   # Cores, espaçamentos, fontes
│   └── _mixins.scss      # Funções reutilizáveis
│
├── 2️⃣ vendors/            # CSS de terceiros
│   └── _normalize.scss   # Reset CSS
│
├── 3️⃣ base/               # Estilos base
│   ├── _reset.scss       # Reset customizado
│   └── _typography.scss  # Tipografia global
│
├── 4️⃣ layout/             # Layout macro
│   ├── _header.scss      # Cabeçalho
│   ├── _footer.scss      # Rodapé
│   ├── _sections.scss    # Seções
│   └── _grid.scss        # Sistema de grid
│
├── 5️⃣ components/         # Componentes reutilizáveis
│   ├── _buttons.scss     # Botões
│   └── _cards.scss       # Cards
│
├── 6️⃣ pages/              # Estilos específicos de páginas
│   ├── _home.scss        # Página inicial
│   ├── _dashboard.scss   # Dashboard
│   ├── _serie.scss       # Página da série
│   └── _game-detail.scss # Detalhes do jogo
│
├── 7️⃣ themes/             # Temas
│   └── _dark.scss        # Tema escuro (padrão)
│
└── main.scss             # Arquivo principal (importa tudo)
```

## 🎯 O que é o Padrão 7-1?

- **7 pastas** para organizar estilos por tipo e responsabilidade
- **1 arquivo** (`main.scss`) que importa tudo na ordem correta
- **Escalável** - fácil de adicionar novos arquivos
- **Manutenível** - cada arquivo tem uma responsabilidade clara

## 📝 Regras de Uso

### ✅ FAÇA:
```scss
// Importe apenas o main.scss
@import 'styles/main.scss';

// Use variáveis
color: $color-primary;

// Use mixins
@include respond-to('md') {
  font-size: $font-size-xl;
}
```

### ❌ NÃO FAÇA:
```scss
// Nunca importe arquivos individuais
@import 'styles/components/_buttons.scss'; // ❌

// Nunca use valores hardcoded
color: #FDB813; // ❌ Use $color-primary

// Nunca duplique media queries
@media (min-width: 768px) { } // ❌ Use @include respond-to('md')
```

## 🔧 Variáveis Disponíveis

### Cores
```scss
$color-primary: #FDB813;      // Amarelo Fallout
$color-secondary: #22c55e;    // Verde Pip-Boy
$color-danger: #ef4444;       // Vermelho
$color-gray-900: #111827;     // Cinza escuro
```

### Espaçamentos
```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-2xl: 3rem;     // 48px
$spacing-3xl: 4rem;     // 64px
```

### Breakpoints
```scss
$breakpoint-sm: 640px;   // Tablet
$breakpoint-md: 768px;   // Tablet landscape
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Desktop large
```

## 🎨 Mixins Disponíveis

### Responsividade
```scss
@include respond-to('sm') { }  // min-width: 640px
@include respond-to('md') { }  // min-width: 768px
@include respond-to('lg') { }  // min-width: 1024px
@include respond-to('xl') { }  // min-width: 1280px
```

### Efeitos Fallout
```scss
@include glow($color-primary, 0.8);  // Brilho amarelo
@include terminal-border();          // Borda estilo terminal
@include crt-effect();               // Efeito de tela CRT
```

### Utilitários
```scss
@include flex-center;              // Centralizar com flexbox
@include center-absolute;          // Centralizar absoluto
@include smooth-transition(color); // Transição suave
@include truncate;                 // Truncar texto
```

## 📦 Como Adicionar Novos Estilos

### 1. Novo Componente
```scss
// Criar: src/styles/components/_novo-componente.scss
.novo-componente {
  padding: $spacing-md;
  color: $color-primary;
}

// Adicionar em main.scss:
@import 'components/novo-componente';
```

### 2. Nova Página
```scss
// Criar: src/styles/pages/_nova-pagina.scss
.nova-pagina {
  padding: $spacing-xl 0;
}

// Adicionar em main.scss:
@import 'pages/nova-pagina';
```

### 3. Nova Variável
```scss
// Adicionar em: src/styles/abstracts/_variables.scss
$color-custom: #123456;
```

## 🎓 Ordem de Importação

A ordem no `main.scss` é **crucial**:

1. **Abstracts** - Variáveis e mixins (sem output CSS)
2. **Vendors** - CSS de terceiros
3. **Base** - Reset e tipografia
4. **Layout** - Estrutura macro
5. **Components** - Componentes reutilizáveis
6. **Pages** - Estilos de páginas específicas
7. **Themes** - Temas e variações

## 🚀 Benefícios

✅ **Organização** - Cada arquivo tem uma responsabilidade clara  
✅ **Escalabilidade** - Fácil adicionar novos estilos  
✅ **Manutenibilidade** - Fácil encontrar e modificar estilos  
✅ **Reutilização** - Variáveis e mixins evitam duplicação  
✅ **Performance** - Um único arquivo CSS compilado  
✅ **Profissionalismo** - Padrão usado pela indústria  

## 📚 Referências

- [SASS Guidelines](https://sass-guidelin.es/#architecture)
- [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
- [Airbnb CSS/SASS Styleguide](https://github.com/airbnb/css)
