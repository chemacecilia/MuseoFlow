import React, { useState } from 'react';
import { Camera, ScanLine } from 'lucide-react';

interface QRScannerProps {
  onScanSuccess: () => void;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScanSuccess }) => {
  const [isScanning, setIsScanning] = useState(false);

  const handleTriggerScan = () => {
    setIsScanning(true);
    // Simulate camera scanning duration then open modal
    setTimeout(() => {
      setIsScanning(false);
      onScanSuccess();
    }, 1200);
  };

  return (
    <div className="scanner-section" data-name="Escaneo de la obra">
      <div className="scanner-titles">
        <h4 className="scanner-heading">01 · Escanea el QR de la obra</h4>
        <p className="scanner-subtext">
          Enfoca el código junto a la obra. Después, observa y responde a la pregunta.
        </p>
      </div>

      <div className={`viewfinder-container ${isScanning ? 'active-scan' : ''}`} data-name="Vista ilustrativa de escaneo">
        {/* Reticle frame */}
        <div className="reticle-frame">
          <div className="reticle-corner top-left" />
          <div className="reticle-corner top-right" />
          <div className="reticle-corner bottom-left" />
          <div className="reticle-corner bottom-right" />
          
          <div className="reticle-camera-icon">
            <Camera size={26} color="#ffffff" strokeWidth={1.8} />
          </div>

          <div className="reticle-laser" />
        </div>

        <p className="reticle-guide">
          {isScanning ? 'Escaneando código QR...' : 'Encuadra aquí el código QR'}
        </p>
      </div>

      <button
        className="scan-action-btn"
        onClick={handleTriggerScan}
        disabled={isScanning}
        data-name="Acción principal"
      >
        <span className="scan-btn-label">
          {isScanning ? 'Analizando QR...' : 'Escanear QR de la obra'}
        </span>
        <ScanLine size={20} color="#ffffff" strokeWidth={2} />
      </button>

      <p className="scanner-disclaimer" data-name="Nota de la vista">
        Simulación de escaneo · Sin acceso a cámara
      </p>

      <style>{`
        .scanner-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .scanner-titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .scanner-heading {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .scanner-subtext {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .viewfinder-container {
          background-color: var(--bg-dark);
          height: 154px;
          border-radius: var(--border-radius-sm);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .reticle-frame {
          width: 98px;
          height: 98px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reticle-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          border-color: #ffffff;
          border-style: solid;
        }

        .top-left {
          top: 0;
          left: 0;
          border-width: 2px 0 0 2px;
        }

        .top-right {
          top: 0;
          right: 0;
          border-width: 2px 2px 0 0;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-width: 0 0 2px 2px;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-width: 0 2px 2px 0;
        }

        .reticle-camera-icon {
          opacity: 0.85;
          margin-bottom: 6px;
        }

        .reticle-laser {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--conflicto-accent);
          box-shadow: 0 0 8px var(--conflicto-accent);
          animation: laserSweep 2.2s infinite ease-in-out;
        }

        .reticle-guide {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          color: var(--text-light);
          margin-top: 8px;
        }

        .scan-action-btn {
          height: 44px;
          background-color: var(--conflicto-accent);
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }

        .scan-action-btn:hover:not(:disabled) {
          filter: brightness(1.06);
          transform: translateY(-1px);
        }

        .scan-btn-label {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 13px;
          color: #ffffff;
        }

        .scanner-disclaimer {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        @keyframes laserSweep {
          0% {
            top: 15%;
            opacity: 0.4;
          }
          50% {
            top: 85%;
            opacity: 1;
          }
          100% {
            top: 15%;
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};
