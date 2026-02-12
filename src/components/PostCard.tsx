import { Post } from '@/lib/data';

interface PostCardProps {
  post: Post;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

export default function PostCard({ post, onDelete, showActions = false }: PostCardProps) {
  return (
    <div className="terminal-border bg-vault-gray p-6 mb-4 crt-effect">
      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs px-2 py-1 ${
          post.type === 'announcement' ? 'bg-vault-yellow text-black' : 'bg-vault-blue text-white'
        }`}>
          {post.type === 'announcement' ? 'ANÚNCIO' : 'NOTÍCIA'}
        </span>
        <span className="text-xs text-vault-green/70">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </span>
      </div>
      <h3 className="text-xl font-retro pip-boy-text mb-2">{post.title}</h3>
      <p className="text-vault-green/90">{post.content}</p>
      {showActions && onDelete && (
        <button
          onClick={() => onDelete(post.id)}
          className="mt-4 text-red-500 hover:text-red-400 text-sm"
        >
          [DELETAR]
        </button>
      )}
    </div>
  );
}
