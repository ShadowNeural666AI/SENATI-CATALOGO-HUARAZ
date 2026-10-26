import React from 'react';

export default function Navbar({ cantidadCarrito, onAbrirCarrito }) {
  return (
    <header className="navbar-principal">
      <div className="navbar-contenido">
        {/* Logo SENATI CFP HUARAZ */}
        <div className="navbar-logo">
          <div className="senati-emblema">
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

        {/* Enlaces de Navegación */}
        <nav className="navbar-menu">
          <button className="nav-item activo">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            <span>Inicio</span>
          </button>
          <button className="nav-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span>Catálogo</span>
          </button>
          <button className="nav-item">
            <span>Categorías</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <button className="nav-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            <span>Ofertas</span>
          </button>
          <button className="nav-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Nosotros</span>
          </button>
          <button className="nav-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>Contacto</span>
          </button>
        </nav>

        {/* Acciones: Carrito + Perfil */}
        <div className="navbar-acciones">
          <button
            className="boton-carrito"
            onClick={onAbrirCarrito}
            title="Ver carrito de compras"
            aria-label="Carrito de compras"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cantidadCarrito > 0 && (
              <span className="badge-carrito">{cantidadCarrito}</span>
            )}
          </button>

          <button className="boton-usuario" title="Mi Cuenta" aria-label="Perfil de usuario">
            <div className="avatar-circulo">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="estado-online"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
