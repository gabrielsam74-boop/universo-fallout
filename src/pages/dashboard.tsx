import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import { falloutGames } from '@/lib/fallout-games';
import { getLocalStats } from '@/lib/analytics';

interface PageView {
  page: string;
  views: number;
  label: string;
}

export default function Dashboard() {
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [totalViews, setTotalViews] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const [stats, setStats] = useState({
    totalGames: falloutGames.length,
    totalVaults: 0,
    totalFactions: 0,
    lastUpdate: new Date().toLocaleDateString('pt-BR')
  });

  useEffect(() => {
    setIsClient(true);
    
    // Carrega contagem de vaults e facções
    import('@/lib/vaults-data').then(module => {
      const vaultCount = Object.values(module.vaultsByGame).flat().length;
      setStats(prev => ({ ...prev, totalVaults: vaultCount }));
    });

    import('@/lib/factions-data').then(module => {
      const factionCount = Object.values(module.factions).flat().length;
      setStats(prev => ({ ...prev, totalFactions: factionCount }));
    });
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateStats = () => {
      const localStats = getLocalStats();
      
      // Mapeia as páginas com labels amigáveis
      const pageLabels: Record<string, string> = {
        '/serie': 'Série TV',
        ...Object.fromEntries(
          falloutGames.map(game => [`/game/${game.id}`, game.title])
        )
      };

      // Filtra apenas jogos e série de TV
      const allowedPages = [
        '/serie',
        ...falloutGames.map(game => `/game/${game.id}`)
      ];

      const views: PageView[] = Object.entries(localStats)
        .filter(([page]) => allowedPages.includes(page))
        .map(([page, data]) => ({
          page,
          views: data.views,
          label: pageLabels[page] || page
        }));

      const total = views.reduce((sum, pv) => sum + pv.views, 0);

      setPageViews(views.sort((a, b) => b.views - a.views));
      setTotalViews(total);
    };

    // Atualiza imediatamente
    updateStats();

    // Atualiza a cada 2 segundos para refletir mudanças
    const interval = setInterval(updateStats, 2000);
    return () => clearInterval(interval);
  }, [isClient]);

  const mostViewed = pageViews.slice(0, 5);
  const maxViews = Math.max(...pageViews.map(pv => pv.views), 1);

  return (
    <>
      <Head>
        <title>Estatísticas - Universo Fallout</title>
        <meta name="description" content="Estatísticas e informações do site Universo Fallout" />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />

        <main id="main-content" className="container mx-auto px-4 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <Link 
                href="/" 
                className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block text-sm sm:text-base"
                aria-label="Voltar para página inicial"
              >
                ← Voltar para início
              </Link>
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl bethesda-title text-yellow-500 mb-4 glow-yellow"
                id="page-title"
              >
                ESTATÍSTICAS
              </h1>
              <p className="text-gray-400 text-base sm:text-lg">
                Dados e informações sobre o Universo Fallout
              </p>
            </div>

            {/* Stats Grid */}
            <section 
              className="mb-12 sm:mb-16"
              aria-labelledby="content-stats-title"
            >
              <h2 
                id="content-stats-title"
                className="text-2xl sm:text-3xl bethesda-title text-yellow-500 mb-6"
              >
                CONTEÚDO DO SITE
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" role="list">
                <div 
                  className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6 text-center crt-effect"
                  role="listitem"
                >
                  <div 
                    className="text-4xl sm:text-5xl bethesda-title text-yellow-500 mb-2"
                    aria-label={`${stats.totalGames} jogos catalogados`}
                  >
                    {stats.totalGames}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">Jogos Catalogados</p>
                </div>

                <div 
                  className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6 text-center crt-effect"
                  role="listitem"
                >
                  <div 
                    className="text-4xl sm:text-5xl bethesda-title text-yellow-500 mb-2"
                    aria-label={`${stats.totalVaults} vaults documentados`}
                  >
                    {stats.totalVaults}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">Vaults Documentados</p>
                </div>

                <div 
                  className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6 text-center crt-effect"
                  role="listitem"
                >
                  <div 
                    className="text-4xl sm:text-5xl bethesda-title text-yellow-500 mb-2"
                    aria-label={`${stats.totalFactions} facções registradas`}
                  >
                    {stats.totalFactions}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">Facções Registradas</p>
                </div>

                <div 
                  className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6 text-center crt-effect"
                  role="listitem"
                >
                  <div 
                    className="text-4xl sm:text-5xl bethesda-title text-yellow-500 mb-2"
                    aria-label="1 série de TV"
                  >
                    1
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">Série de TV</p>
                </div>
              </div>
            </section>

            {/* Page Views */}
            <section 
              className="mb-12 sm:mb-16"
              aria-labelledby="views-title"
            >
              <h2 
                id="views-title"
                className="text-2xl sm:text-3xl bethesda-title text-yellow-500 mb-6"
              >
                CONTEÚDO MAIS VISITADO
              </h2>
              <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8 crt-effect">
                {!isClient ? (
                  <div 
                    className="text-center py-8 text-gray-400"
                    role="status"
                    aria-live="polite"
                  >
                    <span className="sr-only">Carregando estatísticas...</span>
                    Carregando estatísticas...
                  </div>
                ) : totalViews === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-yellow-500 bethesda-title text-xl mb-4">
                      📊 NENHUMA VISUALIZAÇÃO AINDA
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">
                      Visite as páginas dos jogos ou da série para começar a coletar estatísticas!
                    </p>
                    <nav className="flex flex-wrap gap-2 justify-center" aria-label="Links rápidos">
                      <Link 
                        href="/serie" 
                        className="text-yellow-500 hover:text-yellow-400 text-sm"
                        aria-label="Ver página da série de TV"
                      >
                        Ver Série →
                      </Link>
                      <Link 
                        href="/#jogos" 
                        className="text-yellow-500 hover:text-yellow-400 text-sm"
                        aria-label="Ver lista de jogos"
                      >
                        Ver Jogos →
                      </Link>
                    </nav>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-yellow-500 bethesda-title text-sm">TOTAL DE VISUALIZAÇÕES</span>
                        <span 
                          className="text-yellow-500 bethesda-title text-2xl"
                          aria-label={`${totalViews} visualizações totais`}
                        >
                          {totalViews}
                        </span>
                      </div>
                      <div 
                        className="h-2 bg-gray-800 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={Math.min((totalViews / 50) * 100, 100)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Progresso de visualizações"
                      >
                        <div 
                          className="h-full bg-yellow-500 transition-all duration-500"
                          style={{ width: `${Math.min((totalViews / 50) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-4" role="list" aria-label="Conteúdo mais visitado">
                      {mostViewed.length > 0 ? (
                        mostViewed.map((pv, idx) => (
                          <div 
                            key={pv.page} 
                            className="flex items-center gap-4"
                            role="listitem"
                          >
                            <div 
                              className="text-yellow-500 bethesda-title text-xl min-w-[30px]"
                              aria-label={`Posição ${idx + 1}`}
                            >
                              #{idx + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-gray-300 text-sm sm:text-base">{pv.label}</span>
                                <span 
                                  className="text-yellow-500 bethesda-title"
                                  aria-label={`${pv.views} visualizações`}
                                >
                                  {pv.views}
                                </span>
                              </div>
                              <div 
                                className="h-2 bg-gray-800 rounded-full overflow-hidden"
                                role="progressbar"
                                aria-valuenow={(pv.views / maxViews) * 100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`${pv.label}: ${pv.views} visualizações`}
                              >
                                <div 
                                  className="h-full bg-yellow-600 transition-all duration-500"
                                  style={{ width: `${(pv.views / maxViews) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-gray-400 py-4">
                          Nenhum jogo ou série visitado ainda
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Timeline Info */}
            <section className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl bethesda-title text-yellow-500 mb-6">
                LINHA DO TEMPO FALLOUT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/80 border border-yellow-600/30 p-6 crt-effect">
                  <h3 className="text-xl bethesda-title text-yellow-400 mb-4">📅 CRONOLOGIA</h3>
                  <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li>• <span className="text-yellow-500">2077:</span> Grande Guerra Nuclear</li>
                    <li>• <span className="text-yellow-500">2161:</span> Fallout 1</li>
                    <li>• <span className="text-yellow-500">2241:</span> Fallout 2</li>
                    <li>• <span className="text-yellow-500">2277:</span> Fallout 3</li>
                    <li>• <span className="text-yellow-500">2281:</span> Fallout New Vegas</li>
                    <li>• <span className="text-yellow-500">2287:</span> Fallout 4</li>
                    <li>• <span className="text-yellow-500">2296:</span> Série TV</li>
                  </ul>
                </div>

                <div className="bg-gray-900/80 border border-yellow-600/30 p-6 crt-effect">
                  <h3 className="text-xl bethesda-title text-yellow-400 mb-4">🎮 LANÇAMENTOS</h3>
                  <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                    <li>• <span className="text-yellow-500">1997:</span> Fallout (PC)</li>
                    <li>• <span className="text-yellow-500">1998:</span> Fallout 2 (PC)</li>
                    <li>• <span className="text-yellow-500">2008:</span> Fallout 3 (Multi)</li>
                    <li>• <span className="text-yellow-500">2010:</span> New Vegas (Multi)</li>
                    <li>• <span className="text-yellow-500">2015:</span> Fallout 4 (Multi)</li>
                    <li>• <span className="text-yellow-500">2018:</span> Fallout 76 (Multi)</li>
                    <li>• <span className="text-yellow-500">2024:</span> Série Amazon</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* About Project */}
            <section className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl bethesda-title text-yellow-500 mb-6">
                SOBRE O PROJETO
              </h2>
              <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8 crt-effect">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  O <span className="text-yellow-500 bethesda-title">Universo Fallout</span> é um projeto de fãs dedicado a catalogar 
                  e apresentar toda a história, personagens, facções e localizações da icônica série de jogos Fallout.
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Nosso objetivo é criar uma experiência imersiva que capture a essência do universo pós-apocalíptico, 
                  com design inspirado nos terminais Pip-Boy e na estética retro-futurista característica da série.
                </p>
                <div className="border-t border-gray-700 pt-6 mt-6">
                  <h4 className="text-yellow-500 bethesda-title text-lg mb-3">RECURSOS DO SITE:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm sm:text-base">
                    <li>✓ História completa de todos os jogos</li>
                    <li>✓ Informações sobre a série de TV</li>
                    <li>✓ Detalhes de Vaults e experimentos</li>
                    <li>✓ Facções e suas ideologias</li>
                    <li>✓ Timeline interativa</li>
                    <li>✓ Player de música ambiente</li>
                    <li>✓ Design responsivo para mobile</li>
                    <li>✓ Estética Pip-Boy autêntica</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl sm:text-3xl bethesda-title text-yellow-500 mb-6">
                TECNOLOGIAS UTILIZADAS
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Next.js', icon: '⚡' },
                  { name: 'React', icon: '⚛️' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Tailwind CSS', icon: '🎨' },
                  { name: 'Vercel', icon: '▲' },
                  { name: 'Vercel Analytics', icon: '📊' },
                ].map(tech => (
                  <div key={tech.name} className="bg-gray-900/80 border border-yellow-600/30 p-4 text-center crt-effect">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <p className="text-yellow-500 bethesda-title text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Last Update */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Última atualização: {stats.lastUpdate}
              </p>
            </div>
          </div>
        </main>

        <footer 
          className="bg-black border-t-2 border-green-500 py-6 sm:py-8 text-center shadow-lg shadow-green-500/30"
          role="contentinfo"
        >
          <p className="text-green-400/60 pip-boy-text mb-2 text-sm sm:text-base px-4">
            © 2077 Vault-Tec Corporation • Universo Fallout
          </p>
          <p className="text-green-400/40 text-xs pip-boy-text max-w-4xl mx-auto px-4">
            Fallout® é marca registrada da Bethesda Softworks LLC. Este site é um projeto de fãs não oficial.
          </p>
        </footer>
      </div>
    </>
  );
}
