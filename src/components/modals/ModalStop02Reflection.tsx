import React from 'react';
import { useMuseum } from '../../context/MuseumContext';

export const ModalStop02Reflection: React.FC = () => {
  const { isStop02ReflectionOpen, closeStop02Reflection, goToScreen } = useMuseum();

  if (!isStop02ReflectionOpen) return null;

  const handleReturnToMap = () => {
    closeStop02Reflection();
    goToScreen('route-map');
  };

  return (
    <div className="modal-backdrop" onClick={closeStop02Reflection}>
      <div
        className="modal-card screen-fade-enter"
        onClick={(e) => e.stopPropagation()}
        data-name="Conflictos · Parada 02 · Reflexión"
      >
        <span className="modal-eyebrow" data-name="Estado">
          PARADA 02 · REFLEXIÓN
        </span>

        <h3 className="modal-title font-serif" data-name="Título">
          Las imágenes también toman posición.
        </h3>

        <div className="reflection-answer-box" data-name="Respuesta">
          <p className="answer-reference-label">Respuesta de referencia · A</p>
          <p className="answer-text">
            Sí, porque las imágenes pueden transmitir ideas y construir una visión de la realidad.
          </p>
        </div>

        <p className="reflection-body" data-name="Explicación">
          El montaje y la elección de las escenas orientan nuestra interpretación. Una película puede
          movilizar emociones y dar forma a un relato político.
        </p>

        <div className="reflection-actions">
          <button
            className="modal-action-btn primary"
            onClick={handleReturnToMap}
            data-name="Volver al mapa"
          >
            <span>Volver al mapa</span>
          </button>

          <button
            className="modal-action-btn secondary"
            onClick={closeStop02Reflection}
            data-name="Revisar mi respuesta"
          >
            <span>Revisar mi respuesta</span>
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(36, 35, 31, 0.65);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
        }

        .modal-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--border-radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 354px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
        }

        .modal-eyebrow {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 10px;
          color: var(--conflicto-accent);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .modal-title {
          font-size: 27px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .reflection-answer-box {
          font-family: var(--font-sans);
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 12px 14px;
          background-color: var(--conflicto-bg-soft);
          border-left: 3px solid var(--conflicto-accent);
          border-radius: 2px;
        }

        .answer-reference-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--conflicto-accent);
        }

        .answer-text {
          font-size: 13.5px;
          line-height: 1.45;
          font-weight: 500;
        }

        .reflection-body {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .reflection-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
        }

        .modal-action-btn {
          height: 48px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 14px;
          transition: all var(--transition-fast);
        }

        .modal-action-btn.primary {
          background-color: var(--conflicto-accent);
          color: #ffffff;
        }

        .modal-action-btn.primary:hover {
          filter: brightness(1.06);
        }

        .modal-action-btn.secondary {
          background-color: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
        }

        .modal-action-btn.secondary:hover {
          background-color: rgba(36, 35, 31, 0.04);
        }
      `}</style>
    </div>
  );
};
