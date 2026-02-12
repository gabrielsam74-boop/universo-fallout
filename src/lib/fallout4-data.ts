export interface Weapon {
  id: string;
  name: string;
  type: string;
  damage: number;
  rarity: 'comum' | 'incomum' | 'raro' | 'lendário';
  description: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  defense: number;
  special: string;
}

export interface Location {
  id: string;
  name: string;
  region: string;
  description: string;
  dangers: string[];
}

export const weapons: Weapon[] = [
  { id: '1', name: '10mm Pistol', type: 'Pistola', damage: 18, rarity: 'comum', description: 'Arma padrão confiável para iniciantes' },
  { id: '2', name: 'Combat Rifle', type: 'Rifle', damage: 33, rarity: 'incomum', description: 'Rifle versátil para combate médio alcance' },
  { id: '3', name: 'Fat Man', type: 'Lançador', damage: 468, rarity: 'lendário', description: 'Lançador de mini-nukes devastador' },
  { id: '4', name: 'Gauss Rifle', type: 'Rifle', damage: 110, rarity: 'raro', description: 'Rifle eletromagnético de alta tecnologia' },
  { id: '5', name: 'Super Sledge', type: 'Corpo a Corpo', damage: 90, rarity: 'raro', description: 'Martelo pesado com propulsão a foguete' },
  { id: '6', name: 'Laser Rifle', type: 'Energia', damage: 24, rarity: 'incomum', description: 'Arma de energia do Institute' },
];

export const equipment: Equipment[] = [
  { id: '1', name: 'Power Armor T-60', type: 'Armadura Pesada', defense: 1000, special: '+2 STR' },
  { id: '2', name: 'Combat Armor', type: 'Armadura Média', defense: 45, special: 'Balanceada' },
  { id: '3', name: 'Vault 111 Suit', type: 'Roupa', defense: 5, special: '+1 PER, +1 END' },
  { id: '4', name: 'Hazmat Suit', type: 'Proteção', defense: 0, special: '+1000 RAD Resist' },
  { id: '5', name: 'Railroad Armored Coat', type: 'Armadura Leve', defense: 65, special: '+1 PER, +1 AGI' },
];

export const locations: Location[] = [
  { 
    id: '1', 
    name: 'Sanctuary Hills', 
    region: 'Norte', 
    description: 'Sua casa pré-guerra, agora em ruínas',
    dangers: ['Bloatflies', 'Radroaches']
  },
  { 
    id: '2', 
    name: 'Diamond City', 
    region: 'Centro', 
    description: 'A grande cidade verde construída no Fenway Park',
    dangers: ['Synths infiltrados']
  },
  { 
    id: '3', 
    name: 'The Glowing Sea', 
    region: 'Sudoeste', 
    description: 'Zona altamente radioativa do ground zero',
    dangers: ['Deathclaws', 'Radscorpions', 'Feral Ghouls', 'Radiação extrema']
  },
  { 
    id: '4', 
    name: 'The Institute', 
    region: 'Subterrâneo', 
    description: 'Fortaleza tecnológica dos criadores de Synths',
    dangers: ['Synths avançados', 'Coursers']
  },
  { 
    id: '5', 
    name: 'Goodneighbor', 
    region: 'Centro', 
    description: 'Cidade dos rejeitados e criminosos',
    dangers: ['Gangues', 'Triggermen']
  },
];

export const storyTimeline = [
  {
    year: '2077',
    event: 'O Dia da Bomba',
    description: 'Você e sua família entram no Vault 111 momentos antes das bombas nucleares caírem.'
  },
  {
    year: '2077',
    event: 'Criogenia',
    description: 'Você é congelado criogenicamente. Seu filho Shaun é sequestrado e seu cônjuge assassinado.'
  },
  {
    year: '2287',
    event: 'Despertar',
    description: 'Você acorda 210 anos depois em um mundo devastado, iniciando sua busca por Shaun.'
  },
  {
    year: '2287',
    event: 'Commonwealth',
    description: 'Você explora a Commonwealth, encontra facções e descobre a verdade sobre o Institute.'
  },
];
