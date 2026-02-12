export interface Faction {
  id: string;
  name: string;
  game: string;
  description: string;
  ideology: string;
  leader: string;
  goals: string;
  status: string;
  location: string;
}

export const factions: Record<string, Faction[]> = {
  'fallout-1': [
    {
      id: 'vault-13-f1',
      name: 'Vault 13',
      game: 'Fallout 1',
      description: 'Seu lar original, um Vault-Tec Vault projetado para permanecer fechado por 200 anos. Uma comunidade isolada que nunca conheceu o mundo exterior.',
      ideology: 'Isolacionismo e preservação da vida pré-guerra',
      leader: 'Overseer Jacoren',
      goals: 'Sobreviver isolado do mundo exterior e manter a pureza da sociedade do Vault',
      status: 'Ativo mas ameaçado pela falta de água',
      location: 'Sul da Califórnia'
    },
    {
      id: 'brotherhood-f1',
      name: 'Brotherhood of Steel',
      game: 'Fallout 1',
      description: 'Uma ordem tecno-religiosa de ex-militares que se dedicam a preservar tecnologia pré-guerra. Fundada por Roger Maxson após desertar do Exército dos EUA ao descobrir experimentos com FEV.',
      ideology: 'Preservação e controle de tecnologia avançada',
      leader: 'High Elder Maxson',
      goals: 'Coletar e proteger tecnologia perigosa, impedir que caia em mãos erradas',
      status: 'Isolados em Lost Hills, focados em tecnologia',
      location: 'Lost Hills Bunker, Califórnia'
    },
    {
      id: 'master-army-f1',
      name: 'Exército do Mestre',
      game: 'Fallout 1',
      description: 'Um exército de Super Mutantes liderado pelo Mestre, um ser psíquico mutante que acredita que transformar toda a humanidade em Super Mutantes é a única forma de salvar a espécie da extinção.',
      ideology: 'Evolução forçada através do FEV - "Unidade através de mutação"',
      leader: 'O Mestre (Richard Grey)',
      goals: 'Transformar toda a humanidade em Super Mutantes para criar uma raça superior e unificada',
      status: 'Crescendo rapidamente, conquistando o wasteland',
      location: 'Base Militar de Mariposa e Catedral em Los Angeles'
    },
    {
      id: 'hub-f1',
      name: 'Hub',
      game: 'Fallout 1',
      description: 'O maior centro comercial do sul da Califórnia, construído nas ruínas de Los Angeles. Uma cidade mercantil controlada por caravanas e comerciantes.',
      ideology: 'Capitalismo livre e comércio',
      leader: 'Conselho de comerciantes',
      goals: 'Expandir rotas comerciais e acumular riqueza',
      status: 'Próspero mas ameaçado por mutantes e raiders',
      location: 'Ruínas de Los Angeles'
    }
  ],
  'fallout-2': [
    {
      id: 'arroyo-f2',
      name: 'Arroyo',
      game: 'Fallout 2',
      description: 'Uma tribo primitiva fundada pelo Vault Dweller original após seu exílio do Vault 13. Vivem de forma tribal, mantendo algumas tradições pré-guerra misturadas com cultura tribal.',
      ideology: 'Tribalismo e conexão com a natureza',
      leader: 'Elder (sua avó, filha do Vault Dweller)',
      goals: 'Sobreviver à seca e fome, encontrar o G.E.C.K.',
      status: 'À beira da extinção devido à seca',
      location: 'Norte da Califórnia'
    },
    {
      id: 'ncr-f2',
      name: 'NCR (New California Republic)',
      game: 'Fallout 2',
      description: 'Uma república democrática em crescimento, fundada a partir de Shady Sands. A maior nação organizada do wasteland, tentando restaurar a civilização pré-guerra.',
      ideology: 'Democracia, lei e ordem, expansionismo',
      leader: 'Presidente Tandi',
      goals: 'Expandir território, estabelecer lei e ordem, restaurar a civilização',
      status: 'Em expansão, a nação mais poderosa da Califórnia',
      location: 'Shady Sands e territórios anexados'
    },
    {
      id: 'vault-city-f2',
      name: 'Vault City',
      game: 'Fallout 2',
      description: 'Uma cidade-estado tecnologicamente avançada fundada pelos habitantes do Vault 8. Xenófoba e elitista, usa "servos" (escravos) e se considera superior aos "mutantes" do wasteland.',
      ideology: 'Tecnocracia, pureza genética, isolacionismo',
      leader: 'First Citizen Lynette',
      goals: 'Manter pureza genética e superioridade tecnológica',
      status: 'Próspera mas isolada e arrogante',
      location: 'Norte da Califórnia'
    },
    {
      id: 'enclave-f2',
      name: 'Enclave',
      game: 'Fallout 2',
      description: 'Remanescentes do governo dos Estados Unidos que se refugiaram em uma plataforma petrolífera. Acreditam ser os únicos humanos "puros" e planejam exterminar todos os "mutantes" (qualquer um afetado pela radiação).',
      ideology: 'Supremacia humana pura, genocídio dos "mutantes"',
      leader: 'Presidente Dick Richardson',
      goals: 'Exterminar toda vida "mutante" e recolonizar a América com humanos puros',
      status: 'Poderosos e tecnologicamente superiores, preparando genocídio',
      location: 'Plataforma Petrolífera no Pacífico'
    },
    {
      id: 'new-reno-f2',
      name: 'New Reno',
      game: 'Fallout 2',
      description: 'Uma cidade do crime controlada por famílias mafiosas. Cheia de cassinos, prostituição, drogas e violência. O lado sombrio do wasteland.',
      ideology: 'Crime organizado, anarquia capitalista',
      leader: 'Quatro famílias: Mordino, Bishop, Salvatore, Wright',
      goals: 'Controlar o comércio de drogas e armas, dominar New Reno',
      status: 'Guerra entre famílias pelo controle',
      location: 'Ruínas de Reno, Nevada'
    }
  ],
  'fallout-3': [
    {
      id: 'vault-101-f3',
      name: 'Vault 101',
      game: 'Fallout 3',
      description: 'Seu lar, um Vault projetado para nunca abrir. Uma sociedade fechada onde o Overseer tem poder absoluto e o lema é "Ninguém entra, ninguém sai".',
      ideology: 'Isolacionismo extremo, autoridade absoluta do Overseer',
      leader: 'Overseer Alphonse Almodovar',
      goals: 'Manter o Vault fechado e isolado para sempre',
      status: 'Em crise após a fuga de James',
      location: 'Capital Wasteland'
    },
    {
      id: 'brotherhood-f3',
      name: 'Brotherhood of Steel',
      game: 'Fallout 3',
      description: 'Capítulo da Costa Leste liderado por Elder Lyons, que rompeu com a Brotherhood tradicional para proteger os habitantes do wasteland ao invés de apenas coletar tecnologia.',
      ideology: 'Proteção dos inocentes, combate a mutantes e Enclave',
      leader: 'Elder Owyn Lyons',
      goals: 'Proteger a Capital Wasteland, destruir Super Mutantes e a Enclave',
      status: 'Divididos - Outcasts rejeitam a nova missão de Lyons',
      location: 'The Citadel (Pentágono)'
    },
    {
      id: 'enclave-f3',
      name: 'Enclave',
      game: 'Fallout 3',
      description: 'Retornam após a destruição da plataforma petrolífera, agora liderados pelo Presidente John Henry Eden (na verdade uma IA). Ainda obcecados com pureza genética.',
      ideology: 'Supremacia humana pura, extermínio de mutantes',
      leader: 'Presidente John Henry Eden (IA) e Coronel Autumn',
      goals: 'Controlar o Projeto Pureza e envenenar a água para matar mutantes',
      status: 'Poderosos, controlam tecnologia avançada',
      location: 'Raven Rock'
    },
    {
      id: 'rivet-city-f3',
      name: 'Rivet City',
      game: 'Fallout 3',
      description: 'A maior cidade da Capital Wasteland, construída em um porta-aviões encalhado. Um centro de comércio e ciência relativamente seguro.',
      ideology: 'Democracia, comércio, progresso científico',
      leader: 'Conselho eleito',
      goals: 'Manter segurança e prosperidade, avançar cientificamente',
      status: 'Estável e próspera',
      location: 'Porta-aviões no Rio Potomac'
    },
    {
      id: 'megaton-f3',
      name: 'Megaton',
      game: 'Fallout 3',
      description: 'Uma cidade construída ao redor de uma bomba nuclear não detonada. Comunidade de sobreviventes que transformaram sucata em um lar.',
      ideology: 'Sobrevivência, comunidade, adoração da bomba (Igreja de Atom)',
      leader: 'Sheriff Lucas Simms',
      goals: 'Sobreviver e prosperar apesar da bomba',
      status: 'Vulnerável mas resiliente',
      location: 'Capital Wasteland'
    }
  ],
  'fallout-nv': [
    {
      id: 'ncr-nv',
      name: 'NCR (New California Republic)',
      game: 'Fallout: New Vegas',
      description: 'Agora uma grande república expansionista, a NCR se espalhou para o Mojave buscando controlar a Represa Hoover e seus recursos. Sobrecarregada e burocrática.',
      ideology: 'Democracia, expansionismo, lei e ordem',
      leader: 'Presidente Aaron Kimball',
      goals: 'Controlar a Represa Hoover e anexar New Vegas',
      status: 'Esticada demais, lutando contra a Legião',
      location: 'Camp McCarran, Represa Hoover'
    },
    {
      id: 'legion-nv',
      name: 'Legião de Caesar',
      game: 'Fallout: New Vegas',
      description: 'Um império totalitário baseado na Roma Antiga, construído através da conquista e escravização de tribos. Brutal, eficiente e temido.',
      ideology: 'Totalitarismo, escravidão, culto à personalidade de Caesar',
      leader: 'Caesar (Edward Sallow)',
      goals: 'Conquistar New Vegas e a Represa Hoover, destruir a NCR',
      status: 'Poderosos mas dependentes de Caesar',
      location: 'Fortification Hill'
    },
    {
      id: 'house-nv',
      name: 'Mr. House',
      game: 'Fallout: New Vegas',
      description: 'Robert House, um gênio pré-guerra que se manteve vivo por 200 anos através de tecnologia. Controla New Vegas através de exércitos de Securitrons.',
      ideology: 'Autocracia tecnocrática, capitalismo, progresso',
      leader: 'Robert House',
      goals: 'Manter independência de New Vegas, expulsar NCR e Legião',
      status: 'Controlando New Vegas mas ameaçado',
      location: 'Lucky 38 Casino'
    },
    {
      id: 'yes-man-nv',
      name: 'Yes Man / Independente',
      game: 'Fallout: New Vegas',
      description: 'Um Securitron reprogramado por Benny para tomar controle de New Vegas. Pode ajudar o Courier a conquistar New Vegas de forma independente.',
      ideology: 'Independência, anarquia ou autocracia (depende do Courier)',
      leader: 'The Courier (você)',
      goals: 'Libertar New Vegas de todas as facções',
      status: 'Plano secreto de Benny',
      location: 'The Tops Casino'
    },
    {
      id: 'brotherhood-nv',
      name: 'Brotherhood of Steel',
      game: 'Fallout: New Vegas',
      description: 'Capítulo do Mojave, isolado em um bunker após guerra com a NCR. Tradicionalistas que focam em tecnologia, mas quase extintos.',
      ideology: 'Preservação de tecnologia, isolacionismo',
      leader: 'Elder McNamara',
      goals: 'Sobreviver, coletar tecnologia',
      status: 'À beira da extinção, escondidos',
      location: 'Hidden Valley Bunker'
    }
  ],
  'fallout-4': [
    {
      id: 'minutemen-f4',
      name: 'Minutemen',
      game: 'Fallout 4',
      description: 'Uma milícia de cidadãos dedicada a proteger os assentamentos da Commonwealth. Quase extintos após traição em Quincy, você pode reconstruí-los.',
      ideology: 'Democracia, proteção mútua, ajuda aos necessitados',
      leader: 'Preston Garvey (depois você)',
      goals: 'Proteger assentamentos, reconstruir a Commonwealth',
      status: 'Quase extintos, precisam ser reconstruídos',
      location: 'Sanctuary Hills, The Castle'
    },
    {
      id: 'brotherhood-f4',
      name: 'Brotherhood of Steel',
      game: 'Fallout 4',
      description: 'Retornam à Costa Leste com o Prydwen, um dirigível. Sob Elder Maxson, voltaram à ideologia tradicional: destruir abominações e controlar tecnologia.',
      ideology: 'Destruição de abominações (Synths, Super Mutantes), controle de tecnologia',
      leader: 'Elder Arthur Maxson',
      goals: 'Destruir o Instituto e todos os Synths',
      status: 'Poderosos, tecnologicamente superiores',
      location: 'The Prydwen, Boston Airport'
    },
    {
      id: 'railroad-f4',
      name: 'The Railroad',
      game: 'Fallout 4',
      description: 'Uma organização secreta dedicada a libertar Synths do Instituto. Acreditam que Synths são sencientes e merecem liberdade.',
      ideology: 'Libertação de Synths, direitos dos sintéticos',
      leader: 'Desdemona',
      goals: 'Libertar Synths, destruir o Instituto',
      status: 'Secretos, constantemente caçados pelo Instituto',
      location: 'The Old North Church'
    },
    {
      id: 'institute-f4',
      name: 'The Institute',
      game: 'Fallout 4',
      description: 'Descendentes do MIT, vivem em uma cidade subterrânea tecnologicamente avançada. Criam Synths e manipulam a Commonwealth de cima, vistos como o "bicho-papão".',
      ideology: 'Progresso científico acima de tudo, isolacionismo',
      leader: 'Father (Shaun - seu filho)',
      goals: 'Avançar ciência, controlar a Commonwealth através de Synths',
      status: 'Tecnologicamente supremos mas isolados',
      location: 'Subterrâneo, acessível por teletransporte'
    }
  ],
  'fallout-76': [
    {
      id: 'vault-76-residents',
      name: 'Vault 76 Residents',
      game: 'Fallout 76',
      description: 'Os primeiros a sair dos Vaults, escolhidos como os "melhores e mais brilhantes" da América para reconstruir. Você e outros jogadores.',
      ideology: 'Reconstrução, cooperação',
      leader: 'Nenhum (jogadores)',
      goals: 'Reconstruir Appalachia',
      status: 'Recém-saídos do Vault',
      location: 'Appalachia'
    },
    {
      id: 'responders-76',
      name: 'Responders',
      game: 'Fallout 76',
      description: 'Bombeiros, policiais e paramédicos que tentaram ajudar sobreviventes após as bombas. Foram extintos pela Scorched Plague.',
      ideology: 'Ajuda humanitária, ordem',
      leader: 'Todos mortos',
      goals: 'Ajudar sobreviventes (falharam)',
      status: 'Extintos pela Scorched Plague',
      location: 'Flatwoods, Morgantown'
    },
    {
      id: 'free-states-76',
      name: 'Free States',
      game: 'Fallout 76',
      description: 'Separatistas que não confiavam no governo. Preparados para o apocalipse, mas também foram extintos pela Scorched Plague.',
      ideology: 'Libertarianismo, preparacionismo',
      leader: 'Todos mortos',
      goals: 'Sobreviver independentemente (falharam)',
      status: 'Extintos',
      location: 'The Mire'
    },
    {
      id: 'brotherhood-76',
      name: 'Brotherhood of Steel',
      game: 'Fallout 76',
      description: 'Capítulo de Appalachia, liderado por Paladin Taggerdy. Lutaram contra os Scorched mas foram extintos.',
      ideology: 'Proteção, combate a ameaças',
      leader: 'Todos mortos',
      goals: 'Combater Scorched (falharam)',
      status: 'Extintos, depois retornam',
      location: 'Fort Defiance'
    },
    {
      id: 'enclave-76',
      name: 'Enclave',
      game: 'Fallout 76',
      description: 'Bunker automatizado da Enclave em Appalachia. Controlado por IA MODUS após membros humanos morrerem.',
      ideology: 'Preservação da América',
      leader: 'MODUS (IA)',
      goals: 'Recrutar novos membros',
      status: 'Automatizado',
      location: 'Whitespring Bunker'
    }
  ]
};
