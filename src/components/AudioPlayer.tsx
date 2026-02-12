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
  const [isMinimized, setIsMinimized] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleSelectTrack = (index: number) => {
    selectTrack(index);
    setShowPlaylist(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Playlist Dropdown */}
      {showPlaylist && !isMinimized && (
        <div className="terminal-border bg-black p-3 sm:p-4 mb-2 crt-effect max-w-xs max-h-64 overflow-y-auto">
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
                className={`w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm transition ${
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
      <div className="terminal-border bg-black crt-effect transition-all">
        {isMinimized ? (
          /* Minimized Player */
          <div className="p-2 sm:p-3 flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-xl sm:text-2xl"
              title={isPlaying ? 'Pausar' : 'Tocar'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <span className="text-xs text-yellow-500 bethesda-title">RADIO</span>
            <button
              onClick={() => setIsMinimized(false)}
              className="text-yellow-500 hover:text-yellow-400 text-sm ml-auto"
              title="Expandir"
            >
              ▲
            </button>
          </div>
        ) : (
          /* Full Player */
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-yellow-500 bethesda-title">RADIO FREEDOM</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className="text-xs text-yellow-500 hover:text-yellow-400 bethesda-title"
                  title="Playlist"
                >
                  ☰
                </button>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-yellow-500 hover:text-yellow-400 text-sm"
                  title="Minimizar"
                >
                  ▼
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              {/* Previous Button */}
              <button
                onClick={prevTrack}
                className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-lg sm:text-xl"
                title="Anterior"
              >
                ⏮
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-xl sm:text-2xl"
                title={isPlaying ? 'Pausar' : 'Tocar'}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              {/* Next Button */}
              <button
                onClick={nextTrack}
                className="text-yellow-500 hover:text-yellow-400 transition bethesda-title text-lg sm:text-xl"
                title="Próxima"
              >
                ⏭
              </button>
            </div>

            <span className="text-xs text-yellow-400/70 truncate block mb-2">
              {playlist[currentTrack].name}
            </span>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-yellow-900 rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: '#FDB813'
                }}
              />
              <span className="text-xs text-yellow-500/60 bethesda-title min-w-[35px]">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
