// ============================================
// API SERVICE - Camada de serviços
// ============================================

const API_BASE = '/api';

// Tipos de resposta da API
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  count?: number;
}

// Função auxiliar para fazer fetch
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`);
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to fetch data');
  }
  
  const json: ApiResponse<T> = await res.json();
  
  if (!json.success || !json.data) {
    throw new Error(json.error || 'Invalid response');
  }
  
  return json.data;
}

// ============================================
// GAMES API
// ============================================

export const gamesAPI = {
  /**
   * Buscar todos os jogos
   */
  getAll: async () => {
    return fetchAPI<any[]>('/games');
  },
  
  /**
   * Buscar jogo por ID
   */
  getById: async (id: string) => {
    return fetchAPI<any>(`/games/${id}`);
  },
};

// ============================================
// VAULTS API
// ============================================

export const vaultsAPI = {
  /**
   * Buscar todos os vaults
   */
  getAll: async () => {
    return fetchAPI<any[]>('/vaults');
  },
  
  /**
   * Buscar vaults por jogo
   */
  getByGame: async (gameId: string) => {
    return fetchAPI<any[]>(`/vaults?game=${encodeURIComponent(gameId)}`);
  },
};

// ============================================
// FACTIONS API
// ============================================

export const factionsAPI = {
  /**
   * Buscar facções por jogo
   */
  getByGame: async (gameId: string) => {
    return fetchAPI<any[]>(`/factions/${gameId}`);
  },
};

// ============================================
// API UNIFICADA
// ============================================

export const api = {
  games: gamesAPI,
  vaults: vaultsAPI,
  factions: factionsAPI,
};

export default api;
