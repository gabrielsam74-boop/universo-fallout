// Sistema de Analytics Local
export interface PageStats {
  page: string;
  views: number;
  lastVisit: string;
}

const STORAGE_KEY = 'fallout_analytics';

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
