import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useMuseum } from '../../context/MuseumContext';

interface HeaderProps {
  showBack?: boolean;
  showMap?: boolean;
  showLang?: boolean;
  backText?: string;
}

export const Header: React.FC<HeaderProps> = ({
  showBack = false,
  showMap = false,
  showLang = false,
  backText
}) => {
  const { language, goToScreen, goBack, toggleQuickMap } = useMuseum();

  return (
    <header className="museum-header" data-name="Cabecera del museo">
      <div
        className="brand-container"
        onClick={() => goToScreen('welcome')}
        role="button"
        tabIndex={0}
        title="Inicio · IVAM"
      >
        <span className="brand-title">IVAM</span>
      </div>

      <div className="header-actions">
        {showMap && (
          <button
            className="action-btn map-btn"
            onClick={toggleQuickMap}
            title="Ver mapa del recorrido"
            aria-label="Ver mapa del recorrido"
          >
            <img
              src="/assets/ver_mapa.svg"
              alt="Ver mapa"
              className="map-icon"
              width="24"
              height="24"
            />
          </button>
        )}

        {showBack && (
          <button
            className="action-btn back-btn"
            onClick={goBack}
            title={backText || 'Volver'}
            aria-label={backText || 'Volver'}
          >
            <ArrowLeft size={20} color="#24231f" strokeWidth={2.2} />
            {backText && <span className="back-text">{backText}</span>}
          </button>
        )}

        {showLang && (
          <button
            className="action-btn lang-btn"
            onClick={() => goToScreen('language-select')}
            title="Seleccionar idioma"
            aria-label="Seleccionar idioma"
          >
            <span className="lang-code">{language}</span>
          </button>
        )}
      </div>

      <style>{`
        .museum-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 88px;
          padding: 0 24px;
          border-bottom: 1px solid var(--border-subtle);
          background-color: var(--bg-primary);
          position: sticky;
          top: 0;
          z-index: 40;
          width: 100%;
        }

        .brand-container {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .brand-title {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 35px;
          line-height: 1;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--border-radius-sm);
          transition: background-color var(--transition-fast);
        }

        .action-btn:hover {
          background-color: rgba(36, 35, 31, 0.05);
        }

        .lang-code {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 12px;
          color: var(--text-primary);
          letter-spacing: 0.5px;
        }

        .map-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .back-text {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--text-primary);
          margin-left: 6px;
        }
      `}</style>
    </header>
  );
};
