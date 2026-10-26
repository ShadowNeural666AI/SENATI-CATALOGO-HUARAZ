import React from 'react';

export default function RightSidebar({ onVerOfertas }) {
  const abrirWhatsApp = () => {
    const url = 'https://wa.me/51943421000?text=Hola%20SENATI%20CFP%20Huaraz,%20deseo%20consultar%20sobre%20los%20equipos%20del%20catálogo%20tecnológico.';
    window.open(url, '_blank');
  };

  return (
    <aside className="promos-sidebar">
      {/* 1. Ofertas Especiales */}
      <div className="promo-card ofertas-card">
        <div className="ofertas-overlay">
          <h4>Ofertas Especiales</h4>
          <p>Los mejores precios en tecnología</p>
          <button className="boton-ver-ofertas" onClick={onVerOfertas}>
            Ver ofertas
          </button>
        </div>
        <img
          src="/images/promo_ofertas.jpg"
          alt="Ofertas Especiales"
          className="promo-bg-img"
        />
      </div>

      {/* 2. Envíos y Retiro */}
      <div className="promo-card envios-card">
        <div className="envios-info">
          <h4>Envíos y Retiro</h4>
          <p>Recibe tu pedido en Huaraz o retíralo en nuestra sede.</p>
        </div>
        <div className="envios-icono-wrap">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
      </div>

      {/* 3. ¿Necesitas ayuda? WhatsApp */}
      <div className="promo-card soporte-card">
        <div className="soporte-icono">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#00C2FF" strokeWidth="2">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
          </svg>
        </div>
        <div className="soporte-texto">
          <h4>¿Necesitas ayuda?</h4>
          <p>Contáctanos por WhatsApp</p>
        </div>
        <button className="boton-whatsapp" onClick={abrirWhatsApp}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.67-1.39 1.28-1.92 1.35-.49.07-1.12.1-3.23-.77-2.69-1.12-4.42-3.86-4.56-4.04-.13-.18-1.09-1.46-1.09-2.78 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.62.54.24.52.81 1.98.88 2.13.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.32.38-.46.51-.15.15-.31.31-.13.62.18.31.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.66-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.77.83 2.07.98.3.15.5.23.57.36.07.13.07.75-.17 1.42z"/>
          </svg>
          <span>Escríbenos</span>
        </button>
      </div>

      {/* 4. Formas de Pago */}
      <div className="promo-card pagos-card">
        <h4>Formas de pago</h4>
        <div className="pagos-insignias">
          <div className="pago-badge yape-badge" title="Yape">
            <span>yape</span>
          </div>
          <div className="pago-badge plin-badge" title="Plin">
            <span>plin</span>
          </div>
          <div className="pago-badge bcp-badge" title="BCP">
            <span>&gt;BCP</span>
          </div>
        </div>
        <p className="pagos-subtexto">Rápido · Seguro · Fácil</p>
      </div>

      {/* 5. SENATI Institucional Huaraz */}
      <div className="promo-card senati-card-split">
        <div className="senati-split-info">
          <div className="senati-card-header">
            <svg viewBox="0 0 28 28" width="22" height="22" fill="none">
              <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" fill="#003876" stroke="#00C2FF" strokeWidth="1.2" />
              <path d="M9 10L14 7L19 10V14L14 11L11 13L17 17L14 20L9 17V13L14 16L17 14L11 10H9Z" fill="#FFFFFF" />
            </svg>
            <div className="senati-card-textos">
              <h5>SENATI</h5>
              <span>CFP HUARAZ</span>
            </div>
          </div>
          <p className="senati-lema-card">Tu formación<br />nuestro compromiso</p>
        </div>
        <img
          src="/images/senati_campus_huaraz.jpg"
          alt="Campus SENATI Huaraz"
          className="campus-img-split"
        />
      </div>
    </aside>
  );
}
