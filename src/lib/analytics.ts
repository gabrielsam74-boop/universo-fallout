// Sistema de Analytics Local
export interface PageStats {
  page: string;
  views: number;
  lastVisit: string;
}

export interface LikeStats {
  likes: number;
  dislikes: number;
}

const STORAGE_KEY = 'fallout_analytics';
const LIKES_KEY = 'fallout_likes';

// Inicializa ou recupera dados do localStorage
export function getLocalStats(): Record<string, PageStats> {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Erro ao ler analytics:', error);
  }
  
  return {};
}

// Salva dados no localStorage
function saveLocalStats(stats: Record<string, PageStats>) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Erro ao salvar analytics:', error);
  }
}

// Obtém likes de uma página
export function getLikes(page: string): LikeStats {
  if (typeof window === 'undefined') return { likes: 0, dislikes: 0 };
  
  try {
    const stored = localStorage.getItem(LIKES_KEY);
    if (stored) {
      const allLikes = JSON.parse(stored);
      return allLikes[page] || { likes: 0, dislikes: 0 };
    }
  } catch (error) {
    console.error('Erro ao ler likes:', error);
  }
  
  return { likes: 0, dislikes: 0 };
}

// Salva likes de uma página
function saveLikes(page: string, stats: LikeStats) {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(LIKES_KEY);
    const allLikes = stored ? JSON.parse(stored) : {};
    allLikes[page] = stats;
    localStorage.setItem(LIKES_KEY, JSON.stringify(allLikes));
  } catch (error) {
    console.error('Erro ao salvar likes:', error);
  }
}

// Adiciona um like
export function addLike(page: string) {
  const stats = getLikes(page);
  stats.likes += 1;
  saveLikes(page, stats);
}

// Adiciona um dislike
export function addDislike(page: string) {
  const stats = getLikes(page);
  stats.dislikes += 1;
  saveLikes(page, stats);
}

// Remove um like
export function removeLike(page: string) {
  const stats = getLikes(page);
  if (stats.likes > 0) {
    stats.likes -= 1;
    saveLikes(page, stats);
  }
}

// Remove um dislike
export function removeDislike(page: string) {
  const stats = getLikes(page);
  if (stats.dislikes > 0) {
    stats.dislikes -= 1;
    saveLikes(page, stats);
  }
}

// Obtém todos os likes
export function getAllLikes(): Record<string, LikeStats> {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(LIKES_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Erro ao ler todos os likes:', error);
  }
  
  return {};
}

// Registra uma visualização de página
export function trackPageView(page: string) {
  if (typeof window === 'undefined') return;
  
  const stats = getLocalStats();
  
  if (stats[page]) {
    stats[page].views += 1;
    stats[page].lastVisit = new Date().toISOString();
  } else {
    stats[page] = {
      page,
      views: 1,
      lastVisit: new Date().toISOString()
    };
  }
  
  saveLocalStats(stats);
}

// Obtém total de visualizações
export function getTotalViews(): number {
  const stats = getLocalStats();
  return Object.values(stats).reduce((sum, stat) => sum + stat.views, 0);
}

// Obtém páginas mais visitadas
export function getTopPages(limit: number = 5): PageStats[] {
  const stats = getLocalStats();
  return Object.values(stats)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

// Obtém visualizações de uma página específica
export function getPageViews(page: string): number {
  const stats = getLocalStats();
  return stats[page]?.views || 0;
}

// Reseta todas as estatísticas (útil para testes)
export function resetStats() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
