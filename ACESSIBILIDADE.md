# ♿ Guia de Acessibilidade - Universo Fallout

## 🎯 Por que Acessibilidade Importa?

- **15% da população mundial** tem alguma deficiência
- **Leitores de tela** precisam de HTML semântico
- **Empresas exigem** conformidade com WCAG 2.1
- **SEO melhora** com HTML semântico

---

## 📋 Checklist de Acessibilidade

### ✅ HTML Semântico

#### ❌ ERRADO (Iniciante):
```html
<div class="header">
  <div class="logo">Fallout</div>
  <div class="menu">
    <div>Home</div>
    <div>Jogos</div>
  </div>
</div>
```

#### ✅ CORRETO (Profissional):
```html
<header role="banner">
  <h1 class="logo">Universo Fallout</h1>
  <nav role="navigation" aria-label="Menu principal">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/jogos">Jogos</a></li>
    </ul>
  </nav>
</header>
```

---

### ✅ Atributos ARIA

#### Botões e Links:
```html
<!-- Botão com ícone -->
<button aria-label="Abrir menu de navegação">
  <svg>...</svg>
</button>

<!-- Link externo -->
<a href="https://bethesda.net" 
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Visitar site da Bethesda (abre em nova aba)">
  Bethesda
</a>
```

#### Imagens:
```html
<!-- Imagem decorativa -->
<img src="/vault-boy.png" alt="" role="presentation" />

<!-- Imagem informativa -->
<img src="/fallout-4.jpg" 
     alt="Capa do jogo Fallout 4 mostrando o Vault Boy com Power Armor" />
```

#### Modais e Diálogos:
```html
<div role="dialog" 
     aria-labelledby="modal-title"
     aria-describedby="modal-desc"
     aria-modal="true">
  <h2 id="modal-title">Detalhes do Vault 111</h2>
  <p id="modal-desc">Informações sobre o experimento de criogenia</p>
  <button aria-label="Fechar modal">×</button>
</div>
```

---

### ✅ Navegação por Teclado

#### Focus Visível:
```scss
button:focus-visible,
a:focus-visible {
  outline: 2px solid $color-primary;
  outline-offset: 2px;
}
```

#### Skip Links:
```html
<a href="#main-content" class="skip-link">
  Pular para conteúdo principal
</a>

<main id="main-content">
  <!-- Conteúdo -->
</main>
```

```scss
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: $color-primary;
  color: $color-dark;
  padding: 8px;
  z-index: 100;
  
  &:focus {
    top: 0;
  }
}
```

---

### ✅ Contraste de Cores

#### Mínimo WCAG AA:
- **Texto normal**: 4.5:1
- **Texto grande**: 3:1
- **Elementos interativos**: 3:1

#### Teste suas cores:
```
Amarelo (#FDB813) em Preto (#000000) = 10.8:1 ✅
Verde (#22c55e) em Preto (#000000) = 6.2:1 ✅
Cinza (#9ca3af) em Preto (#000000) = 5.1:1 ✅
```

---

### ✅ Formulários Acessíveis

```html
<form>
  <label for="email">
    E-mail
    <span aria-label="obrigatório">*</span>
  </label>
  <input 
    type="email" 
    id="email"
    name="email"
    required
    aria-required="true"
    aria-describedby="email-error"
  />
  <span id="email-error" role="alert" aria-live="polite">
    <!-- Mensagem de erro aparece aqui -->
  </span>
</form>
```

---

### ✅ Conteúdo Dinâmico

#### Live Regions:
```html
<!-- Notificações -->
<div role="status" aria-live="polite" aria-atomic="true">
  Jogo adicionado aos favoritos
</div>

<!-- Alertas urgentes -->
<div role="alert" aria-live="assertive">
  Erro ao carregar dados
</div>

<!-- Carregamento -->
<div role="status" aria-live="polite">
  <span aria-label="Carregando conteúdo">
    <svg>...</svg>
  </span>
</div>
```

---

### ✅ Tabelas Acessíveis

```html
<table>
  <caption>Estatísticas dos Jogos Fallout</caption>
  <thead>
    <tr>
      <th scope="col">Jogo</th>
      <th scope="col">Ano</th>
      <th scope="col">Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Fallout 3</th>
      <td>2008</td>
      <td>91</td>
    </tr>
  </tbody>
</table>
```

---

## 🧪 Como Testar

### 1. Navegação por Teclado
- Use apenas `Tab`, `Shift+Tab`, `Enter`, `Esc`
- Todos os elementos interativos devem ser acessíveis
- Focus deve ser visível

### 2. Leitor de Tela
- **Windows**: NVDA (gratuito)
- **Mac**: VoiceOver (nativo)
- **Chrome**: ChromeVox (extensão)

### 3. Ferramentas Automáticas
```bash
# Lighthouse (Chrome DevTools)
npm run lighthouse

# axe DevTools (extensão)
# Instalar: https://www.deque.com/axe/devtools/
```

### 4. Checklist Manual
- [ ] Todas as imagens têm `alt` apropriado
- [ ] Formulários têm `label` associados
- [ ] Botões têm texto ou `aria-label`
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funciona
- [ ] Leitor de tela lê conteúdo corretamente
- [ ] Sem `div` ou `span` clicáveis (use `button`)
- [ ] Links externos têm `rel="noopener"`

---

## 📚 Recursos

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

---

## 🎓 Exemplo Completo

```tsx
// Componente acessível
export default function GameCard({ game }) {
  return (
    <article 
      className="game-card"
      aria-labelledby={`game-${game.id}-title`}
    >
      <img 
        src={game.image} 
        alt={`Capa do jogo ${game.title}`}
        loading="lazy"
      />
      
      <div className="game-card__content">
        <h3 id={`game-${game.id}-title`}>
          {game.title}
        </h3>
        
        <p>{game.shortDesc}</p>
        
        <div className="game-card__meta">
          <span aria-label={`Lançado em ${game.year}`}>
            📅 {game.year}
          </span>
          <span aria-label={`Nota ${game.rating} de 100`}>
            ⭐ {game.rating}/100
          </span>
        </div>
        
        <a 
          href={`/game/${game.id}`}
          aria-label={`Ver detalhes de ${game.title}`}
        >
          Ver mais
        </a>
      </div>
    </article>
  );
}
```

---

**Lembre-se**: Acessibilidade não é opcional. É um requisito profissional e legal em muitos países.
