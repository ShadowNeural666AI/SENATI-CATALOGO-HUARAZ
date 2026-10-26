import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-institucional">
      <div className="footer-principal-wrap">
        {/* Marca y Lema */}
        <div className="footer-col-marca">
          <div className="senati-emblema footer-emblema">
            <svg viewBox="0 0 44 44" className="senati-icono" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 3L39 12.8V32.2L22 42L5 32.2V12.8L22 3Z" fill="#003876" stroke="#00C2FF" strokeWidth="1.5" />
              <path d="M15 16L22 11.5L29 16V22L22 17.5L17.5 20.5L26.5 26L22 30.5L15 26V20.5L22 25L26.5 22L17.5 16H15Z" fill="#FFFFFF" />
              <circle cx="22" cy="21" r="2.8" fill="#00C2FF" />
            </svg>
            <div className="senati-texto-marca">
              <div className="senati-titulo-wrap">
                <span className="senati-marca-nombre">SENATI</span>
                <span className="senati-separador">|</span>
                <span className="senati-sede">CFP HUARAZ</span>
              </div>
              <span className="senati-lema">Formación técnica para un mejor futuro</span>
            </div>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-col-links">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#categorias">Categorías</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/* Datos de Contacto y Ubicación */}
        <div className="footer-col-contacto">
          <div className="contacto-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C2FF" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Jr. Los Libertadores s/n Huaraz - Áncash</span>
          </div>
          <div className="contacto-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C2FF" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>(043) 421-000 Anexo 123</span>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="footer-col-sociales">
          <button className="social-btn" title="Facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </button>
          <button className="social-btn" title="Instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </button>
          <button className="social-btn" title="Twitter / X" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </button>
          <button className="social-btn" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright-barra">
        <p>© 2026 SENATI CFP Huaraz. Todos los derechos reservados.</p>
        <p className="copyright-tienda">Tienda Tecnológica Huaraz</p>
      </div>
    </footer>
  );
}
