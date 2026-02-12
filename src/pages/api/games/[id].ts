import type { NextApiRequest, NextApiResponse } from 'next';
import { falloutGames } from '@/lib/fallout-games';
import { validateApiParams, checkRateLimit } from '@/lib/security';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(ip as string, 100, 60000)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.'
    });
  }

  // Cache por 1 hora
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  if (req.method === 'GET') {
    const { id } = req.query;
    
    // Validar parâmetros
    if (!id || typeof id !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Invalid game ID'
      });
    }
    
    // Validar contra SQL injection
    if (!validateApiParams({ id })) {
      return res.status(400).json({
        success: false,
        error: 'Invalid parameters'
      });
    }
    
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
