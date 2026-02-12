export interface Objective {
  id: string;
  title: string;
  game: string;
  description: string;
  details: string;
  howToComplete: string;
  rewards: string;
  consequences: string;
}

export const objectives: Record<string, Objective[]> = {
  'fallout-1': [
    {
      id: 'water-chip-f1',
      title: 'Encontrar o Chip de Água',
      game: 'Fallout 1',
      description: 'O chip de água do Vault 13 quebrou. Você tem 150 dias para encontrar um substituto ou todos morrerão de sede.',
      details: 'O Vault 13 depende de um chip de água para purificar água. Sem ele, o Vault ficará sem água potável. O Overseer escolheu você para sair ao mundo exterior pela primeira vez em 84 anos e encontrar um substituto.',
      howToComplete: 'Explore o wasteland, visite Vault 12 (Necropolis) ou negocie com mercadores do Hub. Você pode comprar tempo extra negociando água com caravanas.',
      rewards: 'Salvar o Vault 13 da morte por desidratação',
      consequences: 'Falhar significa a morte de todos no Vault 13. Sucesso leva à próxima missão.'
    },
    {
      id: 'defeat-master-f1',
      title: 'Derrotar o Mestre',
      game: 'Fallout 1',
      description: 'Descobrir e destruir o Mestre e seu exército de Super Mutantes antes que transformem toda a humanidade.',
      details: 'O Mestre (Richard Grey) é um ser psíquico mutante que acredita que a única salvação da humanidade é através da transformação em Super Mutantes via FEV. Ele está criando um exército e procurando Vaults para ter humanos "puros" para transformar.',
      howToComplete: 'Infiltrar a Base Militar de Mariposa e a Catedral. Você pode destruir ambos com explosivos ou convencer o Mestre de que seu plano é falho (Super Mutantes são estéreis).',
      rewards: 'Salvar a humanidade da transformação forçada',
      consequences: 'Sucesso salva o wasteland mas resulta em seu exílio do Vault 13. O Overseer teme que você corrompa os outros com suas experiências.'
    }
  ],
  'fallout-2': [
    {
      id: 'find-geck-f2',
      title: 'Encontrar o G.E.C.K.',
      game: 'Fallout 2',
      description: 'Sua tribo está morrendo. Você deve encontrar o Garden of Eden Creation Kit para salvar Arroyo.',
      details: 'Arroyo sofre com seca severa e fome. O G.E.C.K. é um dispositivo da Vault-Tec que pode terraformar áreas devastadas, tornando-as férteis novamente. Sua avó, a Elder, envia você nesta busca.',
      howToComplete: 'Viajar através da Califórnia e Nevada, seguir pistas sobre Vaults. O G.E.C.K. está no Vault 13, mas você descobrirá que a Enclave já o capturou.',
      rewards: 'Salvar sua tribo da extinção',
      consequences: 'A busca revela a conspiração da Enclave para genocídio.'
    },
    {
      id: 'destroy-enclave-f2',
      title: 'Destruir a Enclave',
      game: 'Fallout 2',
      description: 'A Enclave planeja liberar um vírus modificado do FEV para matar todos os "mutantes" (qualquer um afetado pela radiação). Você deve detê-los.',
      details: 'O Presidente Richardson e a Enclave acreditam que são os únicos humanos "puros" restantes. Eles planejam usar o FEV modificado para exterminar toda vida "contaminada" pela radiação e recolonizar a América. Isso mataria 99% da população.',
      howToComplete: 'Infiltrar a Plataforma Petrolífera da Enclave, libertar prisioneiros (incluindo sua tribo), e destruir a plataforma. Você pode usar o FEV contra eles ou simplesmente explodir tudo.',
      rewards: 'Salvar o mundo do genocídio, resgatar sua tribo',
      consequences: 'A Enclave é destruída (temporariamente), Arroyo e Vault 13 se unem para formar uma nova comunidade.'
    }
  ],
  'fallout-3': [
    {
      id: 'find-father-f3',
      title: 'Encontrar Seu Pai',
      game: 'Fallout 3',
      description: 'Seu pai James fugiu do Vault 101. Você deve encontrá-lo na Capital Wasteland.',
      details: 'James deixou o Vault 101 sem explicação, causando caos. O Overseer culpa você e você é forçado a fugir também. Você deve rastreá-lo através do wasteland perigoso.',
      howToComplete: 'Seguir pistas em Megaton, visitar Galaxy News Radio, encontrar Three Dog, ir para Rivet City e depois Vault 112 onde ele está preso em realidade virtual.',
      rewards: 'Reunir-se com seu pai e descobrir sobre o Projeto Pureza',
      consequences: 'Descobrir o verdadeiro propósito de seu pai e sua própria origem.'
    },
    {
      id: 'project-purity-f3',
      title: 'Completar o Projeto Pureza',
      game: 'Fallout 3',
      description: 'Ativar o purificador de água gigante para fornecer água limpa para toda a Capital Wasteland.',
      details: 'O Projeto Pureza é o trabalho da vida de seu pai - um purificador massivo que pode limpar toda a água da região. A Enclave quer controlá-lo para envenenar a água e matar mutantes.',
      howToComplete: 'Defender o Memorial Jefferson da Enclave, ativar o purificador (você ou Sarah Lyons devem entrar na câmara radioativa), inserir o código.',
      rewards: 'Água limpa para toda a Capital Wasteland',
      consequences: 'Dependendo de suas escolhas, você pode morrer ativando-o, deixar Sarah morrer, ou enviar Fawkes. Você pode envenenar a água com FEV ou mantê-la pura.'
    }
  ],
  'fallout-nv': [
    {
      id: 'find-benny-nv',
      title: 'Encontrar Benny',
      game: 'Fallout: New Vegas',
      description: 'Rastrear o homem que atirou em você e roubou o chip de platina.',
      details: 'Você foi baleado na cabeça por Benny e deixado para morrer em uma cova rasa. Milagrosamente sobreviveu. Agora deve rastreá-lo através do Mojave para descobrir por que ele fez isso e recuperar o chip misterioso.',
      howToComplete: 'Seguir pistas de Goodsprings para Primm, Novac, Boulder City e finalmente The Tops Casino em New Vegas onde Benny está.',
      rewards: 'Recuperar o chip de platina, confrontar Benny',
      consequences: 'Você pode matar Benny, deixá-lo viver, ou até dormir com ele. Recuperar o chip inicia a guerra pelo Hoover Dam.'
    },
    {
      id: 'hoover-dam-nv',
      title: 'Batalha da Represa Hoover',
      game: 'Fallout: New Vegas',
      description: 'Decidir o destino de New Vegas e do Mojave na batalha final pela Represa Hoover.',
      details: 'O chip de platina controla um exército de Securitrons. NCR, Legião de Caesar e Mr. House lutam pelo controle da Represa Hoover e seus recursos. Você deve escolher um lado ou tomar o controle para si.',
      howToComplete: 'Escolher uma facção (NCR, Legião, Mr. House, ou Independente), completar suas missões, e lutar na batalha final pela represa.',
      rewards: 'Controle de New Vegas e do Mojave',
      consequences: 'Cada escolha tem consequências drasticamente diferentes para a região. NCR traz democracia mas burocracia, Legião traz ordem mas escravidão, House traz progresso mas autocracia, Independente traz liberdade mas caos.'
    }
  ],
  'fallout-4': [
    {
      id: 'find-shaun-f4',
      title: 'Encontrar Shaun',
      game: 'Fallout 4',
      description: 'Seu filho foi sequestrado. Você deve encontrá-lo na Commonwealth.',
      details: 'Você acordou da criogenia para ver seu cônjuge ser assassinado e seu bebê Shaun ser sequestrado por um mercenário chamado Kellogg. Agora, 210 anos no futuro, você deve encontrar seu filho.',
      howToComplete: 'Rastrear Kellogg através da Commonwealth, usar suas memórias para encontrar o Instituto, descobrir que Shaun é agora Father, líder do Instituto.',
      rewards: 'Encontrar seu filho (mas ele é idoso e líder do Instituto)',
      consequences: 'A revelação de que Shaun é Father muda tudo. Você deve decidir se apoia o Instituto ou o destrói.'
    },
    {
      id: 'institute-choice-f4',
      title: 'Escolher o Destino do Instituto',
      game: 'Fallout 4',
      description: 'Decidir se o Instituto deve ser destruído ou preservado.',
      details: 'O Instituto é tecnologicamente supremo mas manipula a Commonwealth através de Synths. Eles sequestram e substituem pessoas, causam medo. Mas também representam o futuro da humanidade. Shaun quer que você o lidere.',
      howToComplete: 'Escolher entre Minutemen, Brotherhood, Railroad ou Instituto. Cada facção tem plano diferente para o Instituto.',
      rewards: 'Moldar o futuro da Commonwealth',
      consequences: 'Brotherhood e Railroad querem destruir o Instituto. Minutemen podem negociar. Instituto quer eliminar as outras facções. Sua escolha determina quem sobrevive.'
    }
  ],
  'fallout-76': [
    {
      id: 'reclamation-day-76',
      title: 'Reclamation Day',
      game: 'Fallout 76',
      description: 'Sair do Vault 76 e começar a reconstruir a América.',
      details: 'Após 25 anos no Vault 76, é hora de sair e reconstruir. Você é um dos primeiros a emergir dos Vaults, enfrentando um mundo ainda altamente radioativo e perigoso.',
      howToComplete: 'Sair do Vault, seguir as instruções do Overseer, explorar Appalachia.',
      rewards: 'Liberdade, início da aventura',
      consequences: 'Descobrir que todos em Appalachia estão mortos ou transformados em Scorched.'
    },
    {
      id: 'scorched-plague-76',
      title: 'Investigar a Scorched Plague',
      game: 'Fallout 76',
      description: 'Descobrir o que causou a Scorched Plague e como detê-la.',
      details: 'A Scorched Plague transformou a maioria dos habitantes de Appalachia em criaturas hostis. Você deve descobrir a origem (Scorchbeasts das minas) e encontrar uma cura.',
      howToComplete: 'Investigar as várias facções extintas, descobrir pesquisas, lançar mísseis nucleares nas fissuras de Scorchbeast.',
      rewards: 'Entender o destino de Appalachia',
      consequences: 'Você pode selar as fissuras e reduzir a ameaça Scorched.'
    }
  ]
};
