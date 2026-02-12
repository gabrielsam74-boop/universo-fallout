export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'news' | 'announcement';
}

export interface Metric {
  name: string;
  value: number;
  change: number;
}

let posts: Post[] = [
  {
    id: '1',
    title: 'Bem-vindo ao Vault-Tec',
    content: 'Prepare-se para o futuro. A Vault-Tec está aqui para proteger você.',
    date: new Date().toISOString(),
    type: 'announcement'
  },
  {
    id: '2',
    title: 'Novidades do Wasteland',
    content: 'Exploradores relatam novos recursos encontrados no setor 7.',
    date: new Date().toISOString(),
    type: 'news'
  }
];

let metrics: Metric[] = [
  { name: 'Visitantes', value: 1247, change: 12 },
  { name: 'Conversões', value: 89, change: 8 },
  { name: 'Taxa de Cliques', value: 7.2, change: -2 },
  { name: 'Tempo Médio', value: 3.5, change: 15 }
];

export const getPosts = (): Post[] => posts;

export const addPost = (post: Omit<Post, 'id' | 'date'>): Post => {
  const newPost: Post = {
    ...post,
    id: Date.now().toString(),
    date: new Date().toISOString()
  };
  posts = [newPost, ...posts];
  return newPost;
};

export const deletePost = (id: string): boolean => {
  const initialLength = posts.length;
  posts = posts.filter(p => p.id !== id);
  return posts.length < initialLength;
};

export const getMetrics = (): Metric[] => metrics;

export const updateMetrics = (): void => {
  metrics = metrics.map(m => ({
    ...m,
    value: m.value + Math.floor(Math.random() * 10) - 5,
    change: Math.floor(Math.random() * 30) - 15
  }));
};
