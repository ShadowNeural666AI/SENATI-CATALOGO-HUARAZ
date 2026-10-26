import React from 'react';

export default function HeroBanner({ onExplorar }) {
  return (
    <section className="hero-banner">
      <div className="hero-grid">
        {/* Columna Izquierda: Información y propuesta de valor */}
        <div className="hero-texto">
          <div className="hero-badge-institucional">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>SENATI - CFP HUARAZ</span>
          </div>

          <h1 className="hero-titulo">
            Tu Tienda Tecnológica <br />
            <span className="texto-cyan">en Huaraz</span>
          </h1>

          <p className="hero-descripcion">
            Equipos, accesorios y soluciones tecnológicas para tu formación y futuro profesional.
          </p>

          <div className="hero-garantias">
            <div className="garantia-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C2FF" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Productos originales</span>
            </div>
            <div className="garantia-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C2FF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Garantía SENATI</span>
            </div>
            <div className="garantia-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C2FF" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              <span>Asesoría técnica</span>
            </div>
            <div className="garantia-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C2FF" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span>Envíos / Retiro en tienda</span>
            </div>
          </div>

          <button className="boton-explorar" onClick={onExplorar}>
            <span>Explorar catálogo</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        {/* Lado Derecho: Despejado para lucir el setup tecnológico de la imagen de fondo */}
        <div className="hero-espacio-despejado">
          <div className="hero-slogan-flotante">
            <span className="slogan-cursiva">Tecnología</span>
            <span className="slogan-sub">que impulsa tu talento</span>
          </div>
        </div>
      </div>
    </section>
  );
}
