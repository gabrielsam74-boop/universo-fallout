import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import LikeButton from '@/components/LikeButton';
import { falloutGames, timeline } from '@/lib/fallout-games';

export default function Home() {
  return (
    <>
      <Head>
        <title>Universo Fallout - História Completa</title>
        <meta name="description" content="Explore a história completa do universo Fallout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center justify-center text-center px-4 pt-20">
          <div className="max-w-5xl fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl bethesda-title text-yellow-500 mb-4 sm:mb-6 glow-yellow">
              UNIVERSO FALLOUT
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 mb-6 sm:mb-8 tracking-wide">
              A HISTÓRIA COMPLETA DA SÉRIE
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Explore a cronologia completa do universo Fallout, desde a Grande Guerra de 2077 
              até os eventos mais recentes. Cada jogo conta uma história única no mundo pós-apocalíptico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="#jogos" className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 sm:px-8 py-3 text-base sm:text-lg bethesda-title transition-all glow-yellow">
                VER JOGOS
              </a>
              <a href="#cronologia" className="bg-gray-900 hover:bg-gray-800 text-yellow-500 px-6 sm:px-8 py-3 text-base sm:text-lg bethesda-title border border-yellow-600/30 transition-all">
                CRONOLOGIA
              </a>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="cronologia" className="py-12 sm:py-16 md:py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl bethesda-title text-yellow-500 mb-8 sm:mb-12 text-center">
              LINHA DO TEMPO
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="bg-gray-900/80 border border-yellow-600/30 p-4 sm:p-6 card-hover">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="text-yellow-500 bethesda-title text-3xl sm:text-4xl sm:min-w-[100px]">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-2">
                        {item.event}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section id="jogos" className="py-12 sm:py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl bethesda-title text-yellow-500 mb-3 sm:mb-4 text-center">
              TODOS OS JOGOS
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg px-4">
              Clique em qualquer jogo para ver a história completa
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {falloutGames.map(game => (
                <div key={game.id} className="group relative">
                  <Link 
                    href={`/game/${game.id}`}
                    className="block"
                  >
                    <div className="terminal-border bg-gray-900 overflow-hidden card-hover h-full crt-effect">
                      <div 
                        className="h-40 sm:h-48 relative bg-black bg-cover bg-center"
                        style={{ 
                          backgroundImage: game.image ? `url(${game.image})` : 'none'
                        }}
                      >
                        {!game.image && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-5xl sm:text-6xl opacity-30 text-yellow-500">☢️</div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                          <div className="text-xs bethesda-title text-yellow-500 mb-1">
                            Lançamento: {game.year} • Cronologia: {game.chronology}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 bg-gray-900">
                        <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-2 sm:mb-3 group-hover:text-yellow-300 transition">
                          {game.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{game.shortDesc}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-yellow-500 bethesda-title text-xs sm:text-sm">
                            LER HISTÓRIA COMPLETA →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2 bg-black/80 px-3 py-1 rounded border border-yellow-600/50">
                      <span className="text-yellow-500 bethesda-title text-sm">⭐</span>
                      <span className="text-yellow-400 bethesda-title text-lg">{game.rating}</span>
                      <span className="text-gray-500 text-xs">/100</span>
                    </div>
                    <LikeButton pageId={`/game/${game.id}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TV Series Section */}
        <section id="serie" className="py-12 sm:py-16 md:py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl bethesda-title text-yellow-500 mb-3 sm:mb-4 text-center">
              SÉRIE DE TV
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg px-4">
              A adaptação oficial da Amazon Prime Video
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <Link href="/serie" className="group block">
                  <div className="terminal-border bg-gray-900 overflow-hidden card-hover h-full crt-effect">
                    <div 
                      className="h-40 sm:h-48 relative bg-black bg-cover bg-center"
                      style={{ 
                        backgroundImage: 'url(/images/fallout-serie.jpg)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="text-xs bethesda-title text-yellow-500 mb-1">
                          Lançamento: 2024 • Cronologia: 2296
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 bg-gray-900">
                      <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-2 sm:mb-3 group-hover:text-yellow-300 transition">
                        FALLOUT (SÉRIE)
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                        Lucy sai do Vault 33 em busca de seu pai na superfície devastada.
                      </p>
                      <div className="text-yellow-500 bethesda-title text-xs sm:text-sm">
                        VER DETALHES COMPLETOS →
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2 bg-black/80 px-3 py-1 rounded border border-yellow-600/50">
                    <span className="text-yellow-500 bethesda-title text-sm">⭐</span>
                    <span className="text-yellow-400 bethesda-title text-lg">94</span>
                    <span className="text-gray-500 text-xs">/100</span>
                  </div>
                  <LikeButton pageId="/serie" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-bg-1 py-12 sm:py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              EXPLORE O WASTELAND
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10">
              Cada jogo é uma jornada única através do mundo pós-nuclear. 
              Descubra as histórias que moldaram o universo Fallout.
            </p>
          </div>
        </section>

        <footer className="bg-black border-t-2 border-green-500 py-6 sm:py-8 text-center shadow-lg shadow-green-500/30">
          <p className="text-green-400/60 pip-boy-text mb-2 text-sm sm:text-base px-4">
            © 2077 Vault-Tec Corporation • Universo Fallout
          </p>
          <p className="text-green-400/40 text-xs pip-boy-text max-w-4xl mx-auto px-4">
            Fallout® é marca registrada da Bethesda Softworks LLC. Todas as imagens, músicas e conteúdos relacionados 
            são propriedade da Bethesda Softworks LLC e ZeniMax Media Inc. Este site é um projeto de fãs não oficial 
            e não possui afiliação com a Bethesda Softworks.
          </p>
        </footer>
      </div>
    </>
  );
}
