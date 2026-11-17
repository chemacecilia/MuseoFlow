import React from 'react';
import { useMuseum } from '../../context/MuseumContext';

export const ModalPotemkinArtwork: React.FC = () => {
  const { isPotemkinModalOpen, closePotemkinModal } = useMuseum();

  if (!isPotemkinModalOpen) return null;

  return (
    <div className="modal-backdrop" onClick={closePotemkinModal}>
      <div
        className="modal-card screen-fade-enter"
        onClick={(e) => e.stopPropagation()}
        data-name="Conflictos · QR · El acorazado Potemkin"
      >
        <span className="modal-eyebrow" data-name="Estado">
          DOCUMENTO 002 RECUPERADO
        </span>

        <h3 className="modal-title font-serif" data-name="Título">
          El acorazado Potemkin
        </h3>

        <div className="artwork-preview" data-name="Fotograma · El acorazado Potemkin, 1925">
          <img
            src="/assets/potemkin.png"
            alt="Fotograma · El acorazado Potemkin"
            className="potemkin-img"
          />
        </div>

        <div className="modal-credit" data-name="Crédito">
          <p>S. M. Eisenstein, 1925 · Fotograma</p>
          <p>Wikimedia Commons · Dominio público</p>
        </div>

        <p className="modal-question-hint" data-name="Indicaciones">
          Observa la imagen. ¿Cómo puede el cine influir en nuestra mirada?
        </p>

        <button
          className="modal-action-btn"
          onClick={closePotemkinModal}
          data-name="Volver a la pregunta"
        >
          <span>Volver a la pregunta</span>
        </button>
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
          font-size: 26px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .artwork-preview {
          width: 100%;
          height: 220px;
          background-color: #111;
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .potemkin-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .modal-credit {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .modal-question-hint {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.45;
        }

        .modal-action-btn {
          height: 48px;
          background-color: var(--conflicto-accent);
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 14px;
          color: #ffffff;
          transition: background-color var(--transition-fast);
        }

        .modal-action-btn:hover {
          filter: brightness(1.06);
        }
      `}</style>
    </div>
  );
};
