// ============================================
// CUSTOM HOOKS - Data fetching com SWR
// ============================================

import useSWR from 'swr';
import { api } from '@/services/api';
import type { FalloutGame } from '@/lib/fallout-games';
import type { Vault } from '@/lib/vaults-data';
import type { Faction } from '@/lib/factions-data';

// ============================================
// GAMES HOOKS
// ============================================

/**
 * Hook para buscar todos os jogos
 * @returns { games, loading, error }
 */
export function useGames() {
  const { data, error, isLoading } = useSWR<FalloutGame[]>(
    '/api/games',
    api.games.getAll,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    games: data || [],
    loading: isLoading,
    error,
  };
}

/**
 * Hook para buscar um jogo específico por ID
 * @param id - ID do jogo
 * @returns { game, loading, error }
 */
export function useGame(id: string | undefined) {
  const shouldFetch = !!id;
  
  const { data, error, isLoading } = useSWR<FalloutGame>(
    shouldFetch ? `/api/games/${id}` : null,
    shouldFetch ? () => api.games.getById(id!) : null,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    game: data,
    loading: isLoading,
    error,
  };
}

// ============================================
// VAULTS HOOKS
// ============================================

/**
 * Hook para buscar todos os vaults
 * @returns { vaults, loading, error }
 */
export function useVaults() {
  const { data, error, isLoading } = useSWR<Vault[]>(
    '/api/vaults',
    api.vaults.getAll,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    vaults: data || [],
    loading: isLoading,
    error,
  };
}

/**
 * Hook para buscar vaults de um jogo específico
 * @param gameId - ID do jogo
 * @returns { vaults, loading, error }
 */
export function useVaultsByGame(gameId: string | undefined) {
  const shouldFetch = !!gameId;
  
  const { data, error, isLoading } = useSWR<Vault[]>(
    shouldFetch ? `/api/vaults?game=${gameId}` : null,
    shouldFetch ? () => api.vaults.getByGame(gameId!) : null,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    vaults: data || [],
    loading: isLoading,
    error,
  };
}

// ============================================
// FACTIONS HOOKS
// ============================================

/**
 * Hook para buscar facções de um jogo específico
 * @param gameId - ID do jogo
 * @returns { factions, loading, error }
 */
export function useFactionsByGame(gameId: string | undefined) {
  const shouldFetch = !!gameId;
  
  const { data, error, isLoading } = useSWR<Faction[]>(
    shouldFetch ? `/api/factions/${gameId}` : null,
    shouldFetch ? () => api.factions.getByGame(gameId!) : null,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    factions: data || [],
    loading: isLoading,
    error,
  };
}
