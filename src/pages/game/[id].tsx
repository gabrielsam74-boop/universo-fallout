import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import { falloutGames } from '@/lib/fallout-games';
import { vaultsByGame } from '@/lib/vaults-data';
import { factions, Faction } from '@/lib/factions-data';
import { objectives, Objective } from '@/lib/objectives-data';

export default function GamePage() {
  const router = useRouter();
  const { id } = router.query;
  
  const game = falloutGames.find(g => g.id === id);
  const gameVaults = id ? vaultsByGame[id as keyof typeof vaultsByGame] || [] : [];
  const gameFactions = id ? factions[id as string] || [] : [];
  const gameObjectives = id ? objectives[id as string] || [] : [];

  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [selectedObjective, setSelectedObjective] = useState<Objective | null>(null);
  const [showStorySpoilers, setShowStorySpoilers] = useState(false);
  const [showObjectivesSpoilers, setShowObjectivesSpoilers] = useState(false);
  const [showVaultsSpoilers, setShowVaultsSpoilers] = useState(false);

  if (!game) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl bethesda-title text-yellow-500 mb-4">Jogo não encontrado</h1>
          <Link href="/" className="text-yellow-400 hover:text-yellow-300">
            ← Voltar para início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{game.title} - História Completa</title>
        <meta name="description" content={game.shortDesc} />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero with Game Image */}
        <section 
          className="min-h-screen flex items-end pt-20 pb-8 sm:pb-12 px-4"
          style={{
            background: game.image 
              ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${game.image})`
              : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          {!game.image && (
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="text-7xl sm:text-9xl">☢️</div>
            </div>
          )}
          <div className="container mx-auto relative z-10">
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block text-sm sm:text-base">
              ← Voltar para todos os jogos
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl bethesda-title text-yellow-500 mb-3 sm:mb-4 glow-yellow">
              {game.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-base sm:text-lg text-gray-300">
              <span>🎮 Lançamento: {game.year}</span>
              <span>📅 Cronologia: {game.chronology}</span>
              <span className="hidden sm:inline">📍 {game.location}</span>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          {/* Story Section */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              HISTÓRIA
            </h2>
            <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
              {!showStorySpoilers ? (
                <div className="text-center py-6 sm:py-8">
                  <p className="text-red-400 text-lg sm:text-xl mb-4 sm:mb-6 bethesda-title">⚠️ ATENÇÃO: SPOILERS PESADOS ⚠️</p>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Esta seção contém spoilers importantes da história do jogo.</p>
                  <button
                    onClick={() => setShowStorySpoilers(true)}
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 sm:px-8 py-2 sm:py-3 bethesda-title transition text-sm sm:text-base"
                  >
                    REVELAR HISTÓRIA
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                    {game.fullStory}
                  </p>
                  <button
                    onClick={() => setShowStorySpoilers(false)}
                    className="text-yellow-500 hover:text-yellow-400 text-xs sm:text-sm"
                  >
                    ← Ocultar spoilers
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Info Grid */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-3 sm:mb-4">
                  PROTAGONISTA
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">{game.protagonist}</p>
              </div>

              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-3 sm:mb-4">
                  LOCALIZAÇÃO
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">{game.location}</p>
              </div>
            </div>
          </section>

          {/* Factions - Clickable */}
          {gameFactions.length > 0 && (
            <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
                FACÇÕES PRINCIPAIS
              </h2>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Clique em uma facção para ver detalhes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {gameFactions.map((faction) => (
                  <button
                    key={faction.id}
                    onClick={() => setSelectedFaction(faction)}
                    className="bg-gray-900/80 border border-yellow-600/30 p-4 text-center hover:bg-gray-800 hover:border-yellow-500 transition cursor-pointer"
                  >
                    <p className="text-yellow-400 bethesda-title text-sm sm:text-base">{faction.name}</p>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Key Events - Clickable */}
          {gameObjectives.length > 0 && (
            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl bethesda-title text-yellow-500 mb-6">
                OBJETIVOS PRINCIPAIS
              </h2>
              {!showObjectivesSpoilers ? (
                <div className="bg-gray-900/80 border border-yellow-600/30 p-8 text-center">
                  <p className="text-red-400 text-xl mb-6 bethesda-title">⚠️ ATENÇÃO: SPOILERS PESADOS ⚠️</p>
                  <p className="text-gray-400 mb-6">Esta seção contém spoilers sobre os objetivos principais do jogo.</p>
                  <button
                    onClick={() => setShowObjectivesSpoilers(true)}
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 bethesda-title transition"
                  >
                    REVELAR OBJETIVOS
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-400 mb-6">
                    Clique em um objetivo para ver detalhes
                    <button
                      onClick={() => setShowObjectivesSpoilers(false)}
                      className="ml-4 text-yellow-500 hover:text-yellow-400 text-sm"
                    >
                      ← Ocultar spoilers
                    </button>
                  </p>
                  <div className="space-y-4">
                    {gameObjectives.map((objective, idx) => (
                      <button
                        key={objective.id}
                        onClick={() => setSelectedObjective(objective)}
                        className="w-full bg-gray-900/80 border border-yellow-600/30 p-6 flex items-start gap-4 hover:bg-gray-800 hover:border-yellow-500 transition cursor-pointer text-left"
                      >
                        <div className="text-yellow-500 bethesda-title text-2xl min-w-[40px]">
                          {idx + 1}
                        </div>
                        <p className="text-gray-300 text-lg">{objective.title}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Vaults Section */}
          {gameVaults.length > 0 && (
            <section className="max-w-6xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
                VAULTS NESTE JOGO
              </h2>
              {!showVaultsSpoilers ? (
                <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8 text-center">
                  <p className="text-red-400 text-lg sm:text-xl mb-4 sm:mb-6 bethesda-title">⚠️ ATENÇÃO: SPOILERS PESADOS ⚠️</p>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Esta seção contém spoilers sobre os experimentos e histórias dos Vaults.</p>
                  <button
                    onClick={() => setShowVaultsSpoilers(true)}
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 sm:px-8 py-2 sm:py-3 bethesda-title transition text-sm sm:text-base"
                  >
                    REVELAR VAULTS
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                    Cada Vault tinha um experimento social secreto da Vault-Tec
                    <button
                      onClick={() => setShowVaultsSpoilers(false)}
                      className="ml-4 text-yellow-500 hover:text-yellow-400 text-xs sm:text-sm"
                    >
                      ← Ocultar spoilers
                    </button>
                  </p>
                  <div className="space-y-6">
                    {gameVaults.map((vault) => (
                      <div key={vault.id} className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-4">
                          <h3 className="text-2xl sm:text-3xl bethesda-title text-yellow-400">
                            {vault.number}
                          </h3>
                          <span className={`px-3 sm:px-4 py-1 text-xs sm:text-sm bethesda-title ${
                            vault.status === 'Ativo' ? 'bg-green-600' :
                            vault.status === 'Selado' ? 'bg-blue-600' :
                            vault.status === 'Destruído' ? 'bg-red-600' :
                            'bg-gray-600'
                          }`}>
                            {vault.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                          <div>
                            <span className="text-gray-500 text-xs sm:text-sm">Localização:</span>
                            <p className="text-gray-300 text-sm sm:text-base">{vault.location}</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs sm:text-sm">População:</span>
                            <p className="text-gray-300 text-sm sm:text-base">{vault.population}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-yellow-500 bethesda-title text-base sm:text-lg mb-2">
                            EXPERIMENTO:
                          </h4>
                          <p className="text-red-400 text-base sm:text-lg">{vault.experiment}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-yellow-500 bethesda-title text-base sm:text-lg mb-2">
                            HISTÓRIA:
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{vault.story}</p>
                        </div>

                        <div className="border-t border-gray-700 pt-4">
                          <h4 className="text-yellow-500 bethesda-title text-xs sm:text-sm mb-2">
                            RESULTADO:
                          </h4>
                          <p className="text-gray-400 text-sm sm:text-base">{vault.outcome}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Navigation */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-yellow-600 p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl bethesda-title text-black mb-3 sm:mb-4">
                EXPLORE OUTROS JOGOS
              </h3>
              <Link 
                href="/"
                className="inline-block bg-black text-yellow-500 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bethesda-title hover:bg-gray-900 transition"
              >
                VER TODOS OS JOGOS
              </Link>
            </div>
          </section>
        </main>

        {/* Faction Modal */}
        {selectedFaction && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFaction(null)}
          >
            <div 
              className="bg-gray-900 border-2 border-yellow-600 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500">
                  {selectedFaction.name}
                </h2>
                <button 
                  onClick={() => setSelectedFaction(null)}
                  className="text-yellow-500 hover:text-yellow-400 text-2xl sm:text-3xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl bethesda-title text-yellow-400 mb-2">DESCRIÇÃO</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedFaction.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-base sm:text-lg bethesda-title text-yellow-400 mb-2">IDEOLOGIA</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{selectedFaction.ideology}</p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg bethesda-title text-yellow-400 mb-2">LÍDER</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{selectedFaction.leader}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg bethesda-title text-yellow-400 mb-2">OBJETIVOS</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedFaction.goals}</p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg bethesda-title text-yellow-400 mb-2">STATUS</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedFaction.status}</p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg bethesda-title text-yellow-400 mb-2">LOCALIZAÇÃO</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedFaction.location}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedFaction(null)}
                className="mt-6 sm:mt-8 w-full bg-yellow-600 hover:bg-yellow-500 text-black py-2 sm:py-3 bethesda-title transition text-sm sm:text-base"
              >
                FECHAR
              </button>
            </div>
          </div>
        )}

        {/* Objective Modal */}
        {selectedObjective && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedObjective(null)}
          >
            <div 
              className="bg-gray-900 border-2 border-yellow-600 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 pr-4">
                  {selectedObjective.title}
                </h2>
                <button 
                  onClick={() => setSelectedObjective(null)}
                  className="text-yellow-500 hover:text-yellow-400 text-2xl sm:text-3xl flex-shrink-0"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl bethesda-title text-yellow-400 mb-2">RESUMO</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedObjective.description}</p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl bethesda-title text-yellow-400 mb-2">DETALHES</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedObjective.details}</p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl bethesda-title text-yellow-400 mb-2">COMO COMPLETAR</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedObjective.howToComplete}</p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl bethesda-title text-yellow-400 mb-2">RECOMPENSAS</h3>
                  <p className="text-green-400 text-sm sm:text-base">{selectedObjective.rewards}</p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl bethesda-title text-yellow-400 mb-2">CONSEQUÊNCIAS</h3>
                  <p className="text-red-400 text-sm sm:text-base">{selectedObjective.consequences}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedObjective(null)}
                className="mt-6 sm:mt-8 w-full bg-yellow-600 hover:bg-yellow-500 text-black py-2 sm:py-3 bethesda-title transition text-sm sm:text-base"
              >
                FECHAR
              </button>
            </div>
          </div>
        )}

        <footer className="bg-black border-t-2 border-green-500 py-8 text-center shadow-lg shadow-green-500/30">
          <p className="text-green-400/60 pip-boy-text mb-2">
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
