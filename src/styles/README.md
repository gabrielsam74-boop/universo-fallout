# 📁 Arquitetura SASS - Padrão 7-1

Esta estrutura segue o padrão **7-1** da indústria, usado por empresas como Airbnb, GitHub e Spotify.

## 📂 Estrutura de Pastas

```
styles/
│
├── abstracts/          # Variáveis, mixins, funções
│   ├── _variables.scss # Cores, espaçamentos, breakpoints
│   └── _mixins.scss    # Mixins reutilizáveis
│
├── base/               # Estilos base
│   ├── _reset.scss     # Reset CSS
│   └── _typography.scss # Tipografia global
│
├── components/         # Componentes reutilizáveis
│   ├── _buttons.scss   # Estilos de botões
│   └── _cards.scss     # Estilos de cards
│
├── layout/             # Layout macro
│   ├── _header.scss    # Header/Navegação
│   └── _sections.scss  # Seções e Hero
│
├── pages/              # Estilos específicos de páginas
│   └── (vazio por enquanto)
│
├── themes/             # Temas alternativos
│   └── (vazio por enquanto)
│
├── vendors/            # CSS de terceiros
│   └── (vazio por enquanto)
│
└── main.scss           # Arquivo principal que importa tudo
```

## 🎯 Por que isso é Profissional?

### 1. **Manutenibilidade**
- Cada arquivo tem uma responsabilidade única
- Fácil encontrar e modificar estilos
- Trabalho em equipe sem conflitos

### 2. **Escalabilidade**
- Adicionar novos componentes é simples
- Variáveis centralizadas facilitam mudanças globais
- Mixins evitam repetição de código

### 3. **Performance**
- SASS compila tudo em um único CSS otimizado
- Variáveis permitem tree-shaking
- Código mais limpo = arquivo menor

## 🚀 Como Usar

### Importar no seu componente:
```tsx
import '@/styles/main.scss'
```

### Usar classes:
```tsx
<button className="btn btn-primary">
  Clique aqui
</button>

<div className="card card-crt">
  <div className="card-header">
    <h3>Título</h3>
  </div>
  <div className="card-body">
    Conteúdo
  </div>
</div>
```

### Usar variáveis em componentes:
```scss
.meu-componente {
  color: $color-primary;
  padding: $spacing-lg;
  @include terminal-border;
}
```

## 📝 Convenções

- **Variáveis**: `$color-primary`, `$spacing-md`
- **Mixins**: `@include respond-to('md')`
- **Classes**: `.btn`, `.card`, `.hero`
- **BEM**: `.card__header`, `.card--large`

## 🎨 Variáveis Principais

```scss
// Cores
$color-primary: #FDB813;
$color-secondary: #22c55e;
$color-dark: #000000;

// Espaçamentos
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
```

## 🔧 Mixins Úteis

```scss
// Responsividade
@include respond-to('md') {
  font-size: 2rem;
}

// Efeito CRT
@include crt-effect;

// Brilho
@include glow($color-primary, 0.6);

// Borda terminal
@include terminal-border;
```

---

**Nota**: Este é um padrão profissional usado em empresas reais. Mostra que você sabe trabalhar em equipe e escrever código escalável.
