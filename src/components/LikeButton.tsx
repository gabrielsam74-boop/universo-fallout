import { useState, useEffect } from 'react';
import { getLikes, addLike, addDislike } from '@/lib/analytics';

interface LikeButtonProps {
  pageId: string;
}

export default function LikeButton({ pageId }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);

  useEffect(() => {
    // Carrega likes do localStorage
    const stats = getLikes(pageId);
    setLikes(stats.likes);
    setDislikes(stats.dislikes);

    // Verifica se o usuário já votou
    const voted = localStorage.getItem(`vote_${pageId}`);
    if (voted) {
      setUserVote(voted as 'like' | 'dislike');
    }
  }, [pageId]);

  const handleLike = () => {
    if (userVote === 'like') return; // Já deu like
    
    if (userVote === 'dislike') {
      // Remove dislike e adiciona like
      setDislikes(prev => prev - 1);
    }
    
    addLike(pageId);
    setLikes(prev => prev + 1);
    setUserVote('like');
    localStorage.setItem(`vote_${pageId}`, 'like');
  };

  const handleDislike = () => {
    if (userVote === 'dislike') return; // Já deu dislike
    
    if (userVote === 'like') {
      // Remove like e adiciona dislike
      setLikes(prev => prev - 1);
    }
    
    addDislike(pageId);
    setDislikes(prev => prev + 1);
    setUserVote('dislike');
    localStorage.setItem(`vote_${pageId}`, 'dislike');
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleLike}
        className={`flex items-center gap-1 px-2 py-1 rounded transition ${
          userVote === 'like'
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-green-400'
        }`}
        title="Gostei"
      >
        <span className="text-sm">👍</span>
        <span className="text-xs font-bold">{likes}</span>
      </button>

      <button
        onClick={handleDislike}
        className={`flex items-center gap-1 px-2 py-1 rounded transition ${
          userVote === 'dislike'
            ? 'bg-red-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-red-400'
        }`}
        title="Não gostei"
      >
        <span className="text-sm">👎</span>
        <span className="text-xs font-bold">{dislikes}</span>
      </button>
    </div>
  );
}
