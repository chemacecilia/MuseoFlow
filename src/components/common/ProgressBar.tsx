import React from 'react';

interface ProgressBarProps {
  routeName: string;
  currentStop: number;
  totalStops?: number;
  isCompleted?: boolean;
  accentColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  routeName,
  currentStop,
  totalStops = 12,
  isCompleted = false,
  accentColor = '#b22d6e'
}) => {
  const segments = Array.from({ length: totalStops }, (_, i) => i + 1);

  return (
    <div className="progress-container" data-name="Progreso del recorrido">
      <div className="progress-context">
        <span className="route-tag" style={{ color: accentColor }}>
          {routeName.toUpperCase()}
        </span>
        <span className="stop-count">
          {isCompleted
            ? `${String(currentStop).padStart(2, '0')} / ${totalStops} · Completada`
            : `Parada ${String(currentStop).padStart(2, '0')} de ${totalStops}`}
        </span>
      </div>

      <div className="segments-track" data-name="Indicador de doce paradas">
        {segments.map((segNum) => {
          const isActive = segNum <= currentStop;
          return (
            <div
              key={segNum}
              className="segment"
              style={{
                backgroundColor: isActive ? accentColor : '#d7d2c7'
              }}
              data-name="Segmento de progreso"
            />
          );
        })}
      </div>

      <style>{`
        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .progress-context {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 11px;
          white-space: nowrap;
        }

        .route-tag {
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .stop-count {
          color: var(--text-secondary);
          font-weight: 400;
        }

        .segments-track {
          display: flex;
          gap: 5px;
          align-items: center;
          width: 100%;
        }

        .segment {
          flex: 1;
          height: 3px;
          border-radius: 1.5px;
          transition: background-color var(--transition-normal);
        }
      `}</style>
    </div>
  );
};
