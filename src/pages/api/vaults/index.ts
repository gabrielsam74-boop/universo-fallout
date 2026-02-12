import type { NextApiRequest, NextApiResponse } from 'next';
import { vaults } from '@/lib/vaults-data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  
  if (req.method === 'GET') {
    const { game } = req.query;
    
    // Filtrar por jogo se fornecido
    if (game && typeof game === 'string') {
      const filteredVaults = vaults.filter(v => 
        v.game.toLowerCase().includes(game.toLowerCase())
      );
      
      return res.status(200).json({
        success: true,
        data: filteredVaults,
        count: filteredVaults.length
      });
    }
    
    // Retornar todos
    return res.status(200).json({
      success: true,
      data: vaults,
      count: vaults.length
    });
  }
  
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}
