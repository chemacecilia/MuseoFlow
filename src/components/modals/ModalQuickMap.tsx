import React from 'react';
import { X, Lock, Check } from 'lucide-react';
import { useMuseum } from '../../context/MuseumContext';
import { CONFLICTO_MILESTONES, ROUTES } from '../../data/museumData';

export const ModalQuickMap: React.FC = () => {
  const { isQuickMapOpen, toggleQuickMap, selectedRoute, unlockedStops, completedStops, goToScreen } =
    useMuseum();

  if (!isQuickMapOpen) return null;

  const route = ROUTES[selectedRoute] || ROUTES.conflicto;

  const handleStopClick = (stopNum: number) => {
    if (!unlockedStops.includes(stopNum)) return;
    toggleQuickMap();
    if (stopNum === 1) {
      if (completedStops.includes(1)) {
        goToScreen('stop-01-explanation');
      } else {
        goToScreen('stop-01-question');
      }
    } else if (stopNum === 2) {
      goToScreen('stop-02-scan');
    }
  };

  return (
    <div className="quick-map-backdrop" onClick={toggleQuickMap}>
      <div
        className="quick-map-sheet screen-fade-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="quick-map-header">
          <div>
            <span className="quick-map-eyebrow" style={{ color: route.accentColor }}>
              {route.subtitle}
            </span>
            <h3 className="quick-map-title font-serif">{route.title} · Mapa</h3>
          </div>
          <button className="close-btn" onClick={toggleQuickMap} aria-label="Cerrar mapa">
            <X size={20} color="#24231f" />
          </button>
        </div>

        <div className="quick-map-list">
          {CONFLICTO_MILESTONES.map((stop) => {
            const isUnlocked = unlockedStops.includes(stop.index);
            const isDone = completedStops.includes(stop.index);

            return (
              <div
                key={stop.index}
                className={`quick-stop-item ${isUnlocked ? 'unlocked' : 'locked'} ${
                  isDone ? 'completed' : ''
                }`}
                onClick={() => handleStopClick(stop.index)}
              >
                <div
                  className="quick-stop-badge"
                  style={{
                    backgroundColor: isUnlocked ? route.accentColor : '#eae6db',
                    color: isUnlocked ? '#ffffff' : '#69665e'
                  }}
                >
                  {isDone ? <Check size={14} strokeWidth={2.5} /> : stop.numberStr}
                </div>

                <div className="quick-stop-info">
                  <span className="quick-stop-name">{stop.name}</span>
                  <span className="quick-stop-status">
                    {isDone
                      ? 'Completada'
                      : isUnlocked
                      ? 'Disponible ahora'
                      : 'Bloqueada'}
                  </span>
                </div>

                {!isUnlocked && (
                  <Lock size={15} color="#99958c" style={{ marginLeft: 'auto' }} />
                )}
              </div>
            );
          })}
        </div>

        <div className="quick-map-footer">
          <button
            className="full-map-btn"
            onClick={() => {
              toggleQuickMap();
              goToScreen('route-map');
            }}
          >
            Ver cartografía completa
          </button>
        </div>
      </div>

      <style>{`
        .quick-map-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(36, 35, 31, 0.65);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 100;
        }

        .quick-map-sheet {
          background-color: var(--bg-primary);
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
          width: 100%;
          max-width: var(--max-screen-width);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          padding: 24px;
          box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.2);
        }

        .quick-map-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .quick-map-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .quick-map-title {
          font-size: 22px;
          font-weight: 400;
          color: var(--text-primary);
          margin-top: 2px;
        }

        .close-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(36, 35, 31, 0.05);
        }

        .quick-map-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow-y: auto;
          padding: 16px 0;
        }

        .quick-stop-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: var(--border-radius-sm);
          border: 1px solid var(--border-subtle);
          background-color: #fffdfa;
          transition: all var(--transition-fast);
        }

        .quick-stop-item.unlocked {
          cursor: pointer;
        }

        .quick-stop-item.unlocked:hover {
          border-color: var(--text-primary);
        }

        .quick-stop-item.locked {
          opacity: 0.6;
          cursor: not-allowed;
          background-color: #fbf9f4;
        }

        .quick-stop-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 13px;
          flex-shrink: 0;
        }

        .quick-stop-info {
          display: flex;
          flex-direction: column;
        }

        .quick-stop-name {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 13.5px;
          color: var(--text-primary);
        }

        .quick-stop-status {
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--text-secondary);
        }

        .quick-map-footer {
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .full-map-btn {
          width: 100%;
          height: 44px;
          background-color: var(--text-primary);
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
