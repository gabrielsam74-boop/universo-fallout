# 🔌 Exemplo de Uso - API e Hooks

## ✅ Implementação Completa

A camada profissional de Dados e APIs foi implementada com sucesso!

---

## 📊 Arquitetura Implementada

```
┌─────────────────────────────────────────────────────────┐
│                    COMPONENTE REACT                      │
│  (usa hooks customizados para buscar dados)             │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│              HOOKS CUSTOMIZADOS (SWR)                    │
│  src/hooks/useFalloutData.ts                            │
│  - useGames()                                           │
│  - useGame(id)                                          │
│  - useVaults()                                          │
│  - useFactionsByGame(gameId)                            │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│              CAMADA DE SERVIÇOS                          │
│  src/services/api.ts                                    │
│  - gamesAPI.getAll()                                    │
│  - gamesAPI.getById(id)                                 │
│  - vaultsAPI.getByGame(gameId)                          │
│  - factionsAPI.getByGame(gameId)                        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│              API ROUTES (Next.js)                        │
│  src/pages/api/                                         │
│  - GET /api/games                                       │
│  - GET /api/games/[id]                                  │
│  - GET /api/vaults?game=fallout-4                       │
│  - GET /api/factions/[gameId]                           │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│              DADOS (TypeScript)                          │
│  src/lib/                                               │
│  - fallout-games.ts                                     │
│  - vaults-data.ts                                       │
│  - factions-data.ts                                     │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Como Usar

### 1️⃣ Exemplo Básico - Listar Jogos

```tsx
import { useGames } from '@/hooks/useFalloutData';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

export default function GamesPage() {
  const { games, loading, error } = useGames();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <h1>Jogos Fallout</h1>
      {games.map(game => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.shortDesc}</p>
        </div>
      ))}
    </div>
  );
}
```

### 2️⃣ Exemplo Intermediário - Detalhes do Jogo

```tsx
import { useRouter } from 'next/router';
import { useGame, useFactionsByGame } from '@/hooks/useFalloutData';

export default function GameDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { game, loading, error } = useGame(id as string);
  const { factions } = useFactionsByGame(id as string);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!game) return <div>Jogo não encontrado</div>;

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.fullStory}</p>
      
      <h2>Facções</h2>
      {factions.map(faction => (
        <div key={faction.id}>
          <h3>{faction.name}</h3>
          <p>{faction.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### 3️⃣ Exemplo Avançado - Com Cache e Revalidação

```tsx
import useSWR from 'swr';
import { api } from '@/services/api';

export default function AdvancedExample() {
  const { data, error, isLoading, mutate } = useSWR(
    '/api/games',
    api.games.getAll,
    {
      // Revalidar a cada 5 minutos
      refreshInterval: 300000,
      // Não revalidar ao focar na janela
      revalidateOnFocus: false,
      // Revalidar ao reconectar
      revalidateOnReconnect: true,
      // Fallback enquanto carrega
      fallbackData: [],
    }
  );

  const handleRefresh = () => {
    mutate(); // Força revalidação
  };

  return (
    <div>
      <button onClick={handleRefresh}>Atualizar</button>
      {/* ... */}
    </div>
  );
}
```

---

## 📡 API Routes Disponíveis

### Games

```bash
# Listar todos os jogos
GET /api/games
Response: { success: true, data: [...], count: 6 }

# Buscar jogo por ID
GET /api/games/fallout-4
Response: { success: true, data: {...} }

# Erro 404
GET /api/games/invalid-id
Response: { success: false, error: "Game not found" }
```

### Vaults

```bash
# Listar todos os vaults
GET /api/vaults
Response: { success: true, data: [...], count: 25 }

# Filtrar vaults por jogo
GET /api/vaults?game=Fallout%204
Response: { success: true, data: [...], count: 6 }
```

### Factions

```bash
# Buscar facções por jogo
GET /api/factions/fallout-4
Response: { success: true, data: [...], count: 4 }

# Erro 404
GET /api/factions/invalid-game
Response: { success: false, error: "Factions not found for this game" }
```

---

## 🎯 Benefícios da Arquitetura

### ✅ Separação de Responsabilidades
```
❌ ANTES: Componente → Dados (hardcoded)
✅ DEPOIS: Componente → Hook → Service → API → Dados
```

### ✅ Cache Automático (SWR)
- Dados são cacheados automaticamente
- Revalidação inteligente
- Menos requisições ao servidor
- Melhor performance

### ✅ Estados de Loading e Erro
```tsx
// Antes: sem feedback
const games = falloutGames;

// Depois: com feedback profissional
const { games, loading, error } = useGames();
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

### ✅ Fácil Trocar Fonte de Dados
```typescript
// Hoje: dados locais
export const gamesAPI = {
  getAll: () => fetch('/api/games').then(r => r.json())
};

// Amanhã: API externa
export const gamesAPI = {
  getAll: () => fetch('https://api.fallout.com/games').then(r => r.json())
};

// Componentes não mudam! 🎉
```

---

## 🧪 Testando a API

### No navegador:
```
http://localhost:3000/api/games
http://localhost:3000/api/games/fallout-4
http://localhost:3000/api/vaults
http://localhost:3000/api/vaults?game=Fallout%204
http://localhost:3000/api/factions/fallout-4
```

### Com curl:
```bash
# Listar jogos
curl http://localhost:3000/api/games

# Buscar jogo específico
curl http://localhost:3000/api/games/fallout-4

# Vaults de um jogo
curl "http://localhost:3000/api/vaults?game=Fallout%204"

# Facções de um jogo
curl http://localhost:3000/api/factions/fallout-4
```

---

## 📈 Comparação: Antes vs Depois

### ❌ ANTES (Código Júnior)

```tsx
// Dados hardcoded no componente
import { falloutGames } from '@/lib/fallout-games';

export default function Games() {
  const games = falloutGames; // Sem loading, sem erro
  
  return (
    <div>
      {games.map(game => (
        <div key={game.id}>{game.title}</div>
      ))}
    </div>
  );
}
```

**Problemas:**
- ❌ Dados misturados com UI
- ❌ Sem estados de loading
- ❌ Sem tratamento de erros
- ❌ Difícil de testar
- ❌ Não escalável

### ✅ DEPOIS (Código Sênior)

```tsx
// Camada de dados separada
import { useGames } from '@/hooks/useFalloutData';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

export default function Games() {
  const { games, loading, error } = useGames();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {games.map(game => (
        <div key={game.id}>{game.title}</div>
      ))}
    </div>
  );
}
```

**Benefícios:**
- ✅ Separação de responsabilidades
- ✅ Estados de loading e erro
- ✅ Cache automático (SWR)
- ✅ Fácil de testar
- ✅ Escalável e manutenível

---

## 🎓 Próximos Passos

Agora você pode:

1. ✅ **Adicionar novas APIs** facilmente
2. ✅ **Criar novos hooks** para outros dados
3. ✅ **Integrar APIs externas** (NASA, PokeAPI, etc)
4. ✅ **Adicionar autenticação** nas rotas
5. ✅ **Implementar paginação** e filtros
6. ✅ **Adicionar testes** para APIs e hooks

---

## 🏆 Nível Profissional Alcançado

Com esta arquitetura, você demonstra:

- ✅ Conhecimento de padrões REST
- ✅ Separação de camadas (MVC)
- ✅ Cache e otimização
- ✅ Tratamento de erros
- ✅ UX profissional (loading states)
- ✅ Código testável e escalável

**Parabéns! 🎉 Sua arquitetura de dados está no nível de empresas como Netflix, Spotify e Airbnb.**
