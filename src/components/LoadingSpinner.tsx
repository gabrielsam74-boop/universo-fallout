// ============================================
// LOADING SPINNER - Estado de carregamento
// ============================================

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingSpinner({ 
  message = 'Carregando...', 
  size = 'md' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[300px]"
      role="status"
      aria-live="polite"
    >
      <div 
        className={`${sizeClasses[size]} border-gray-700 border-t-yellow-500 rounded-full animate-spin`}
        aria-hidden="true"
      />
      <p className="mt-4 text-gray-400 font-mono">{message}</p>
      <span className="sr-only">{message}</span>
    </div>
  );
}
