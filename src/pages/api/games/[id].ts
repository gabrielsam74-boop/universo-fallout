import type { NextApiRequest, NextApiResponse } from 'next';
import { falloutGames } from '@/lib/fallout-games';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Cache por 1 hora
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  if (req.method === 'GET') {
    const { id } = req.query;
    
    const game = falloutGames.find(g => g.id === id);
    
    if (!game) {
      return res.status(404).json({
        success: false,
        error: 'Game not found'
      });
    }
    
    return res.status(200).json({
      success: true,
      data: game
    });
  }
  
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}
