import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Header } from '../common/Header';
import { ProgressBar } from '../common/ProgressBar';
import { EditorialFooter } from '../common/EditorialFooter';
import { useMuseum } from '../../context/MuseumContext';

export const ScreenStop01Question: React.FC = () => {
  const { stop01Answer, selectStop01Answer, submitStop01 } = useMuseum();

  const options: Array<{ key: 'A' | 'B' | 'C'; text: string }> = [
    {
      key: 'A',
      text: 'Una nueva forma de interpretar y transformar la realidad.'
    },
    {
      key: 'B',
      text: 'Una representación fiel y neutral del mundo.'
    },
    {
      key: 'C',
      text: 'Una búsqueda exclusivamente decorativa.'
    }
  ];

  const isAnswerSelected = stop01Answer !== null;

  return (
    <div className="screen-container screen-fade-enter" data-name="Pantalla 3 · Conflicto · Guerrapittura">
      <Header showBack={true} showMap={true} />

      <main className="stop-content" data-name="Primera parada">
        <ProgressBar routeName="CONFLICTO" currentStop={1} totalStops={12} accentColor="#b22d6e" />

        <section className="stop-header" data-name="Tema de la parada">
          <span className="stop-eyebrow" data-name="Antetítulo">
            DOCUMENTO RECUPERADO
          </span>
          <h1 className="stop-title font-serif" data-name="Nombre de la parada">
            Guerrapittura
          </h1>
        </section>

        <p className="narrative-text" data-name="Narrativa · Documento 001">
          Documento 001 recuperado. No sabemos qué estaba intentando comunicar. Su autor parece
          haber roto con las formas tradicionales de representar el mundo.
        </p>

        <section className="artwork-stimulus" data-name="Estímulo visual">
          <div className="artwork-frame" data-name="Guerrapittura · Reproducción">
            <img
              src="/assets/guerrapittura.png"
              alt="Guerrapittura · Obra de referencia"
              className="artwork-img"
            />
          </div>
          <p className="artwork-caption" data-name="Pie de ilustración">
            Guerrapittura · Documento 001
          </p>
        </section>

        <section className="qa-section" data-name="Pregunta y respuestas">
          <h2 className="question-title font-serif" data-name="Pregunta">
            ¿Y si el arte también pudiera ser una forma de hacer la guerra?
          </h2>
          <p className="instruction-text" data-name="Instrucción">
            Observa la obra y selecciona una opción.
          </p>

          <div className="options-group" data-name="Tres opciones de respuesta">
            {options.map((option) => {
              const isSelected = stop01Answer === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  className={`answer-option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => selectStop01Answer(option.key)}
                  data-name="Opción de respuesta"
                >
                  <div className="option-marker" data-name="Marcador de respuesta">
                    <span className="marker-letter">{option.key}</span>
                  </div>
                  <p className="option-label" data-name="Respuesta">
                    {option.text}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="submission-section" data-name="Confirmación de respuesta">
          <button
            type="button"
            className={`submit-action-btn ${isAnswerSelected ? 'ready' : 'disabled'}`}
            onClick={submitStop01}
            disabled={!isAnswerSelected}
            data-name="Acción principal"
          >
            <span className="submit-label" data-name="Etiqueta">
              Enviar respuesta
            </span>
            <div className="btn-icon">
              <ArrowRight size={20} color="#ffffff" strokeWidth={2.2} />
            </div>
          </button>
        </section>
      </main>

      <EditorialFooter labelLeft="RUTA CONFLICTO" labelRight="Recorrido narrativo" />

      <style>{`
        .screen-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        .stop-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding: 24px;
          flex: 1;
        }

        .stop-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stop-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .stop-title {
          font-size: 29px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .narrative-text {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .artwork-stimulus {
          display: flex;
          flex-direction: column;
          gap: 7px;
          width: 100%;
        }

        .artwork-frame {
          height: 307px;
          border-radius: var(--border-radius-sm);
          border: 1px solid var(--conflicto-border);
          overflow: hidden;
          background-color: #24231f;
        }

        .artwork-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .artwork-caption {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
        }

        .qa-section {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 4px;
        }

        .question-title {
          font-size: 29px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.13;
        }

        .instruction-text {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-top: -6px;
        }

        .options-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .answer-option-card {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: var(--border-radius-sm);
          background-color: #ffffff;
          border: 1.5px solid #ded7d0;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .answer-option-card:hover {
          border-color: #b22d6e;
          transform: translateY(-1px);
        }

        .answer-option-card.selected {
          border-color: #b22d6e;
          background-color: var(--conflicto-bg-soft);
          box-shadow: 0 2px 8px rgba(178, 45, 110, 0.12);
        }

        .option-marker {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .answer-option-card.selected .option-marker {
          border-color: var(--conflicto-accent);
          background-color: var(--conflicto-accent);
        }

        .marker-letter {
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .answer-option-card.selected .marker-letter {
          color: #ffffff;
          font-weight: 600;
        }

        .option-label {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.45;
          flex: 1;
        }

        .submission-section {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 6px;
        }

        .submit-action-btn {
          height: 56px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          transition: all var(--transition-fast);
        }

        .submit-action-btn.ready {
          background-color: var(--conflicto-accent);
          cursor: pointer;
        }

        .submit-action-btn.ready:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .submit-action-btn.disabled {
          background-color: #78736b;
          cursor: not-allowed;
          opacity: 0.8;
        }

        .submit-label {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
