import React from 'react';

interface EditorialFooterProps {
  labelLeft?: string;
  labelRight?: string;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({
  labelLeft = 'OTRAS FORMAS DE MIRAR',
  labelRight = 'Recorrido narrativo'
}) => {
  return (
    <footer className="editorial-footer" data-name="Pie editorial">
      <span className="footer-left">{labelLeft}</span>
      <span className="footer-right">{labelRight}</span>

      <style>{`
        .editorial-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 52px;
          padding: 0 24px;
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 400;
          color: var(--text-secondary);
          width: 100%;
          letter-spacing: 0.5px;
          border-top: 1px solid rgba(215, 210, 199, 0.4);
          margin-top: auto;
        }

        .footer-left {
          text-transform: uppercase;
        }

        .footer-right {
          text-align: right;
        }
      `}</style>
    </footer>
  );
};
