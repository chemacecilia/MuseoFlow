import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Header } from '../common/Header';
import { EditorialFooter } from '../common/EditorialFooter';
import { useMuseum } from '../../context/MuseumContext';

export const ScreenHintergrundDetail: React.FC = () => {
  const { goToScreen } = useMuseum();

  return (
    <div className="screen-container screen-fade-enter" data-name="Pantalla 4A · Hintergrund · Obra y contexto">
      <Header showBack={true} backText="Volver a la respuesta" />

      <main className="hintergrund-content" data-name="Obra y contexto de Hintergrund">
        <section className="hintergrund-header">
          <span className="doc-category" data-name="Tipo de documento">
            DOCUMENTO ADICIONAL
          </span>
          <h1 className="doc-name font-serif" data-name="Título de la obra">
            Hintergrund
          </h1>
          <p className="doc-author" data-name="Autor y fecha">
            George Grosz · 1928
          </p>
        </section>

        <section className="artwork-display" data-name="Hintergrund · Cubierta de la carpeta, 1928">
          <div className="artwork-stage">
            <img
              src="/assets/hintergrund.png"
              alt="Hintergrund · George Grosz"
              className="artwork-img"
            />
          </div>
          <div className="artwork-credits" data-name="Crédito de la reproducción">
            <p>Cubierta de la carpeta · Malik-Verlag, Berlín</p>
            <p>Reproducción: Galerie 1900–2000</p>
          </div>
        </section>

        <section className="context-analysis">
          <h2 className="context-headline font-serif" data-name="Título del contexto">
            El dibujo como denuncia
          </h2>
          <div className="context-text" data-name="Contexto de la obra">
            <p>
              Publicada en 1928, <em>Hintergrund</em> reúne 17 láminas de George Grosz. Su mirada
              satírica cuestiona la violencia y las relaciones de poder.
            </p>
            <p>
              Frente a la exaltación del conflicto que has explorado en el futurismo, esta obra
              propone otra forma de intervenir en la realidad: la crítica.
            </p>
          </div>
        </section>

        <section className="advance-section" data-name="Continuar a la parada 2">
          <button
            type="button"
            className="advance-btn"
            onClick={() => goToScreen('stop-02-scan')}
            data-name="Continuar a la parada 2"
          >
            <span className="advance-label" data-name="Etiqueta">
              Continuar a la parada 02
            </span>
            <ArrowRight size={20} color="#ffffff" strokeWidth={2.2} />
          </button>
          <p className="advance-hint" data-name="Próxima parada">
            Siguiente: El acorazado Potemkin
          </p>
        </section>
      </main>

      <EditorialFooter labelLeft="CONFLICTO Y ARTE" labelRight="Recorrido narrativo" />

      <style>{`
        .screen-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        .hintergrund-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          padding-bottom: 28px;
          flex: 1;
        }

        .hintergrund-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .doc-category {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .doc-name {
          font-size: 40px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.06;
        }

        .doc-author {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .artwork-display {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          margin: 6px 0;
        }

        .artwork-stage {
          height: 250px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #faf7f2;
          border-radius: var(--border-radius-sm);
          overflow: hidden;
        }

        .artwork-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .artwork-credits {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          text-align: center;
          line-height: 1.35;
        }

        .context-analysis {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
        }

        .context-headline {
          font-size: 24px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .context-text {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--text-primary);
          line-height: 1.55;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .advance-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          margin-top: 14px;
        }

        .advance-btn {
          height: 56px;
          background-color: var(--conflicto-accent);
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          transition: filter var(--transition-fast), transform var(--transition-fast);
        }

        .advance-btn:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .advance-label {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .advance-hint {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          text-align: center;
        }
      `}</style>
    </div>
  );
};
