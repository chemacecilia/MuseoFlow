import React from 'react';
import { Header } from '../common/Header';
import { EditorialFooter } from '../common/EditorialFooter';
import { useMuseum } from '../../context/MuseumContext';

export const ScreenWelcome: React.FC = () => {
  const { selectRoute, t } = useMuseum();

  return (
    <div className="screen-container screen-fade-enter" data-name="Pantalla 1 · Bienvenida · Elige tu camino">
      <Header showLang={true} />

      <div className="editorial-bar" data-name="Pie editorial">
        <span className="editorial-tag">{t('editorial_header')}</span>
        <span className="editorial-type">{t('editorial_narrative')}</span>
      </div>

      <main className="main-content" data-name="Contenido central">
        <section className="intro-section" data-name="Introducción">
          <span className="section-eyebrow" data-name="Antetítulo">
            {t('editorial_header')}
          </span>
          <h1 className="section-heading font-serif" data-name="Título">
            {t('choose_path_title')}
          </h1>
          <p className="section-desc" data-name="Descripción">
            {t('choose_path_desc')}
          </p>
        </section>

        <section className="visual-hero" data-name="Estímulo visual">
          <div className="hero-img-box" data-name="Imagen representativa · Galería de arte moderno">
            <img
              src="/assets/galeria_arte_moderno.png"
              alt="Galería de arte moderno IVAM"
              className="hero-img"
            />
          </div>
          <p className="hero-caption" data-name="Pie de ilustración">
            {t('modern_art_gallery')}
          </p>
        </section>

        <section className="route-cards-list" data-name="Opciones de ruta">
          {/* Option A: Color */}
          <div
            className="route-card color-card"
            onClick={() => selectRoute('color')}
            role="button"
            tabIndex={0}
            data-name="Opción de ruta"
          >
            <div className="route-badge" data-name="Marcador de ruta">
              <span>A</span>
            </div>
            <span className="route-title" data-name="Nombre de la ruta">
              Color
            </span>
          </div>

          {/* Option B: Identidad */}
          <div
            className="route-card identidad-card active-card"
            onClick={() => selectRoute('identidad')}
            role="button"
            tabIndex={0}
            data-name="Opción de ruta"
          >
            <div className="route-badge identidad-badge" data-name="Marcador de ruta">
              <span>B</span>
            </div>
            <span className="route-title" data-name="Nombre de la ruta">
              Identidad
            </span>
          </div>

          {/* Option C: Conflicto */}
          <div
            className="route-card conflicto-card active-card"
            onClick={() => selectRoute('conflicto')}
            role="button"
            tabIndex={0}
            data-name="Opción de ruta"
          >
            <div className="route-badge conflicto-badge" data-name="Marcador de ruta">
              <span>C</span>
            </div>
            <span className="route-title" data-name="Nombre de la ruta">
              Conflicto
            </span>
          </div>

          {/* Option D: Ruta por definir */}
          <div
            className="route-card disabled-card"
            onClick={() => selectRoute('custom')}
            role="button"
            tabIndex={0}
            data-name="Opción de ruta"
          >
            <div className="route-badge" data-name="Marcador de ruta">
              <span>D</span>
            </div>
            <span className="route-title" data-name="Nombre de la ruta">
              Ruta por definir
            </span>
          </div>
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

        .editorial-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 52px;
          padding: 0 24px;
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(215, 210, 199, 0.4);
        }

        .editorial-tag {
          font-weight: 400;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .editorial-type {
          font-weight: 400;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 24px;
          flex: 1;
        }

        .intro-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .section-heading {
          font-size: 50px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .section-desc {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .visual-hero {
          display: flex;
          flex-direction: column;
          gap: 7px;
          width: 100%;
        }

        .hero-img-box {
          height: 220px;
          width: 100%;
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          background-color: #24231f;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-caption {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
        }

        .route-cards-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .route-card {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: var(--border-radius-sm);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .route-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .route-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        .route-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.45;
        }

        /* Active Identidad Card */
        .identidad-card {
          background-color: var(--identidad-bg-soft);
          border-color: var(--identidad-border);
        }

        .identidad-badge {
          border-color: var(--identidad-border);
        }

        /* Active Conflicto Card */
        .conflicto-card {
          background-color: var(--conflicto-bg-soft);
          border-color: var(--conflicto-border);
        }

        .conflicto-badge {
          border-color: var(--conflicto-border);
        }

        .disabled-card {
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
};
