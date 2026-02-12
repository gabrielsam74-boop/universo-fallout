# 🔌 Dados e APIs - Nível Profissional

## 🎯 Problema Atual

Seus dados estão em arquivos TypeScript (`.ts`). Isso funciona, mas não é escalável:

```typescript
// ❌ Dados hardcoded no código
export const falloutGames = [
  { id: 'fallout-1', title: 'Fallout', year: 1997, ... },
  { id: 'fallout-2', title: 'Fallout 2', year: 1998, ... },
];
```

**Problemas:**
- Dados misturados com lógica
- Difícil de atualizar sem recompilar
- Não pode ser consumido por outros apps
- Sem cache ou otimização

---

## ✅ Solução Profissional

### Opção 1: JSON Estático (Simples)

#### 1. Criar arquivo JSON:
```json
// public/data/games.json
{
  "games": [
    {
      "id": "fallout-1",
      "title": "Fallout",
      "year": 1997,
      "chronology": "2161",
      "shortDesc": "O jogo que iniciou tudo.",
      "rating": 89
    }
  ]
}
```

#### 2. Consumir no componente:
```typescript
// src/hooks/useGames.ts
import { useState, useEffect } from 'react';

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/games.json')
      .then(res => res.json())
      .then(data => {
        setGames(data.games);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { games, loading, error };
}
```

#### 3. Usar no componente:
```tsx
export default function GamesPage() {
  const { games, loading, error } = useGames();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

---

### Opção 2: API Routes do Next.js (Intermediário)

#### 1. Criar API Route:
```typescript
// pages/api/games.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { falloutGames } from '@/lib/fallout-games';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Cache por 1 hora
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  if (req.method === 'GET') {
    const { id } = req.query;
    
    if (id) {
      const game = falloutGames.find(g => g.id === id);
      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }
      return res.status(200).json(game);
    }
    
    return res.status(200).json(falloutGames);
  }
  
  res.status(405).json({ error: 'Method not allowed' });
}
```

#### 2. Consumir a API:
```typescript
// src/services/api.ts
const API_BASE = '/api';

export const gamesAPI = {
  getAll: async () => {
    const res = await fetch(`${API_BASE}/games`);
    if (!res.ok) throw new Error('Failed to fetch games');
    return res.json();
  },
  
  getById: async (id: string) => {
    const res = await fetch(`${API_BASE}/games?id=${id}`);
    if (!res.ok) throw new Error('Game not found');
    return res.json();
  },
};
```

#### 3. Hook customizado com cache:
```typescript
// src/hooks/useGames.ts
import useSWR from 'swr';
import { gamesAPI } from '@/services/api';

const fetcher = () => gamesAPI.getAll();

export function useGames() {
  const { data, error, isLoading } = useSWR('/api/games', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    games: data || [],
    loading: isLoading,
    error,
  };
}
```

---

### Opção 3: API Externa (Avançado)

#### Exemplo com API da NASA:
```typescript
// src/services/nasa.ts
const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const NASA_BASE = 'https://api.nasa.gov';

export const nasaAPI = {
  getAPOD: async (date?: string) => {
    const params = new URLSearchParams({
      api_key: NASA_API_KEY,
      ...(date && { date }),
    });
    
    const res = await fetch(`${NASA_BASE}/planetary/apod?${params}`);
    if (!res.ok) throw new Error('Failed to fetch APOD');
    return res.json();
  },
  
  getMarsPhotos: async (sol: number) => {
    const params = new URLSearchParams({
      api_key: NASA_API_KEY,
      sol: sol.toString(),
    });
    
    const res = await fetch(
      `${NASA_BASE}/mars-photos/api/v1/rovers/curiosity/photos?${params}`
    );
    if (!res.ok) throw new Error('Failed to fetch Mars photos');
    return res.json();
  },
};
```

---

## 🚀 Migração Passo a Passo

### Fase 1: Separar Dados
```bash
# Criar pasta de dados
mkdir public/data

# Mover dados para JSON
# fallout-games.ts → games.json
# vaults-data.ts → vaults.json
# factions-data.ts → factions.json
```

### Fase 2: Criar Serviços
```typescript
// src/services/fallout-api.ts
export const falloutAPI = {
  games: {
    getAll: () => fetch('/data/games.json').then(r => r.json()),
    getById: (id: string) => 
      fetch('/data/games.json')
        .then(r => r.json())
        .then(data => data.games.find(g => g.id === id)),
  },
  
  vaults: {
    getAll: () => fetch('/data/vaults.json').then(r => r.json()),
    getByGame: (gameId: string) =>
      fetch('/data/vaults.json')
        .then(r => r.json())
        .then(data => data.vaults.filter(v => v.game === gameId)),
  },
  
  factions: {
    getByGame: (gameId: string) =>
      fetch('/data/factions.json')
        .then(r => r.json())
        .then(data => data[gameId] || []),
  },
};
```

### Fase 3: Criar Hooks
```typescript
// src/hooks/useFalloutData.ts
import useSWR from 'swr';
import { falloutAPI } from '@/services/fallout-api';

export function useGames() {
  const { data, error, isLoading } = useSWR(
    'games',
    falloutAPI.games.getAll
  );
  
  return { games: data?.games || [], loading: isLoading, error };
}

export function useGame(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `game-${id}` : null,
    () => falloutAPI.games.getById(id)
  );
  
  return { game: data, loading: isLoading, error };
}

export function useVaults(gameId: string) {
  const { data, error, isLoading } = useSWR(
    gameId ? `vaults-${gameId}` : null,
    () => falloutAPI.vaults.getByGame(gameId)
  );
  
  return { vaults: data || [], loading: isLoading, error };
}
```

### Fase 4: Atualizar Componentes
```tsx
// Antes
import { falloutGames } from '@/lib/fallout-games';

export default function GamesPage() {
  return (
    <div>
      {falloutGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

// Depois
import { useGames } from '@/hooks/useFalloutData';

export default function GamesPage() {
  const { games, loading, error } = useGames();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

---

## 📊 Benefícios

### 1. Separação de Responsabilidades
- Dados ≠ Lógica
- Fácil de testar
- Fácil de manter

### 2. Performance
- Cache automático (SWR)
- Revalidação inteligente
- Loading states

### 3. Escalabilidade
- Fácil trocar JSON por API real
- Fácil adicionar novos dados
- Fácil integrar com backend

### 4. Profissionalismo
- Padrão da indústria
- Código limpo
- Fácil de entender

---

## 🎓 Exemplo Completo

```typescript
// 1. Serviço
export const api = {
  games: {
    getAll: () => fetch('/api/games').then(r => r.json()),
  },
};

// 2. Hook
export function useGames() {
  return useSWR('games', api.games.getAll);
}

// 3. Componente
export default function Games() {
  const { data, error, isLoading } = useGames();
  
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  
  return (
    <div>
      {data.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

---

## 📚 Bibliotecas Recomendadas

```bash
# SWR (React Hooks para data fetching)
npm install swr

# Axios (HTTP client)
npm install axios

# React Query (alternativa ao SWR)
npm install @tanstack/react-query
```

---

**Próximo passo**: Vou criar os arquivos JSON e migrar seus dados!
