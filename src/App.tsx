import React from 'react';
import { MuseumProvider, useMuseum } from './context/MuseumContext';
import { ScreenWelcome } from './components/screens/ScreenWelcome';
import { ScreenRouteMap } from './components/screens/ScreenRouteMap';
import { ScreenStop01Question } from './components/screens/ScreenStop01Question';
import { ScreenStop01Explanation } from './components/screens/ScreenStop01Explanation';
import { ScreenHintergrundDetail } from './components/screens/ScreenHintergrundDetail';
import { ScreenStop02Scan } from './components/screens/ScreenStop02Scan';
import { ScreenLanguageSelect } from './components/screens/ScreenLanguageSelect';
import { ModalPotemkinArtwork } from './components/modals/ModalPotemkinArtwork';
import { ModalStop02Reflection } from './components/modals/ModalStop02Reflection';
import { ModalQuickMap } from './components/modals/ModalQuickMap';
import { ScreenType } from './types';

const AppContent: React.FC = () => {
  const { currentScreen, goToScreen } = useMuseum();

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <ScreenWelcome />;
      case 'route-map':
        return <ScreenRouteMap />;
      case 'stop-01-question':
        return <ScreenStop01Question />;
      case 'stop-01-explanation':
        return <ScreenStop01Explanation />;
      case 'hintergrund-detail':
        return <ScreenHintergrundDetail />;
      case 'stop-02-scan':
        return <ScreenStop02Scan />;
      case 'language-select':
        return <ScreenLanguageSelect />;
      default:
        return <ScreenWelcome />;
    }
  };

  const navItems: Array<{ id: ScreenType; label: string }> = [
    { id: 'welcome', label: '1. Bienvenida' },
    { id: 'route-map', label: '2. Mapa' },
    { id: 'stop-01-question', label: '3. Parada 01' },
    { id: 'stop-01-explanation', label: '4. Explicación' },
    { id: 'hintergrund-detail', label: '4A. Hintergrund' },
    { id: 'stop-02-scan', label: '5. Parada 02' },
    { id: 'language-select', label: 'Idioma' }
  ];

  return (
    <div className="museum-flow-app">
      {/* Desktop Navigation Helper Bar */}
      <aside className="desktop-inspector-bar">
        <div className="inspector-brand">
          <span className="inspector-dot" />
          <span className="inspector-title">MuseoFlow · Prototipo Activo</span>
        </div>
        <nav className="inspector-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`inspector-nav-btn ${currentScreen === item.id ? 'active' : ''}`}
              onClick={() => goToScreen(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Museum Mobile Experience Container */}
      <div className="app-viewport-wrapper">
        {renderActiveScreen()}

        {/* Global Dialogs & Modals */}
        <ModalPotemkinArtwork />
        <ModalStop02Reflection />
        <ModalQuickMap />
      </div>

      <style>{`
        .museum-flow-app {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #eeeae0;
        }

        .desktop-inspector-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1100px;
          padding: 10px 24px;
          background: #24231f;
          color: #fffdfa;
          border-radius: 0 0 12px 12px;
          margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        @media (max-width: 900px) {
          .desktop-inspector-bar {
            display: none;
          }
        }

        .inspector-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .inspector-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #2ed573;
          box-shadow: 0 0 8px #2ed573;
        }

        .inspector-title {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #fffdfa;
        }

        .inspector-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .inspector-nav-btn {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: #d7d2c7;
          padding: 5px 10px;
          border-radius: 4px;
          transition: all var(--transition-fast);
        }

        .inspector-nav-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .inspector-nav-btn.active {
          color: #ffffff;
          background-color: var(--conflicto-accent);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <MuseumProvider>
      <AppContent />
    </MuseumProvider>
  );
};

export default App;
