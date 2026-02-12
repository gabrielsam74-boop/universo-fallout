import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AudioProvider } from '@/contexts/AudioContext';
import AudioPlayer from '@/components/AudioPlayer';
import { Analytics } from '@vercel/analytics/react';
import { usePageTracking } from '@/hooks/usePageTracking';

function AppContent({ Component, pageProps }: AppProps) {
  usePageTracking();
  
  return (
    <>
      <Component {...pageProps} />
      <AudioPlayer />
      <Analytics />
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <AudioProvider>
      <AppContent {...props} />
    </AudioProvider>
  );
}
