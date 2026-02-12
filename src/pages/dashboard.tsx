import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import MetricCard from '@/components/MetricCard';
import PostCard from '@/components/PostCard';
import { getPosts, addPost, deletePost, getMetrics, updateMetrics, Post, Metric } from '@/lib/data';

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'news' as 'news' | 'announcement'
  });

  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      updateMetrics();
      setMetrics(getMetrics());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadData = () => {
    setPosts(getPosts());
    setMetrics(getMetrics());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ title: '', content: '', type: 'news' });
    setShowForm(false);
    loadData();
  };

  const handleDelete = (id: string) => {
    deletePost(id);
    loadData();
  };

  return (
    <>
      <Head>
        <title>Dashboard - Vault-Tec</title>
      </Head>

      <div className="min-h-screen">
        <Header />

        <main className="container mx-auto px-4 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-retro pip-boy-text mb-6 sm:mb-8">
            PAINEL DE CONTROLE
          </h1>

          {/* Metrics */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-retro pip-boy-text mb-3 sm:mb-4">MÉTRICAS EM TEMPO REAL</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {metrics.map((metric, idx) => (
                <MetricCard key={idx} metric={metric} />
              ))}
            </div>
          </section>

          {/* Post Management */}
          <section className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-retro pip-boy-text">GERENCIAR POSTAGENS</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="terminal-border bg-vault-blue hover:bg-vault-yellow hover:text-black px-4 sm:px-6 py-2 transition text-sm sm:text-base w-full sm:w-auto"
              >
                {showForm ? 'CANCELAR' : 'NOVA POSTAGEM'}
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="terminal-border bg-vault-gray p-4 sm:p-6 mb-4 sm:mb-6 crt-effect">
                <div className="mb-4">
                  <label className="block mb-2 text-sm sm:text-base">Título:</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-vault-dark terminal-border p-2 text-vault-green text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm sm:text-base">Conteúdo:</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full bg-vault-dark terminal-border p-2 text-vault-green h-20 sm:h-24 text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm sm:text-base">Tipo:</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as 'news' | 'announcement' })}
                    className="bg-vault-dark terminal-border p-2 text-vault-green text-sm sm:text-base w-full sm:w-auto"
                  >
                    <option value="news">Notícia</option>
                    <option value="announcement">Anúncio</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="terminal-border bg-vault-yellow text-black hover:bg-white px-4 sm:px-6 py-2 transition text-sm sm:text-base w-full sm:w-auto"
                >
                  PUBLICAR
                </button>
              </form>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {posts.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  onDelete={handleDelete}
                  showActions
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
