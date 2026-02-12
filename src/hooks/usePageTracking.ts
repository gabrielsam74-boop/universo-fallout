import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { trackPageView } from '@/lib/analytics';

export function usePageTracking() {
  const router = useRouter();

  useEffect(() => {
    // Registra a visualização da página atual
    trackPageView(router.pathname);

    // Registra visualizações quando a rota muda
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
}
