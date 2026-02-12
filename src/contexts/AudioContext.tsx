import { createContext, useContext, useState, useRef, ReactNode, useEffect } from 'react';

interface Track {
  id: number;
  name: string;
  file: string;
}

interface AudioContextType {
  isPlaying: boolean;
  volume: number;
  currentTrack: number;
  playlist: Track[];
  audioRef: React.RefObject<HTMLAudioElement>;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  selectTrack: (index: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const playlist: Track[] = [
  { id: 1, name: 'Fallout 1', file: '/audio/fallout1-song.mp3' },
  { id: 2, name: 'Fallout 2', file: '/audio/fallout2-song.mp3' },
  { id: 3, name: 'Fallout 3', file: '/audio/fallout3-song.mp3' },
  { id: 4, name: 'Fallout 4', file: '/audio/fallout4-song.mp3' },
  { id: 5, name: 'New Vegas', file: '/audio/newvegas-song.mp3' },
  { id: 6, name: 'Fallout 76', file: '/audio/fallout76-song.mp3' }
];

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
  };

  const handleTrackEnd = () => {
    nextTrack();
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        volume,
        currentTrack,
        playlist,
        audioRef,
        togglePlay,
        setVolume,
        nextTrack,
        prevTrack,
        selectTrack,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={playlist[currentTrack].file}
        onEnded={handleTrackEnd}
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
