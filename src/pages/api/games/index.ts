import type { NextApiRequest, NextApiResponse } from 'next';
import { falloutGames } from '@/lib/fallout-games';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Cache por 1 hora (3600 segundos)
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      data: falloutGames,
      count: falloutGames.length
    });
  }
  
  // Método não permitido
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}
