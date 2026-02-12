export interface FalloutGame {
  id: string;
  title: string;
  year: number;
  chronology: string;
  shortDesc: string;
  fullStory: string;
  location: string;
  protagonist: string;
  mainFactions: string[];
  keyEvents: string[];
  image: string;
  rating: number; // Nota do Metacritic (0-100)
}

export const falloutGames: FalloutGame[] = [
  {
    id: 'fallout-1',
    title: 'Fallout',
    year: 1997,
    chronology: '2161',
    shortDesc: 'O jogo que iniciou tudo. Saia do Vault 13 para salvar seu povo.',
    fullStory: 'Em 2161, 84 anos após a Grande Guerra, o Vault 13 enfrenta uma crise: o chip de água está quebrado. Você é escolhido como o Vault Dweller para sair ao mundo exterior e encontrar um substituto. Sua jornada o leva através da Califórnia pós-nuclear, onde você descobre o Mestre e seu exército de Super Mutantes, que planeja transformar toda a humanidade em mutantes para "salvar" a espécie.',
    location: 'Califórnia do Sul',
    protagonist: 'Vault Dweller',
    mainFactions: ['Vault 13', 'Brotherhood of Steel', 'Exército do Mestre', 'Hub'],
    keyEvents: [
      'Saída do Vault 13 em busca do chip de água',
      'Descoberta da Brotherhood of Steel',
      'Encontro com o Mestre na Base Militar de Mariposa',
      'Destruição dos planos do Mestre',
      'Exílio do Vault 13'
    ],
    image: '/images/games/fallout-1.jpg',
    rating: 89
  },
  {
    id: 'fallout-2',
    title: 'Fallout 2',
    year: 1998,
    chronology: '2241',
    shortDesc: 'O neto do Vault Dweller deve salvar sua tribo da extinção.',
    fullStory: 'Em 2241, 80 anos após os eventos do primeiro jogo, você é o Chosen One, descendente do Vault Dweller original. Sua tribo, fundada pelo Vault Dweller em Arroyo, está morrendo de fome e seca. Você deve encontrar o G.E.C.K. (Garden of Eden Creation Kit) para salvar seu povo. Sua jornada revela a Enclave, remanescentes do governo dos EUA, que planejam exterminar todos os "mutantes" (qualquer um afetado pela radiação) e repopular a Terra.',
    location: 'Califórnia do Norte e Nevada',
    protagonist: 'Chosen One',
    mainFactions: ['Arroyo', 'NCR', 'Vault City', 'Enclave', 'New Reno'],
    keyEvents: [
      'Busca pelo G.E.C.K.',
      'Descoberta da Enclave',
      'Infiltração na Plataforma Petrolífera da Enclave',
      'Destruição dos planos genocidas da Enclave',
      'Salvação de Arroyo'
    ],
    image: '/images/games/fallout-2.jpg',
    rating: 86
  },
  {
    id: 'fallout-3',
    title: 'Fallout 3',
    year: 2008,
    chronology: '2277',
    shortDesc: 'Saia do Vault 101 e procure seu pai na Capital Wasteland.',
    fullStory: 'Em 2277, você é o Lone Wanderer, criado no Vault 101 em Washington D.C. Quando seu pai foge misteriosamente do Vault, você é forçado a segui-lo para a Capital Wasteland devastada. Você descobre que ele está trabalhando no Projeto Pureza, uma iniciativa para purificar toda a água da região. A Enclave retorna, liderada pelo Presidente John Henry Eden, tentando envenenar a água purificada para eliminar todos os mutantes.',
    location: 'Washington D.C. e arredores',
    protagonist: 'Lone Wanderer',
    mainFactions: ['Vault 101', 'Brotherhood of Steel', 'Enclave', 'Rivet City', 'Megaton'],
    keyEvents: [
      'Fuga do Vault 101',
      'Busca por James (pai)',
      'Descoberta do Projeto Pureza',
      'Batalha contra a Enclave',
      'Ativação do purificador de água'
    ],
    image: '/images/games/fallout-3.jpg',
    rating: 91
  },
  {
    id: 'fallout-nv',
    title: 'Fallout: New Vegas',
    year: 2010,
    chronology: '2281',
    shortDesc: 'Sobreviva a um tiro na cabeça e decida o destino de New Vegas.',
    fullStory: 'Em 2281, você é um Courier (mensageiro) que foi baleado na cabeça e deixado para morrer no deserto de Mojave enquanto entregava um misterioso chip de platina. Após sobreviver milagrosamente, você busca vingança e descobre que está no centro de uma guerra pelo controle de New Vegas e da Represa Hoover entre a NCR (New California Republic), a Legião de Caesar e o enigmático Mr. House.',
    location: 'Deserto de Mojave, Nevada',
    protagonist: 'The Courier',
    mainFactions: ['NCR', 'Legião de Caesar', 'Mr. House', 'Yes Man', 'Brotherhood of Steel'],
    keyEvents: [
      'Tiro na cabeça por Benny',
      'Recuperação em Goodsprings',
      'Busca pelo chip de platina',
      'Escolha de facção para a Batalha da Represa Hoover',
      'Decisão do futuro de New Vegas'
    ],
    image: '/images/games/fallout-nv.jpg',
    rating: 84
  },
  {
    id: 'fallout-4',
    title: 'Fallout 4',
    year: 2015,
    chronology: '2287',
    shortDesc: 'Acorde 210 anos depois e procure seu filho na Commonwealth.',
    fullStory: 'Em 2077, você é um residente de Sanctuary Hills que entra no Vault 111 com sua família momentos antes das bombas nucleares. Congelado criogenicamente, você acorda 210 anos depois em 2287 para descobrir que seu filho Shaun foi sequestrado e seu cônjuge assassinado. Sua busca por Shaun revela o Instituto, uma organização científica subterrânea que cria Synths (androides indistinguíveis de humanos) e manipula a Commonwealth de cima.',
    location: 'Boston e Commonwealth de Massachusetts',
    protagonist: 'Sole Survivor',
    mainFactions: ['Minutemen', 'Brotherhood of Steel', 'Railroad', 'Institute'],
    keyEvents: [
      'Entrada no Vault 111 durante as bombas',
      'Despertar 210 anos depois',
      'Assassinato do cônjuge e sequestro de Shaun',
      'Descoberta do Instituto',
      'Revelação sobre Shaun/Father',
      'Escolha do destino da Commonwealth'
    ],
    image: '/images/games/fallout-4.jpg',
    rating: 87
  },
  {
    id: 'fallout-76',
    title: 'Fallout 76',
    year: 2018,
    chronology: '2102',
    shortDesc: 'Seja um dos primeiros a sair dos Vaults e reconstruir a América.',
    fullStory: 'Em 2102, apenas 25 anos após as bombas, você emerge do Vault 76 em Reclamation Day na Virgínia Ocidental. Como um dos primeiros a sair dos Vaults, você deve reconstruir a América e descobrir o que aconteceu com os residentes de Appalachia. Você enfrenta a Scorched Plague, uma doença que transforma humanos em criaturas hostis, e descobre os segredos das várias facções que tentaram sobreviver.',
    location: 'Appalachia, Virgínia Ocidental',
    protagonist: 'Vault 76 Resident',
    mainFactions: ['Vault 76', 'Responders', 'Free States', 'Brotherhood of Steel', 'Enclave'],
    keyEvents: [
      'Reclamation Day - saída do Vault 76',
      'Descoberta da Scorched Plague',
      'Investigação do destino dos Responders',
      'Encontro com a Enclave em Appalachia',
      'Lançamento de mísseis nucleares',
      'Chegada dos Settlers e Raiders'
    ],
    image: '/images/games/fallout-76.jpg',
    rating: 52
  }
];

export const timeline = [
  { year: '2077', event: 'Grande Guerra', description: 'Bombas nucleares devastam o mundo em 23 de outubro' },
  { year: '2102', event: 'Fallout 76', description: 'Vault 76 abre - primeiros a sair dos Vaults' },
  { year: '2161', event: 'Fallout 1', description: 'Vault Dweller sai do Vault 13' },
  { year: '2241', event: 'Fallout 2', description: 'Chosen One busca o G.E.C.K.' },
  { year: '2277', event: 'Fallout 3', description: 'Lone Wanderer explora Capital Wasteland' },
  { year: '2281', event: 'Fallout: New Vegas', description: 'Courier decide o destino de New Vegas' },
  { year: '2287', event: 'Fallout 4', description: 'Sole Survivor acorda e busca Shaun' },
  { year: '2296', event: 'Série Fallout (TV)', description: 'Lucy sai do Vault 33 em busca de seu pai na superfície' }
];
