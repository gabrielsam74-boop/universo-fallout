export interface Vault {
  id: string;
  number: string;
  game: string;
  location: string;
  experiment: string;
  story: string;
  outcome: string;
  population: string;
  status: 'Ativo' | 'Abandonado' | 'Destruído' | 'Selado';
}

export const vaults: Vault[] = [
  // Fallout 1
  {
    id: 'vault-13',
    number: 'Vault 13',
    game: 'Fallout 1',
    location: 'Sul da Califórnia',
    experiment: 'Isolamento prolongado - permanecer fechado por 200 anos',
    story: 'O Vault 13 foi projetado para permanecer fechado por 200 anos para estudar os efeitos do isolamento prolongado. No entanto, em 2161, apenas 84 anos após o fechamento, o chip de água quebrou, forçando o Overseer a enviar um morador (o Vault Dweller) para o mundo exterior. Após o Vault Dweller salvar o Vault e derrotar o Mestre, ele foi exilado pelo Overseer que temia que sua experiência no exterior corrompesse os outros moradores.',
    outcome: 'O Vault Dweller foi exilado. Anos depois, o Vault foi invadido pela Enclave em Fallout 2.',
    population: '1000 habitantes',
    status: 'Abandonado'
  },
  {
    id: 'vault-15',
    number: 'Vault 15',
    game: 'Fallout 1 e 2',
    location: 'Sul da Califórnia',
    experiment: 'Diversidade extrema - pessoas de diferentes ideologias',
    story: 'O Vault 15 foi povoado com pessoas de ideologias, culturas e origens extremamente diferentes. O experimento era ver se conseguiriam viver juntos. Como esperado, o Vault entrou em colapso devido a conflitos internos. Os sobreviventes se dividiram em vários grupos que formaram comunidades no wasteland, incluindo Shady Sands (que se tornou a NCR) e os Khans.',
    outcome: 'Abandonado após conflitos internos. Seus habitantes fundaram várias comunidades.',
    population: '1000 habitantes',
    status: 'Abandonado'
  },
  {
    id: 'vault-12',
    number: 'Vault 12 (Necropolis)',
    game: 'Fallout 1',
    location: 'Bakersfield, Califórnia',
    experiment: 'Porta do Vault não fecha completamente',
    story: 'O Vault 12 foi projetado com uma porta que não fecharia completamente, expondo os habitantes à radiação. Como resultado, todos os moradores se tornaram ghouls. A cidade ficou conhecida como Necropolis. Quando o Vault Dweller chegou, encontrou a cidade sob ataque de Super Mutantes liderados pelo Mestre.',
    outcome: 'Todos os habitantes se tornaram ghouls. Muitos foram mortos por Super Mutantes.',
    population: '2000 habitantes (todos ghouls)',
    status: 'Destruído'
  },

  // Fallout 2
  {
    id: 'vault-8',
    number: 'Vault 8',
    game: 'Fallout 2',
    location: 'Norte da Califórnia',
    experiment: 'Vault de controle - funcionar perfeitamente',
    story: 'O Vault 8 foi um dos poucos Vaults de controle, projetado para funcionar exatamente como prometido. Após o tempo programado, abriu e seus habitantes fundaram Vault City, uma comunidade próspera mas elitista e xenófoba. Eles usavam servos (escravos) e se consideravam superiores aos "mutantes" do wasteland.',
    outcome: 'Sucesso. Fundou Vault City, uma das comunidades mais avançadas tecnologicamente.',
    population: '1000 habitantes',
    status: 'Ativo'
  },
  {
    id: 'vault-13-fo2',
    number: 'Vault 13',
    game: 'Fallout 2',
    location: 'Sul da Califórnia',
    experiment: 'Continuação - repovoado após Fallout 1',
    story: 'Após o exílio do Vault Dweller, o Vault 13 foi repovoado. Em Fallout 2, a Enclave invadiu o Vault, capturou todos os habitantes para experimentos e deixou Deathclaws inteligentes ocuparem o local. O Chosen One encontra esses Deathclaws que desenvolveram uma sociedade pacífica.',
    outcome: 'Habitantes capturados pela Enclave. Ocupado por Deathclaws inteligentes.',
    population: 'Deathclaws inteligentes',
    status: 'Abandonado'
  },

  // Fallout 3
  {
    id: 'vault-101',
    number: 'Vault 101',
    game: 'Fallout 3',
    location: 'Capital Wasteland, Washington D.C.',
    experiment: 'Nunca abrir - isolamento permanente',
    story: 'O Vault 101 foi projetado para nunca abrir. O experimento era estudar o papel do Overseer como líder absoluto em uma sociedade isolada. O lema era "Ninguém entra, ninguém sai". Quando James (pai do Lone Wanderer) fugiu, causou uma crise. O Lone Wanderer foi forçado a fugir também, quebrando o isolamento de 200 anos.',
    outcome: 'O isolamento foi quebrado. Dependendo das escolhas do jogador, pode reabrir ou permanecer isolado.',
    population: 'Aproximadamente 100 habitantes',
    status: 'Ativo'
  },
  {
    id: 'vault-87',
    number: 'Vault 87',
    game: 'Fallout 3',
    location: 'Capital Wasteland',
    experiment: 'Testes com FEV (Forced Evolutionary Virus)',
    story: 'O Vault 87 foi usado para experimentos com o FEV, o vírus que cria Super Mutantes. Os cientistas da Vault-Tec expuseram os habitantes ao FEV, transformando-os em Super Mutantes. O Vault se tornou a fonte dos Super Mutantes da Capital Wasteland. É altamente radioativo e quase impossível de acessar pela entrada principal.',
    outcome: 'Todos os habitantes foram transformados em Super Mutantes. Fonte contínua de mutantes.',
    population: 'Super Mutantes',
    status: 'Ativo'
  },
  {
    id: 'vault-106',
    number: 'Vault 106',
    game: 'Fallout 3',
    location: 'Capital Wasteland',
    experiment: 'Drogas psicoativas no ar',
    story: 'O Vault 106 liberou drogas psicoativas no sistema de ventilação 10 dias após o fechamento. Os habitantes enlouqueceram, matando uns aos outros em alucinações violentas. Quando o Lone Wanderer entra, ainda é afetado pelas drogas remanescentes, tendo alucinações com seu pai.',
    outcome: 'Todos os habitantes morreram em violência induzida por drogas.',
    population: 'Nenhum sobrevivente',
    status: 'Abandonado'
  },
  {
    id: 'vault-108',
    number: 'Vault 108',
    game: 'Fallout 3',
    location: 'Capital Wasteland',
    experiment: 'Overseer morre, sem substituto, recursos limitados',
    story: 'O Vault 108 tinha um Overseer programado para morrer de câncer após 20 anos, sem sucessor designado. Além disso, tinha recursos limitados. Também possuía uma máquina de clonagem que criou centenas de clones de um homem chamado Gary. Os Garys enlouqueceram e mataram todos os habitantes originais.',
    outcome: 'Habitado apenas por clones insanos chamados "Gary".',
    population: 'Clones Gary',
    status: 'Abandonado'
  },
  {
    id: 'vault-112',
    number: 'Vault 112',
    game: 'Fallout 3',
    location: 'Capital Wasteland',
    experiment: 'Realidade virtual permanente',
    story: 'O Vault 112 colocou todos os habitantes em pods de realidade virtual sob controle do Dr. Stanislaus Braun. Por 200 anos, Braun torturou os habitantes em simulações, matando-os virtualmente repetidamente. O Lone Wanderer encontra seu pai preso na simulação "Tranquility Lane".',
    outcome: 'Habitantes presos em realidade virtual por 200 anos, torturados por Braun.',
    population: '85 habitantes em estase',
    status: 'Ativo'
  },

  // Fallout: New Vegas
  {
    id: 'vault-11',
    number: 'Vault 11',
    game: 'Fallout: New Vegas',
    location: 'Deserto de Mojave',
    experiment: 'Sacrificar um habitante por ano ou todos morrem',
    story: 'O Vault 11 tinha um sistema onde os habitantes deviam sacrificar uma pessoa por ano, ou o computador mataria todos. Isso criou uma sociedade distorcida onde blocos votavam para sacrificar inimigos políticos. Após anos, apenas 5 pessoas restaram. Eles se recusaram a sacrificar mais alguém. O computador revelou que era um teste - se recusassem, todos viveriam. Quatro dos cinco se suicidaram de culpa.',
    outcome: 'Apenas um sobrevivente. Um dos experimentos mais perturbadores da Vault-Tec.',
    population: '1 sobrevivente',
    status: 'Abandonado'
  },
  {
    id: 'vault-19',
    number: 'Vault 19',
    game: 'Fallout: New Vegas',
    location: 'Deserto de Mojave',
    experiment: 'Dividir habitantes em dois grupos com paranoia',
    story: 'O Vault 19 dividiu os habitantes em seção "Vermelha" e "Azul", pintando tudo nessas cores. O Overseer secretamente fomentava paranoia entre os grupos. Eventualmente, a seção Vermelha descobriu o experimento e fugiu. A seção Azul permaneceu, ainda paranoica.',
    outcome: 'Seção Vermelha fugiu. Seção Azul permaneceu paranoica.',
    population: 'Parcialmente habitado',
    status: 'Abandonado'
  },
  {
    id: 'vault-22',
    number: 'Vault 22',
    game: 'Fallout: New Vegas',
    location: 'Deserto de Mojave',
    experiment: 'Pesquisa agrícola com esporos mutantes',
    story: 'O Vault 22 pesquisava plantas para sobrevivência pós-nuclear. Desenvolveram esporos que aumentavam o crescimento, mas os esporos infectaram os habitantes, transformando-os em criaturas vegetais hostis chamadas Spore Carriers. Os sobreviventes fugiram para Zion Canyon.',
    outcome: 'Habitantes transformados em Spore Carriers. Vault infestado de plantas mutantes.',
    population: 'Spore Carriers',
    status: 'Abandonado'
  },
  {
    id: 'vault-34',
    number: 'Vault 34',
    game: 'Fallout: New Vegas',
    location: 'Deserto de Mojave',
    experiment: 'Arsenal excessivo de armas, Overseer controlador',
    story: 'O Vault 34 tinha um arsenal enorme de armas, mas um Overseer que as mantinha trancadas. Quando a radiação começou a vazar do reator, o Overseer se recusou a abrir o Vault. Houve uma rebelião sangrenta. Os rebeldes fugiram e formaram os Boomers. Os leais morreram de radiação.',
    outcome: 'Dividido em rebelião. Sobreviventes formaram os Boomers de Nellis.',
    population: 'Ghouls ferais',
    status: 'Destruído'
  },

  // Fallout 4
  {
    id: 'vault-111',
    number: 'Vault 111',
    game: 'Fallout 4',
    location: 'Commonwealth, Massachusetts',
    experiment: 'Criogenia indefinida',
    story: 'O Vault 111 foi apresentado como abrigo, mas era um experimento de criogenia. Todos os habitantes foram congelados indefinidamente. A equipe da Vault-Tec os monitoraria, mas abandonou o Vault quando o suporte acabou. Anos depois, o Instituto enviou Kellogg para sequestrar Shaun (um bebê não afetado pela radiação). Apenas o Sole Survivor acordou 210 anos depois.',
    outcome: 'Todos morreram congelados exceto o Sole Survivor e Shaun (sequestrado).',
    population: '1 sobrevivente',
    status: 'Abandonado'
  },
  {
    id: 'vault-75',
    number: 'Vault 75',
    game: 'Fallout 4',
    location: 'Commonwealth',
    experiment: 'Eugenia - criar humanos superiores',
    story: 'O Vault 75 separou crianças dos pais (que foram executados) e as criou em um programa de treinamento brutal. Aos 18 anos, as "melhores" eram usadas para reprodução genética, as outras eram executadas. O objetivo era criar uma raça superior através de gerações.',
    outcome: 'As crianças eventualmente se rebelaram e mataram os cientistas.',
    population: 'Nenhum sobrevivente',
    status: 'Abandonado'
  },
  {
    id: 'vault-81',
    number: 'Vault 81',
    game: 'Fallout 4',
    location: 'Commonwealth',
    experiment: 'Testar doenças nos habitantes',
    story: 'O Vault 81 tinha uma seção secreta onde cientistas desenvolveriam doenças e as testariam nos habitantes sem seu conhecimento. No entanto, o Overseer original descobriu e se recusou a cooperar, selando a seção secreta. O Vault funcionou normalmente e permanece habitado 200 anos depois.',
    outcome: 'Experimento nunca realizado. Vault permanece próspero e habitado.',
    population: 'Aproximadamente 50 habitantes',
    status: 'Ativo'
  },
  {
    id: 'vault-95',
    number: 'Vault 95',
    game: 'Fallout 4',
    location: 'Commonwealth',
    experiment: 'Recuperação de viciados, depois reintroduzir drogas',
    story: 'O Vault 95 foi apresentado como centro de reabilitação para viciados em drogas. Por 5 anos, os habitantes se recuperaram com sucesso. Então, a Vault-Tec secretamente liberou um esconderijo de drogas. Os habitantes recaíram violentamente, destruindo uns aos outros.',
    outcome: 'Todos morreram em violência induzida por drogas. Ocupado por Gunners.',
    population: 'Gunners (gangue)',
    status: 'Abandonado'
  },
  {
    id: 'vault-114',
    number: 'Vault 114',
    game: 'Fallout 4',
    location: 'Commonwealth (Park Street Station)',
    experiment: 'Elite rica com Overseer não qualificado',
    story: 'O Vault 114 seria povoado pela elite rica de Boston, mas com um Overseer deliberadamente não qualificado (um criminoso). O objetivo era estudar conflito de classes. O Vault nunca foi terminado devido às bombas. Mais tarde, foi ocupado pelos Triggermen, uma gangue que mantém Nick Valentine prisioneiro.',
    outcome: 'Nunca completado. Ocupado por gangue Triggermen.',
    population: 'Triggermen',
    status: 'Abandonado'
  },

  // Fallout 76
  {
    id: 'vault-76',
    number: 'Vault 76',
    game: 'Fallout 76',
    location: 'Appalachia, Virgínia Ocidental',
    experiment: 'Vault de controle - funcionar perfeitamente',
    story: 'O Vault 76 foi um dos 17 Vaults de controle, projetado para funcionar exatamente como prometido. Abriu após 25 anos (Reclamation Day) em 2102, liberando seus habitantes para reconstruir a América. Os residentes eram os "melhores e mais brilhantes" da América, escolhidos para serem os primeiros a recolonizar.',
    outcome: 'Sucesso total. Habitantes saíram para reconstruir Appalachia.',
    population: 'Evacuado (jogadores)',
    status: 'Abandonado'
  },
  {
    id: 'vault-63',
    number: 'Vault 63',
    game: 'Fallout 76',
    location: 'Appalachia',
    experiment: 'Desconhecido - permanece selado',
    story: 'O Vault 63 permanece misteriosamente selado. Sua porta nunca foi aberta e não há informações sobre seus habitantes ou experimento. É um dos mistérios de Appalachia.',
    outcome: 'Desconhecido - ainda selado.',
    population: 'Desconhecido',
    status: 'Selado'
  },
  {
    id: 'vault-94',
    number: 'Vault 94',
    game: 'Fallout 76',
    location: 'Appalachia',
    experiment: 'Pacifistas extremos',
    story: 'O Vault 94 foi povoado por pacifistas extremos que queriam usar o G.E.C.K. para restaurar a natureza. Quando abriram após um ano, tentaram usar o G.E.C.K., mas causaram mutações descontroladas nas plantas. Foram atacados por raiders e o Vault foi inundado, espalhando radiação.',
    outcome: 'Destruído por raiders. G.E.C.K. causou mutações descontroladas.',
    population: 'Nenhum sobrevivente',
    status: 'Destruído'
  },
  {
    id: 'vault-96',
    number: 'Vault 96',
    game: 'Fallout 76',
    location: 'Appalachia',
    experiment: 'Criopreservação de espécies animais',
    story: 'O Vault 96 foi projetado para preservar espécies animais através de criogenia. Os habitantes eram cientistas que cuidariam dos animais. No entanto, um dos cientistas enlouqueceu e sabotou os sistemas, liberando criaturas mutantes que mataram todos.',
    outcome: 'Todos mortos por animais mutantes liberados.',
    population: 'Criaturas mutantes',
    status: 'Abandonado'
  }
];

// Agrupar Vaults por jogo
export const vaultsByGame = {
  'fallout-1': vaults.filter(v => v.game.includes('Fallout 1')),
  'fallout-2': vaults.filter(v => v.game.includes('Fallout 2')),
  'fallout-3': vaults.filter(v => v.game === 'Fallout 3'),
  'fallout-nv': vaults.filter(v => v.game === 'Fallout: New Vegas'),
  'fallout-4': vaults.filter(v => v.game === 'Fallout 4'),
  'fallout-76': vaults.filter(v => v.game === 'Fallout 76')
};
