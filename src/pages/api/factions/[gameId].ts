import type { NextApiRequest, NextApiResponse } from 'next';
import { factions } from '@/lib/factions-data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  if (req.method === 'GET') {
    const { gameId } = req.query;
    
    if (typeof gameId !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Invalid game ID'
      });
    }
    
    const gameFactions = factions[gameId];
    
    if (!gameFactions) {
      return res.status(404).json({
        success: false,
        error: 'Factions not found for this game'
      });
    }
    
    return res.status(200).json({
      success: true,
      data: gameFactions,
      count: gameFactions.length
    });
  }
  
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}
