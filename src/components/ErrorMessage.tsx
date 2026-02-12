// ============================================
// ERROR MESSAGE - Mensagem de erro
// ============================================

interface ErrorMessageProps {
  error: Error | string;
  retry?: () => void;
}

export default function ErrorMessage({ error, retry }: ErrorMessageProps) {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[300px] p-8"
      role="alert"
      aria-live="assertive"
    >
      <div className="text-center max-w-md">
        {/* Ícone de erro */}
        <div className="mb-4">
          <svg 
            className="w-16 h-16 mx-auto text-red-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>

        {/* Mensagem */}
        <h3 className="text-xl font-bold text-red-500 mb-2">
          Erro ao Carregar Dados
        </h3>
        <p className="text-gray-400 mb-6 font-mono">
          {errorMessage}
        </p>

        {/* Botão de retry */}
        {retry && (
          <button
            onClick={retry}
            className="btn btn-primary"
            aria-label="Tentar novamente"
          >
            Tentar Novamente
          </button>
        )}
      </div>
    </div>
  );
}
