import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b-2 border-yellow-600 shadow-lg shadow-yellow-600/50"
      role="banner"
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" aria-label="Ir para página inicial">
          <h1 className="text-xl sm:text-2xl md:text-3xl bethesda-title text-yellow-500 cursor-pointer hover:text-yellow-400 transition">
            UNIVERSO FALLOUT
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex space-x-6 lg:space-x-8"
          role="navigation"
          aria-label="Menu principal"
        >
          <Link 
            href="/" 
            className="text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider"
            aria-label="Ver lista de jogos"
          >
            Jogos
          </Link>
          <Link 
            href="/#serie" 
            className="text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider"
            aria-label="Ver informações sobre a série de TV"
          >
            Série TV
          </Link>
          <Link 
            href="/#cronologia" 
            className="text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider"
            aria-label="Ver linha do tempo cronológica"
          >
            Cronologia
          </Link>
          <Link 
            href="/dashboard" 
            className="text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider"
            aria-label="Ver estatísticas do site"
          >
            Estatísticas
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-500 hover:text-yellow-400 transition p-2"
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-black/98 border-t border-yellow-600/30"
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ver lista de jogos"
            >
              Jogos
            </Link>
            <Link 
              href="/#serie" 
              className="block text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ver informações sobre a série de TV"
            >
              Série TV
            </Link>
            <Link 
              href="/#cronologia" 
              className="block text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ver linha do tempo cronológica"
            >
              Cronologia
            </Link>
            <Link 
              href="/dashboard" 
              className="block text-yellow-400 hover:text-yellow-300 transition text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Ver estatísticas do site"
            >
              Estatísticas
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
