import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';

export default function SeriePage() {
  const [showStorySpoilers, setShowStorySpoilers] = useState(false);
  const [showVaultsSpoilers, setShowVaultsSpoilers] = useState(false);

  return (
    <>
      <Head>
        <title>Fallout - Série de TV (2024)</title>
        <meta name="description" content="Série de TV Fallout da Amazon Prime Video" />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-end pt-20 pb-8 sm:pb-12 px-4"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(/images/fallout-serie.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        >
          <div className="container mx-auto relative z-10">
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block text-sm sm:text-base">
              ← Voltar para início
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl bethesda-title text-yellow-500 mb-3 sm:mb-4 glow-yellow">
              FALLOUT
            </h1>
            <p className="text-2xl sm:text-3xl bethesda-title text-yellow-400 mb-3 sm:mb-4">SÉRIE DE TV (2024)</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-base sm:text-lg text-gray-300">
              <span>📺 Amazon Prime Video</span>
              <span>📅 Cronologia: 2296</span>
              <span className="hidden sm:inline">📍 Los Angeles, Califórnia</span>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          {/* Sinopse Section (Sem Spoilers) */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              SINOPSE
            </h2>
            <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                A série acompanha três protagonistas cujos destinos se entrelaçam no mundo devastado de Fallout. 
                Lucy MacLean, uma jovem idealista do Vault 33, é forçada a sair para a superfície pela primeira vez 
                em busca de seu pai sequestrado. Maximus, um escudeiro da Brotherhood of Steel, busca glória e redenção. 
                E The Ghoul, um caçador de recompensas mutante com um passado misterioso de 200 anos atrás.
              </p>
            </div>
          </section>

          {/* Info Grid */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-3 sm:mb-4">
                  PLATAFORMA
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">Amazon Prime Video</p>
              </div>

              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-3 sm:mb-4">
                  LOCALIZAÇÃO
                </h3>
                <p className="text-gray-300 text-base sm:text-lg">Los Angeles, Califórnia</p>
              </div>
            </div>
          </section>

          {/* Temporadas */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              TEMPORADAS
            </h2>
            <div className="space-y-6">
              {/* Temporada 1 */}
              <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-4">
                  <h3 className="text-2xl sm:text-3xl bethesda-title text-yellow-400">
                    TEMPORADA 1
                  </h3>
                  <span className="px-3 sm:px-4 py-1 text-xs sm:text-sm bethesda-title bg-green-600">
                    Lançada
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Lançamento:</span>
                    <p className="text-gray-300 text-sm sm:text-base">10 de abril de 2024</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Episódios:</span>
                    <p className="text-gray-300 text-sm sm:text-base">8 episódios</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Duração média:</span>
                    <p className="text-gray-300 text-sm sm:text-base">50-65 minutos</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-yellow-500 bethesda-title text-base sm:text-lg mb-2">
                    RESUMO:
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    A primeira temporada apresenta Lucy MacLean saindo do Vault 33 pela primeira vez para resgatar 
                    seu pai sequestrado. Sua jornada pela superfície devastada a coloca em contato com Maximus, 
                    um aspirante a cavaleiro da Brotherhood of Steel, e The Ghoul, um caçador de recompensas com 
                    segredos do passado pré-guerra.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-yellow-500 bethesda-title text-xs sm:text-sm mb-2">
                    RECEPÇÃO:
                  </h4>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl text-yellow-500 bethesda-title">94%</div>
                      <p className="text-gray-400 text-xs sm:text-sm">Rotten Tomatoes</p>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl text-yellow-500 bethesda-title">89%</div>
                      <p className="text-gray-400 text-xs sm:text-sm">Audiência</p>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl text-yellow-500 bethesda-title">8.5/10</div>
                      <p className="text-gray-400 text-xs sm:text-sm">IMDb</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Temporada 2 */}
              <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-4">
                  <h3 className="text-2xl sm:text-3xl bethesda-title text-yellow-400">
                    TEMPORADA 2
                  </h3>
                  <span className="px-3 sm:px-4 py-1 text-xs sm:text-sm bethesda-title bg-blue-600">
                    Em Produção
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Previsão de Lançamento:</span>
                    <p className="text-gray-300 text-sm sm:text-base">2025</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Status:</span>
                    <p className="text-gray-300 text-sm sm:text-base">Confirmada e em produção</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-yellow-500 bethesda-title text-base sm:text-lg mb-2">
                    O QUE ESPERAR:
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    A segunda temporada foi confirmada antes mesmo da estreia da primeira, demonstrando a confiança 
                    da Amazon no projeto. Espera-se que continue explorando as consequências dos eventos da primeira 
                    temporada e aprofunde os mistérios sobre a Vault-Tec Corporation e o verdadeiro propósito dos Vaults.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-yellow-500 bethesda-title text-xs sm:text-sm mb-2">
                    NOVIDADES:
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• Elenco principal confirmado para retornar</li>
                    <li>• Possível exploração de novas regiões do wasteland</li>
                    <li>• Mais conexões com os jogos da franquia</li>
                    <li>• Aprofundamento na história pré-guerra</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Elenco e Produção */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h4 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-3 sm:mb-4">ELENCO PRINCIPAL</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li>• <span className="text-yellow-500">Ella Purnell</span> como Lucy MacLean</li>
                  <li>• <span className="text-yellow-500">Aaron Moten</span> como Maximus</li>
                  <li>• <span className="text-yellow-500">Walton Goggins</span> como The Ghoul / Cooper Howard</li>
                  <li>• <span className="text-yellow-500">Kyle MacLachlan</span> como Hank MacLean</li>
                  <li>• <span className="text-yellow-500">Moisés Arias</span> como Norm MacLean</li>
                </ul>
              </div>

              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h4 className="text-xl sm:text-2xl bethesda-title text-yellow-400 mb-3 sm:mb-4">PRODUÇÃO</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                  <li>• <span className="text-yellow-500">Criadores:</span> Graham Wagner e Geneva Robertson-Dworet</li>
                  <li>• <span className="text-yellow-500">Produtores Executivos:</span> Jonathan Nolan, Lisa Joy, Todd Howard</li>
                  <li>• <span className="text-yellow-500">Estúdio:</span> Kilter Films, Bethesda Game Studios</li>
                  <li>• <span className="text-yellow-500">Direção:</span> Jonathan Nolan (episódios 1, 3, 8)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* História Detalhada com Spoilers */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              HISTÓRIA DETALHADA
            </h2>
            <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
              {!showStorySpoilers ? (
                <div className="text-center py-6 sm:py-8">
                  <p className="text-red-400 text-lg sm:text-xl mb-4 sm:mb-6 bethesda-title">⚠️ ATENÇÃO: SPOILERS PESADOS ⚠️</p>
                  <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Esta seção contém spoilers importantes da história da série.</p>
                  <button
                    onClick={() => setShowStorySpoilers(true)}
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-6 sm:px-8 py-2 sm:py-3 bethesda-title transition text-sm sm:text-base"
                  >
                    REVELAR HISTÓRIA
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Em 2296, 219 anos após a Grande Guerra, Lucy MacLean vive uma vida aparentemente perfeita no Vault 33. 
                    Quando raiders atacam o vault e sequestram seu pai, o Overseer Hank MacLean, Lucy parte para a superfície 
                    devastada pela primeira vez. Sua jornada a leva através da Califórnia pós-nuclear, onde ela descobre 
                    verdades perturbadoras sobre os Vaults, a Vault-Tec Corporation e o verdadeiro passado de sua família.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Paralelamente, Maximus, um órfão que perdeu sua família para raiders, busca se tornar um cavaleiro da 
                    Brotherhood of Steel. Quando recebe a chance de usar uma Power Armor, ele se vê envolvido em uma missão 
                    para recuperar um artefato valioso que pode mudar o equilíbrio de poder no wasteland.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                    The Ghoul, revelado como Cooper Howard, um ator de faroeste pré-guerra que se tornou um Ghoul após a 
                    Grande Guerra, possui conhecimento crucial sobre os eventos que levaram à destruição do mundo. Sua busca 
                    pessoal o coloca em rota de colisão com Lucy e Maximus, revelando uma conspiração que remonta aos dias 
                    antes das bombas caírem.
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

          {/* Conexões com os Jogos */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              CONEXÕES COM OS JOGOS
            </h2>
            <div className="bg-gray-900/80 border border-yellow-600/30 p-6 sm:p-8">
              <ul className="space-y-2 sm:space-y-3 text-gray-300 text-base sm:text-lg">
                <li>• Referências diretas a eventos de Fallout 1, 2 e New Vegas</li>
                <li>• Aparição da New California Republic (NCR)</li>
                <li>• Brotherhood of Steel com suas Power Armors icônicas</li>
                <li>• Criaturas clássicas: Ghouls, Super Mutants, Yao Guai, Gulpers</li>
                <li>• Vault-Tec e seus experimentos sociais</li>
                <li>• Pip-Boys, Stimpaks, RadAway e outros itens icônicos</li>
                <li>• Música clássica dos anos 40-50 característica da série</li>
                <li>• Nuka-Cola e outras marcas do universo Fallout</li>
              </ul>
            </div>
          </section>

          {/* Vaults Section com Spoilers */}
          <section className="max-w-6xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              VAULTS APRESENTADOS
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                    <h5 className="text-xl sm:text-2xl bethesda-title text-yellow-500 mb-2 sm:mb-3">VAULT 33</h5>
                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Lar de Lucy MacLean</p>
                    <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Um dos três vaults conectados (31, 32, 33) com um experimento secreto envolvendo 
                      casamentos arranjados e controle populacional.
                    </p>
                    <div className="border-t border-gray-700 pt-3">
                      <p className="text-red-400 text-xs sm:text-sm">
                        Experimento: Controle populacional através de casamentos entre vaults conectados, 
                        com supervisão secreta do Vault 31.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                    <h5 className="text-xl sm:text-2xl bethesda-title text-yellow-500 mb-2 sm:mb-3">VAULT 32</h5>
                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Vault vizinho ao 33</p>
                    <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Conectado ao Vault 33, mas algo terrível aconteceu com seus habitantes. 
                      Seus segredos são revelados ao longo da temporada.
                    </p>
                    <div className="border-t border-gray-700 pt-3">
                      <p className="text-red-400 text-xs sm:text-sm">
                        Resultado: Todos os habitantes foram mortos em circunstâncias misteriosas, 
                        revelando falhas no experimento da Vault-Tec.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                    <h5 className="text-xl sm:text-2xl bethesda-title text-yellow-500 mb-2 sm:mb-3">VAULT 4</h5>
                    <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Vault de cientistas</p>
                    <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      Um vault habitado por descendentes de cientistas da Vault-Tec que se rebelaram 
                      contra os experimentos cruéis.
                    </p>
                    <div className="border-t border-gray-700 pt-3">
                      <p className="text-red-400 text-xs sm:text-sm">
                        Experimento: Modificação genética e experimentos em humanos. Os descendentes 
                        dos cientistas criaram uma sociedade mais humana após a rebelião.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Temas */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl bethesda-title text-yellow-500 mb-4 sm:mb-6">
              TEMAS PRINCIPAIS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h5 className="text-yellow-500 bethesda-title text-lg sm:text-xl mb-2 sm:mb-3">⚛️ Capitalismo e Ganância</h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  A série explora como a ganância corporativa da Vault-Tec levou à destruição do mundo.
                </p>
              </div>
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h5 className="text-yellow-500 bethesda-title text-lg sm:text-xl mb-2 sm:mb-3">🎭 Inocência vs Realidade</h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  Lucy representa a inocência dos vaults confrontando a brutalidade da superfície.
                </p>
              </div>
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h5 className="text-yellow-500 bethesda-title text-lg sm:text-xl mb-2 sm:mb-3">🔬 Experimentos Sociais</h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  Os experimentos da Vault-Tec e suas consequências para a humanidade.
                </p>
              </div>
              <div className="bg-gray-900/80 border border-yellow-600/30 p-5 sm:p-6">
                <h5 className="text-yellow-500 bethesda-title text-lg sm:text-xl mb-2 sm:mb-3">💀 Sobrevivência e Moralidade</h5>
                <p className="text-gray-300 text-sm sm:text-base">
                  Até onde você iria para sobreviver no wasteland?
                </p>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-yellow-600 p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl bethesda-title text-black mb-3 sm:mb-4">
                EXPLORE OS JOGOS
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
