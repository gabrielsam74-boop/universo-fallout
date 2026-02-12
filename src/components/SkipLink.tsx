// Componente de acessibilidade - Skip to main content
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow-600 focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold"
    >
      Pular para conteúdo principal
    </a>
  );
}
