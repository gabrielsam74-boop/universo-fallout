# ✅ Checklist Profissional - De Júnior para Sênior

Use este checklist para transformar qualquer projeto em nível profissional.

---

## 📁 1. Organização de Código

### SASS/CSS
- [x] Criar estrutura 7-1
- [x] Separar variáveis (`_variables.scss`)
- [x] Criar mixins reutilizáveis (`_mixins.scss`)
- [x] Separar componentes (`_buttons.scss`, `_cards.scss`)
- [x] Documentar padrões no README
- [x] Remover código duplicado (DRY)
- [x] Usar variáveis para cores/espaçamentos
- [x] Implementar breakpoints responsivos

### JavaScript/TypeScript
- [ ] Separar lógica de apresentação
- [ ] Criar hooks customizados
- [ ] Criar camada de serviços (API)
- [ ] Usar TypeScript para type safety
- [ ] Documentar funções complexas
- [ ] Evitar código duplicado

### Estrutura de Pastas
```
src/
├── components/     # Componentes reutilizáveis
├── contexts/       # Context API
├── hooks/          # Custom hooks
├── lib/            # Utilitários
├── pages/          # Páginas
├── services/       # Camada de API
├── styles/         # SASS 7-1
└── types/          # TypeScript types
```

---

## ♿ 2. Acessibilidade (WCAG 2.1 AA)

### HTML Semântico
- [ ] Usar `<header>` para cabeçalho
- [ ] Usar `<nav>` para navegação
- [ ] Usar `<main>` para conteúdo principal
- [ ] Usar `<article>` para conteúdo independente
- [ ] Usar `<section>` para seções
- [ ] Usar `<aside>` para conteúdo relacionado
- [ ] Usar `<footer>` para rodapé
- [ ] Evitar `<div>` e `<span>` genéricos

### Atributos ARIA
- [ ] `aria-label` em botões sem texto
- [ ] `aria-labelledby` para associar labels
- [ ] `aria-describedby` para descrições
- [ ] `aria-live` para conteúdo dinâmico
- [ ] `role` apropriado (banner, navigation, main)
- [ ] `aria-hidden` para elementos decorativos
- [ ] `aria-expanded` para menus expansíveis
- [ ] `aria-current` para página atual

### Navegação por Teclado
- [ ] Todos os elementos interativos acessíveis via Tab
- [ ] Focus visível (outline)
- [ ] Skip links para conteúdo principal
- [ ] Escape fecha modais
- [ ] Enter ativa botões/links
- [ ] Setas navegam em listas

### Imagens
- [ ] `alt` descritivo em imagens informativas
- [ ] `alt=""` em imagens decorativas
- [ ] `role="presentation"` em ícones decorativos
- [ ] Texto alternativo para gráficos

### Formulários
- [ ] `<label>` associado a cada input
- [ ] `aria-required` em campos obrigatórios
- [ ] `aria-invalid` em campos com erro
- [ ] Mensagens de erro com `role="alert"`
- [ ] Placeholder não substitui label

### Contraste
- [ ] Texto normal: mínimo 4.5:1
- [ ] Texto grande: mínimo 3:1
- [ ] Elementos interativos: mínimo 3:1
- [ ] Testar com ferramenta de contraste

### Testes
- [ ] Navegar apenas com teclado
- [ ] Testar com leitor de tela (NVDA/VoiceOver)
- [ ] Usar Lighthouse (Chrome DevTools)
- [ ] Usar axe DevTools (extensão)
- [ ] Validar HTML (W3C Validator)

---

## 🔌 3. Dados e APIs

### Separação de Dados
- [x] Mover dados para arquivos JSON
- [x] Criar camada de serviços (API layer)
- [x] Criar hooks customizados para data fetching
- [x] Implementar estados de loading
- [x] Implementar tratamento de erros
- [x] Adicionar cache (SWR ou React Query)

### Estrutura de Serviços
```typescript
// services/api.ts
export const api = {
  games: {
    getAll: () => fetch('/api/games').then(r => r.json()),
    getById: (id) => fetch(`/api/games/${id}`).then(r => r.json()),
  },
};

// hooks/useGames.ts
export function useGames() {
  return useSWR('games', api.games.getAll);
}

// components/Games.tsx
export default function Games() {
  const { data, error, isLoading } = useGames();
  // ...
}
```

### API Routes (Next.js)
- [x] Criar rotas em `pages/api/`
- [x] Implementar cache headers
- [x] Validar parâmetros
- [x] Retornar erros apropriados (404, 500)
- [x] Documentar endpoints

---

## 📱 4. Responsividade

### Mobile First
- [ ] Começar com design mobile
- [ ] Usar breakpoints progressivos
- [ ] Testar em dispositivos reais
- [ ] Touch targets mínimo 44x44px
- [ ] Evitar hover em mobile

### Breakpoints
```scss
$breakpoint-sm: 640px;   // Tablet
$breakpoint-md: 768px;   // Tablet landscape
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Desktop large
```

### Imagens Responsivas
- [ ] Usar `srcset` para múltiplas resoluções
- [ ] Lazy loading (`loading="lazy"`)
- [ ] Formatos modernos (WebP, AVIF)
- [ ] Otimizar tamanho de imagens

---

## ⚡ 5. Performance

### Otimizações
- [ ] Code splitting (lazy loading)
- [ ] Minificar CSS/JS
- [ ] Comprimir imagens
- [ ] Usar CDN para assets
- [ ] Implementar cache
- [ ] Remover código não usado

### Métricas
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

---

## 🧪 6. Qualidade de Código

### Linting
- [ ] ESLint configurado
- [ ] Prettier configurado
- [ ] Husky para pre-commit hooks
- [ ] Lint-staged para arquivos modificados

### TypeScript
- [ ] Tipos para todas as props
- [ ] Interfaces para objetos complexos
- [ ] Evitar `any`
- [ ] Usar tipos utilitários (Partial, Pick, Omit)

### Testes
- [ ] Testes unitários (Jest)
- [ ] Testes de componentes (React Testing Library)
- [ ] Testes E2E (Cypress/Playwright)
- [ ] Cobertura > 80%

---

## 📚 7. Documentação

### README.md
- [ ] Descrição do projeto
- [ ] Como instalar
- [ ] Como rodar
- [ ] Como testar
- [ ] Tecnologias usadas
- [ ] Screenshots
- [ ] Link para demo

### Código
- [ ] Comentários em funções complexas
- [ ] JSDoc para funções públicas
- [ ] README em cada pasta importante
- [ ] Changelog para versões

---

## 🚀 8. Deploy

### Preparação
- [ ] Variáveis de ambiente configuradas
- [ ] Build sem erros
- [ ] Testes passando
- [ ] Lighthouse > 90

### Plataformas
- [ ] Vercel (Next.js)
- [ ] Netlify (Static)
- [ ] GitHub Pages (Static)
- [ ] AWS/Azure (Produção)

### Pós-Deploy
- [ ] Testar em produção
- [ ] Configurar domínio customizado
- [ ] Configurar HTTPS
- [ ] Configurar analytics
- [ ] Configurar error tracking (Sentry)

---

## 🎯 9. SEO

### Meta Tags
- [ ] `<title>` descritivo
- [ ] `<meta name="description">`
- [ ] Open Graph tags (Facebook)
- [ ] Twitter Card tags
- [ ] Favicon
- [ ] robots.txt
- [ ] sitemap.xml

### Conteúdo
- [ ] URLs semânticas
- [ ] Headings hierárquicos (H1 > H2 > H3)
- [ ] Alt text em imagens
- [ ] Links internos
- [ ] Schema.org markup

---

## 🔒 10. Segurança

### Básico
- [x] HTTPS habilitado
- [x] Sanitizar inputs
- [x] Validar dados no backend
- [x] Usar `rel="noopener"` em links externos
- [x] Não expor API keys no frontend
- [x] Content Security Policy (CSP)

### Avançado
- [x] Rate limiting em APIs
- [x] CORS configurado
- [ ] Autenticação segura (JWT)
- [x] Proteção contra XSS
- [x] Proteção contra CSRF

---

## 📊 Pontuação Final

### Júnior (0-30 pontos)
- Projeto funciona mas código desorganizado
- Sem acessibilidade
- Dados hardcoded

### Pleno (31-60 pontos)
- Código organizado
- Acessibilidade básica
- Dados separados

### Sênior (61-90 pontos)
- Arquitetura profissional
- WCAG AA compliant
- API + Cache + Testes

### Staff/Principal (91-100 pontos)
- Tudo acima +
- Documentação completa
- Performance otimizada
- Segurança robusta

---

## 🎓 Como Usar Este Checklist

1. **Imprima ou salve** este arquivo
2. **Marque** cada item conforme implementa
3. **Documente** decisões importantes
4. **Revise** periodicamente
5. **Compartilhe** com a equipe

---

## 💡 Dica Final

> "Código profissional não é sobre ser perfeito. É sobre ser **manutenível, escalável e acessível**."

Foque em:
1. **Organização** (SASS 7-1)
2. **Acessibilidade** (WCAG AA)
3. **Dados** (API + Hooks)

Esses 3 pilares transformam qualquer projeto de júnior para sênior.

---

**Boa sorte! 🚀**
