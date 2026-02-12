import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AudioProvider } from '@/contexts/AudioContext';
import AudioPlayer from '@/components/AudioPlayer';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AudioProvider>
      <Component {...pageProps} />
      <AudioPlayer />
      <Analytics />
    </AudioProvider>
  );
}
