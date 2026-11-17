import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Headphones } from 'lucide-react';

interface AudioPlayerProps {
  title?: string;
  subtitle?: string;
  totalDurationSeconds?: number;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title = 'Explicación educativa',
  subtitle = 'Audio disponible · Reproducir',
  totalDurationSeconds = 38
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState<number>(1);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  // Audio timer loop
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDurationSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return Math.min(prev + 0.5 * speed, totalDurationSeconds);
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, totalDurationSeconds]);

  // Gentle museum ambient tone via Web Audio API when playing
  const togglePlay = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(220, ctx.currentTime); // Gentle A3 ambient note
          gain.gain.setValueAtTime(0.015, ctx.currentTime);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          oscillatorRef.current = osc;
        }
      } catch {
        // Fallback gracefully if Web Audio is blocked
      }
      setIsPlaying(true);
    } else {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch {
          // ignore
        }
      }
      setIsPlaying(false);
    }
  };

  const handleSpeedToggle = () => {
    if (speed === 1) setSpeed(1.25);
    else if (speed === 1.25) setSpeed(1.5);
    else setSpeed(1);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(Math.round(ratio * totalDurationSeconds));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = (currentTime / totalDurationSeconds) * 100;

  return (
    <div className="audio-player-wrapper" data-name="Audio explicativo">
      <div className="audio-section-header" data-name="Título del audio">
        <h3 className="section-title">Explicación: futurismo</h3>
        <Headphones size={20} color="#24231f" strokeWidth={1.8} />
      </div>

      <div className="audio-player-box" data-name="Reproductor visual">
        <div className="player-top-row" data-name="Controles del audio">
          <button
            className="play-pause-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
            title={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <Pause size={20} color="#ffffff" fill="#ffffff" />
            ) : (
              <Play size={20} color="#ffffff" fill="#ffffff" style={{ marginLeft: 2 }} />
            )}
          </button>

          <div className="audio-meta" data-name="Información del audio">
            <span className="audio-title">{title}</span>
            <span className="audio-subtitle">{subtitle}</span>
          </div>

          <button
            className="speed-btn"
            onClick={handleSpeedToggle}
            title="Cambiar velocidad de reproducción"
          >
            {speed}×
          </button>
        </div>

        <div className="progress-section" data-name="Progreso de audio">
          <div
            className="timeline-track-hitbox"
            onClick={handleSeek}
            role="slider"
            aria-valuenow={currentTime}
            aria-valuemin={0}
            aria-valuemax={totalDurationSeconds}
            tabIndex={0}
          >
            <div className="timeline-track">
              <div
                className="timeline-progress"
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className="timeline-scrubber"
                style={{ left: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="time-labels" data-name="Tiempo de reproducción">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalDurationSeconds)}</span>
          </div>
        </div>
      </div>

      <style>{`
        .audio-player-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
        }

        .audio-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .section-title {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .audio-player-box {
          background-color: var(--bg-dark);
          border-radius: var(--border-radius-sm);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .player-top-row {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
        }

        .play-pause-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--conflicto-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .play-pause-btn:hover {
          transform: scale(1.04);
        }

        .audio-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
          min-width: 0;
        }

        .audio-title {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 13px;
          color: var(--text-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .audio-subtitle {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 10px;
          color: var(--border-subtle);
        }

        .speed-btn {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 12px;
          color: var(--text-light);
          padding: 4px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.08);
          transition: background-color var(--transition-fast);
        }

        .speed-btn:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .progress-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        .timeline-track-hitbox {
          height: 16px;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        .timeline-track {
          height: 2px;
          background-color: #55524c;
          border-radius: 1px;
          width: 100%;
          position: relative;
        }

        .timeline-progress {
          height: 100%;
          background-color: var(--conflicto-accent);
          border-radius: 1px;
        }

        .timeline-scrubber {
          position: absolute;
          top: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ffffff;
          transform: translate(-50%, -50%);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        .time-labels {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--border-subtle);
        }
      `}</style>
    </div>
  );
};
