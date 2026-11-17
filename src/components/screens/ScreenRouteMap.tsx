import React, { useRef } from 'react';
import { ArrowRight, Lock, Route as RouteIcon, Check } from 'lucide-react';
import { Header } from '../common/Header';
import { EditorialFooter } from '../common/EditorialFooter';
import { useMuseum } from '../../context/MuseumContext';
import { ROUTES, CONFLICTO_MILESTONES } from '../../data/museumData';

export const ScreenRouteMap: React.FC = () => {
  const { selectedRoute, unlockedStops, completedStops, goToScreen, t } = useMuseum();
  const mapScrollRef = useRef<HTMLDivElement>(null);

  const route = ROUTES[selectedRoute] || ROUTES.conflicto;

  const handleStartTour = () => {
    if (completedStops.includes(1)) {
      goToScreen('stop-01-explanation');
    } else {
      goToScreen('stop-01-question');
    }
  };

  const handleMilestoneClick = (stopIndex: number) => {
    if (!unlockedStops.includes(stopIndex)) return;

    if (stopIndex === 1) {
      if (completedStops.includes(1)) {
        goToScreen('stop-01-explanation');
      } else {
        goToScreen('stop-01-question');
      }
    } else if (stopIndex === 2) {
      goToScreen('stop-02-scan');
    }
  };

  return (
    <div className="screen-container screen-fade-enter" data-name="Pantalla 2 · Mapa narrativo">
      <Header showBack={true} />

      <main className="map-screen-content" data-name="Recorrido seleccionado">
        <section className="route-intro" data-name="Introducción al recorrido">
          <span className="route-eyebrow" style={{ color: route.accentColor }} data-name="Antetítulo">
            {route.subtitle}
          </span>
          <h1 className="route-title font-serif" data-name="Título">
            {route.title}
          </h1>
          <p className="route-description" data-name="Descripción">
            {route.description}
          </p>
        </section>

        <section className="status-divider" data-name="Estado inicial">
          <span className="stop-total-count" data-name="Cantidad de paradas">
            {route.stopsCount} paradas
          </span>
          <span className="investigation-hint" data-name="Estado del recorrido">
            {completedStops.length > 0
              ? `${completedStops.length} de ${route.stopsCount} completadas`
              : t('investigation_starts')}
          </span>
        </section>

        <section className="conceptual-map-box" data-name="Mapa conceptual">
          <div className="map-box-header" data-name="Título del mapa">
            <span className="map-eyebrow" data-name="Tipo de mapa">
              {t('map_title')}
            </span>
            <RouteIcon size={16} color="#69665e" strokeWidth={1.8} />
          </div>

          <div
            className="map-scroll-viewport"
            ref={mapScrollRef}
            data-name="Doce hitos conectados"
          >
            {/* Background path vector graphic */}
            <div className="narrative-path-container" data-name="Sendero narrativo">
              <img
                src={route.mapGraphic}
                alt="Sendero narrativo"
                className="narrative-path-img"
              />
            </div>

            {/* 12 Interactive Milestones positioned exactly according to Figma canvas coordinates */}
            {CONFLICTO_MILESTONES.map((milestone) => {
              const isUnlocked = unlockedStops.includes(milestone.index);
              const isCompleted = completedStops.includes(milestone.index);
              const isCurrentAvailable = isUnlocked && !isCompleted;

              return (
                <div
                  key={milestone.index}
                  className={`milestone-node milestone-${milestone.index} ${
                    isUnlocked ? 'available' : 'locked'
                  }`}
                  style={{
                    left: `${milestone.x}px`,
                    top: `${milestone.y}px`
                  }}
                  onClick={() => handleMilestoneClick(milestone.index)}
                  data-name="Hito narrativo"
                >
                  <div
                    className={`milestone-circle ${
                      isUnlocked ? 'unlocked-circle' : 'locked-circle'
                    }`}
                    style={{
                      backgroundColor: isUnlocked ? route.accentColor : '#eae6db',
                      borderColor: isUnlocked ? route.accentColor : '#d7d2c7'
                    }}
                    data-name={isUnlocked ? 'Parada disponible' : 'Parada bloqueada'}
                  >
                    {isCompleted ? (
                      <Check size={18} color="#ffffff" strokeWidth={2.5} />
                    ) : isUnlocked ? (
                      <span className="milestone-number">{milestone.numberStr}</span>
                    ) : (
                      <Lock size={16} color="#69665e" strokeWidth={1.8} />
                    )}
                  </div>

                  {/* Pulsing halo ring for available stop */}
                  {isCurrentAvailable && (
                    <div className="halo-ring halo-pulse" data-name="Halo de disponibilidad">
                      <img
                        src="/assets/halo_disponibilidad.svg"
                        alt="Halo"
                        className="halo-img"
                      />
                    </div>
                  )}

                  <span
                    className="milestone-label"
                    style={{
                      color: isUnlocked ? route.accentColor : '#69665e',
                      fontWeight: isUnlocked ? 600 : 400
                    }}
                    data-name="Nombre de la parada"
                  >
                    {milestone.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="map-legend" data-name="Leyenda del recorrido">
            <div className="legend-item" data-name="Disponible">
              <span
                className="legend-dot"
                style={{ backgroundColor: route.accentColor }}
                data-name="Indicador"
              />
              <span className="legend-text" data-name="Etiqueta">
                {t('available')}
              </span>
            </div>
            <div className="legend-item" data-name="Bloqueado">
              <Lock size={12} color="#69665e" strokeWidth={2} />
              <span className="legend-text" data-name="Etiqueta">
                {t('locked_legend')}
              </span>
            </div>
          </div>
        </section>

        <section className="tour-start-action" data-name="Inicio del recorrido">
          <button
            className="start-tour-btn"
            onClick={handleStartTour}
            style={{ backgroundColor: route.accentColor }}
            data-name="Acción principal"
          >
            <span className="start-btn-text" data-name="Etiqueta">
              {completedStops.length > 0 ? 'Continuar' : t('start_journey')}
            </span>
            <div className="arrow-box">
              <ArrowRight size={20} color="#ffffff" strokeWidth={2.2} />
            </div>
          </button>

          <p className="swipe-instruction" data-name="Aclaración del mapa">
            {t('swipe_map_note')}
          </p>
        </section>
      </main>

      <EditorialFooter labelLeft="OTRAS FORMAS DE MIRAR" labelRight="Recorrido narrativo" />

      <style>{`
        .screen-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        .map-screen-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 24px;
          flex: 1;
        }

        .route-intro {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .route-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .route-title {
          font-size: 50px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.05;
        }

        .route-description {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .status-divider {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          font-family: var(--font-sans);
          font-size: 12px;
        }

        .stop-total-count {
          font-weight: 600;
          color: var(--text-primary);
        }

        .investigation-hint {
          color: var(--text-secondary);
        }

        .conceptual-map-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 440px;
          width: 100%;
          position: relative;
        }

        .map-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .map-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: 0.8px;
        }

        .map-scroll-viewport {
          height: 377px;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          background-color: var(--bg-primary);
          border: 1px solid rgba(215, 210, 199, 0.4);
          border-radius: var(--border-radius-sm);
          padding-bottom: 30px;
        }

        .narrative-path-container {
          position: absolute;
          left: 8.5px;
          top: 47px;
          width: 336.5px;
          height: 645px;
          pointer-events: none;
        }

        .narrative-path-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .milestone-node {
          position: absolute;
          width: 110px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          user-select: none;
        }

        .milestone-node.available {
          cursor: pointer;
        }

        .milestone-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 33px;
          top: 6px;
          z-index: 2;
          transition: transform var(--transition-fast);
        }

        .milestone-node.available:hover .milestone-circle {
          transform: scale(1.08);
        }

        .milestone-number {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 15px;
          color: #ffffff;
        }

        .halo-ring {
          position: absolute;
          left: 27px;
          top: 0px;
          width: 56px;
          height: 56px;
          pointer-events: none;
          z-index: 1;
        }

        .halo-img {
          width: 100%;
          height: 100%;
        }

        .milestone-label {
          position: absolute;
          top: 63px;
          width: 110px;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 11px;
          line-height: 1.2;
        }

        .map-legend {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .tour-start-action {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .start-tour-btn {
          height: 56px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          transition: filter var(--transition-fast), transform var(--transition-fast);
        }

        .start-tour-btn:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .start-btn-text {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .arrow-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swipe-instruction {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          text-align: center;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};
