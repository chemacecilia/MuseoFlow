import React from 'react';
import { Check } from 'lucide-react';
import { Header } from '../common/Header';
import { useMuseum } from '../../context/MuseumContext';
import { LANGUAGES } from '../../data/museumData';
import { LanguageCode } from '../../types';

export const ScreenLanguageSelect: React.FC = () => {
  const { language, setLanguage, goBack, t } = useMuseum();

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
  };

  return (
    <div className="screen-container screen-fade-enter" data-name="Selección de idioma">
      <Header showLang={true} />

      <main className="lang-preferences-content" data-name="Preferencias de idioma">
        <section className="lang-hero" data-name="Elige cómo explorar">
          <span className="lang-eyebrow" data-name="Antetítulo">
            {t('editorial_header')}
          </span>
          <h1 className="lang-title font-serif" data-name="Título">
            {t('choose_language')}
          </h1>
          <p className="lang-description" data-name="Descripción">
            {t('choose_language_desc')}
          </p>
        </section>

        <section className="languages-list" data-name="Idiomas disponibles">
          {LANGUAGES.map((item) => {
            const isSelected = language === item.code;

            return (
              <div
                key={item.code}
                className={`language-card ${isSelected ? 'active-lang' : ''}`}
                onClick={() => handleSelectLanguage(item.code)}
                role="button"
                tabIndex={0}
                data-name={`Idioma · ${item.native}`}
              >
                <div className="lang-name-col" data-name="Nombre del idioma">
                  <span className="lang-native-name" data-name="Nombre nativo">
                    {item.native}
                  </span>
                  <span className="lang-translated-name" data-name="Nombre traducido">
                    {item.translated}
                  </span>
                </div>

                <div className="lang-code-box">
                  {isSelected && <Check size={14} color="#b22d6e" strokeWidth={2.5} />}
                  <span className="lang-code-text" data-name="Código de idioma">
                    {item.code}
                  </span>
                </div>
              </div>
            );
          })}
        </section>

        <p className="global-scope-note" data-name="Aplicación global">
          {t('language_global_note')}
        </p>

        <section className="return-action" data-name="Volver al inicio">
          <button
            type="button"
            className="return-home-btn"
            onClick={goBack}
            data-name="Volver"
          >
            <span>{t('return_home')}</span>
          </button>
        </section>
      </main>

      <style>{`
        .screen-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }

        .lang-preferences-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 24px;
          flex: 1;
        }

        .lang-hero {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lang-eyebrow {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--conflicto-accent);
          letter-spacing: 1.45px;
          text-transform: uppercase;
        }

        .lang-title {
          font-size: 42px;
          font-weight: 400;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .lang-description {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .languages-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .language-card {
          min-height: 71px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: var(--border-radius-sm);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .language-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-1px);
        }

        .language-card.active-lang {
          border-color: var(--conflicto-accent);
          background-color: var(--conflicto-bg-soft);
          box-shadow: 0 2px 8px rgba(178, 45, 110, 0.08);
        }

        .lang-name-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .lang-native-name {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .lang-translated-name {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .lang-code-box {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .lang-code-text {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 0.5px;
        }

        .language-card.active-lang .lang-code-text {
          color: var(--conflicto-accent);
        }

        .global-scope-note {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .return-action {
          width: 100%;
          margin-top: 4px;
        }

        .return-home-btn {
          height: 50px;
          background-color: var(--text-primary);
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          transition: filter var(--transition-fast), transform var(--transition-fast);
        }

        .return-home-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};
