import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Header } from '../common/Header';
import { ProgressBar } from '../common/ProgressBar';
import { AudioPlayer } from '../common/AudioPlayer';
import { EditorialFooter } from '../common/EditorialFooter';
import { useMuseum } from '../../context/MuseumContext';

export const ScreenStop01Explanation: React.FC = () => {
  const { goToScreen } = useMuseum();

  return (
    <div className="screen-container screen-fade-enter" data-name="Pantalla 4 · Parada 01 · Explicación y audio">
      <Header showBack={true} showMap={true} />

      <main className="stop-explanation-content" data-name="Respuesta explicada">
        <ProgressBar
          routeName="CONFLICTO"
          currentStop={1}
          totalStops={12}
          isCompleted={true}
          accentColor="#b22d6e"
        />

        <section className="reflection-context" data-name="Contexto de la reflexión">
          <span className="reflection-eyebrow" data-name="Antetítulo">
            GUERRAPITTURA
          </span>
          <h1 className="reflection-heading font-serif" data-name="Título">
            El arte también<br />puede hacer guerra.
          </h1>
          <p className="question-echo" data-name="Pregunta">
            ¿Y si el arte también pudiera ser una forma de hacer la guerra?
          </p>
        </section>

        <section className="correct-answer-card" data-name="Respuesta correcta">
          <div className="card-status-header" data-name="Estado de la respuesta">
            <CheckCircle size={18} color="#b22d6e" strokeWidth={2.4} />
            <span className="status-label" data-name="Resultado">
              RESPUESTA DE REFERENCIA · A
            </span>
          </div>
          <p className="reference-answer-text font-serif" data-name="Respuesta">
            Una nueva forma de interpretar y transformar la realidad.
          </p>
        </section>

        <AudioPlayer />

        <section className="text-explanation-box" data-name="Explicación escrita equivalente">
          <span className="concept-eyebrow" data-name="Etiqueta">
            EXPONER EL CONCEPTO
          </span>
          <p className="concept-text" data-name="Explicación">
            El futurismo rompe con la representación tradicional para exaltar el dinamismo,
            la velocidad y la transformación. En este contexto, la Guerrapittura puede entenderse
            como una forma de arte que busca intervenir en la realidad, pero también plantea una
            relación problemática con la exaltación del conflicto.
          </p>
          <p className="concept-disclaimer" data-name="Nota del contenido">
            Puedes leer la explicación mientras se incorpora el audio.
          </p>
        </section>

        {/* Extra Document: Hintergrund */}
        <section
          className="extra-document-card"
          onClick={() => goToScreen('hintergrund-detail')}
          role="button"
          tabIndex={0}
          data-name="Documento adicional · Hintergrund"
        >
          <span className="doc-type" data-name="Tipo de documento">
            DOCUMENTO ADICIONAL
          </span>
          <h3 className="doc-title font-serif" data-name="Título">
            Hintergrund
          </h3>
          <span className="doc-link" data-name="Estado del documento">
            Ver la obra y descubrir su contexto →
          </span>
        </section>

        {/* Continue to Stop 02 */}
        <section className="continue-journey-block" data-name="Continuar el recorrido">
          <button
            type="button"
            className="continue-btn"
            onClick={() => goToScreen('stop-02-scan')}
            data-name="Acción principal"
          >
            <span className="continue-label" data-name="Etiqueta">
              Continuar a la parada 02
            </span>
            <div className="btn-icon">
              <ArrowRight size={20} color="#ffffff" strokeWidth={2.2} />
            </div>
          </button>
          <p className="next-stop-hint" data-name="Próxima parada">
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

        .stop-explanation-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 24px;
          flex: 1;
        }

        .reflection-context {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .reflection-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .reflection-heading {
          font-size: 40px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.06;
        }

        .question-echo {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .correct-answer-card {
          background-color: var(--conflicto-bg-soft);
          border-left: 3px solid var(--conflicto-accent);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .card-status-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-label {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 0.5px;
        }

        .reference-answer-text {
          font-size: 23px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .text-explanation-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .concept-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .concept-text {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.55;
        }

        .concept-disclaimer {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 400;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .extra-document-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--border-radius-sm);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .extra-document-card:hover {
          border-color: var(--conflicto-accent);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(178, 45, 110, 0.08);
        }

        .doc-type {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          letter-spacing: 0.5px;
        }

        .doc-title {
          font-size: 24px;
          font-weight: 400;
          color: var(--conflicto-accent);
          text-decoration: underline;
          text-underline-position: from-font;
        }

        .doc-link {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--conflicto-accent);
          line-height: 1.5;
        }

        .continue-journey-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          margin-top: 6px;
        }

        .continue-btn {
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

        .continue-btn:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .continue-label {
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

        .next-stop-hint {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--text-secondary);
          text-align: center;
        }
      `}</style>
    </div>
  );
};
