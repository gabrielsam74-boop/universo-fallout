import { useState } from 'react';
import { useAudio } from '@/contexts/AudioContext';

export default function AudioPlayer() {
  const {
    isPlaying,
    volume,
    currentTrack,
    playlist,
    togglePlay,
    setVolume,
    nextTrack,
    prevTrack,
    selectTrack,
  } = useAudio();

  const [showPlaylist, setShowPlaylist] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleSelectTrack = (index: number) => {
    selectTrack(index);
    setShowPlaylist(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Playlist Dropdown */}
      {showPlaylist && (
        <div className="terminal-border bg-black p-4 mb-2 crt-effect max-w-xs">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-yellow-500 bethesda-title">PLAYLIST</span>
            <button
              onClick={() => setShowPlaylist(false)}
              className="text-yellow-500 hover:text-yellow-400 text-lg"
            >
              ×
            </button>
          </div>
          <div className="space-y-2">
            {playlist.map((track, index) => (
              <button
                key={track.id}
                onClick={() => handleSelectTrack(index)}
                className={`w-full text-left px-3 py-2 text-sm transition ${
                  currentTrack === index
                    ? 'bg-yellow-900/50 text-yellow-300 bethesda-title'
                    : 'text-yellow-500/70 hover:bg-yellow-900/30 hover:text-yellow-300'
                }`}
              >
                {currentTrack === index && '▶ '}
                {track.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Player */}
      <div className="terminal-border bg-black p-4 crt-effect">
        <div className="flex items-center gap-3">
          {/* Previous Button */}
          <button
            onClick={prevTrack}
            className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-xl"
            title="Anterior"
          >
            ⏮
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-2xl"
            title={isPlaying ? 'Pausar' : 'Tocar'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          {/* Next Button */}
          <button
            onClick={nextTrack}
            className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-xl"
            title="Próxima"
          >
            ⏭
          </button>
          
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-yellow-500 bethesda-title">RADIO FREEDOM</span>
              <button
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="text-xs text-yellow-500 hover:text-yellow-400 bethesda-title"
                title="Playlist"
              >
                ☰
              </button>
            </div>
            <span className="text-xs text-yellow-400/70 truncate">
              {playlist[currentTrack].name}
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-yellow-900 rounded-lg appearance-none cursor-pointer"
              style={{
                accentColor: '#FDB813'
              }}
            />
          </div>

          <span className="text-xs text-yellow-500/60 bethesda-title min-w-[35px]">
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
