import type { NextApiRequest, NextApiResponse } from 'next';
import { falloutGames } from '@/lib/fallout-games';
import { checkRateLimit } from '@/lib/security';

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
