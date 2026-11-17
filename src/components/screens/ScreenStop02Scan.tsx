import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Header } from '../common/Header';
import { ProgressBar } from '../common/ProgressBar';
import { QRScanner } from '../common/QRScanner';
import { EditorialFooter } from '../common/EditorialFooter';
import { useMuseum } from '../../context/MuseumContext';

export const ScreenStop02Scan: React.FC = () => {
  const { stop02Answer, selectStop02Answer, submitStop02, openPotemkinModal } = useMuseum();

  const options: Array<{ key: 'A' | 'B' | 'C'; text: string }> = [
    {
      key: 'A',
      text: 'Sí, porque las imágenes pueden transmitir ideas y construir una visión de la realidad.'
    },
    {
      key: 'B',
      text: 'No, porque el arte y la política son ámbitos completamente separados.'
    },
    {
      key: 'C',
      text: 'Solo si la obra contiene mensajes escritos explícitos.'
    }
  ];

  const isAnswerSelected = stop02Answer !== null;

  return (
    <div className="screen-container screen-fade-enter" data-name="Pantalla 5 · Parada 02 · Escaneo y pregunta">
      <Header showBack={true} showMap={true} />

      <main className="stop-scan-content" data-name="Segunda parada">
        <ProgressBar routeName="CONFLICTO" currentStop={2} totalStops={12} accentColor="#b22d6e" />

        <section className="stop-theme" data-name="Tema de la parada">
          <span className="theme-eyebrow" data-name="Antetítulo">
            PREGUNTA DE INVESTIGACIÓN
          </span>
          <h1 className="theme-title font-serif" data-name="Nombre de la parada">
            El acorazado Potemkin
          </h1>
        </section>

        <p className="narrative-doc" data-name="Narrativa · Documento 002">
          Este documento parece haber sido creado para algo más que contar una historia. Sospechamos
          que alguien quería que quienes lo vieran pensaran de una determinada manera.
        </p>

        {/* Scanner Viewfinder Block */}
        <QRScanner onScanSuccess={openPotemkinModal} />

        {/* Question & Options */}
        <section className="qa-block" data-name="Pregunta y respuestas">
          <div className="question-header" data-name="Segunda pregunta">
            <span className="question-instruction-tag" data-name="Instrucción de respuesta">
              02 · RESPONDE TRAS ESCANEAR
            </span>
            <h2 className="question-main-text font-serif" data-name="Pregunta">
              ¿Puede una película convertirse en un arma política?
            </h2>
          </div>

          <p className="question-hint" data-name="Pista de investigación">
            Pensá en el poder de las imágenes para influir en quienes las observan.
          </p>

          <div className="options-container" data-name="Tres opciones de respuesta">
            {options.map((option) => {
              const isSelected = stop02Answer === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  className={`answer-choice ${isSelected ? 'active-choice' : ''}`}
                  onClick={() => selectStop02Answer(option.key)}
                  data-name="Opción de respuesta"
                >
                  <div className="choice-marker" data-name="Marcador de respuesta">
                    <span className="choice-letter" data-name="Letra">
                      {option.key}
                    </span>
                  </div>
                  <p className="choice-text" data-name="Respuesta">
                    {option.text}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Confirmation & Submit */}
        <section className="confirm-section" data-name="Confirmación de respuesta">
          <button
            type="button"
            className={`submit-stop-btn ${isAnswerSelected ? 'ready' : 'idle'}`}
            onClick={submitStop02}
            disabled={!isAnswerSelected}
            data-name="Acción principal"
          >
            <span className="btn-label" data-name="Etiqueta">
              Enviar respuesta
            </span>
            <div className="btn-arrow" data-name="Flecha de continuación">
              <ArrowRight size={20} color="#ffffff" strokeWidth={2.2} />
            </div>
          </button>

          <p className="helper-label" data-name="Instrucción">
            Elige una respuesta para seguir explorando.
          </p>
          <p className="educational-label" data-name="Nota educativa">
            Contenido educativo de ejemplo
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

        .stop-scan-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding: 24px;
          flex: 1;
        }

        .stop-theme {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .theme-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .theme-title {
          font-size: 29px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.15;
        }

        .narrative-doc {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .qa-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }

        .question-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .question-instruction-tag {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .question-main-text {
          font-size: 29px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.13;
        }

        .question-hint {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .options-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          margin-top: 6px;
        }

        .answer-choice {
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

        .answer-choice:hover {
          border-color: #b22d6e;
          transform: translateY(-1px);
        }

        .answer-choice.active-choice {
          border-color: #b22d6e;
          background-color: var(--conflicto-bg-soft);
          box-shadow: 0 2px 8px rgba(178, 45, 110, 0.12);
        }

        .choice-marker {
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

        .answer-choice.active-choice .choice-marker {
          border-color: var(--conflicto-accent);
          background-color: var(--conflicto-accent);
        }

        .choice-letter {
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .answer-choice.active-choice .choice-letter {
          color: #ffffff;
          font-weight: 600;
        }

        .choice-text {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.45;
          flex: 1;
        }

        .confirm-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          margin-top: 6px;
        }

        .submit-stop-btn {
          height: 56px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          transition: all var(--transition-fast);
        }

        .submit-stop-btn.ready {
          background-color: var(--conflicto-accent);
          cursor: pointer;
        }

        .submit-stop-btn.ready:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .submit-stop-btn.idle {
          background-color: #78736b;
          cursor: not-allowed;
          opacity: 0.8;
        }

        .btn-label {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .btn-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .helper-label, .educational-label {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          text-align: center;
        }

        .educational-label {
          margin-top: -4px;
        }
      `}</style>
    </div>
  );
};
