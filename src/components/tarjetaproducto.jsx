import React, { useState } from 'react';

export default function TarjetaProducto({
  producto,
  onAgregarCarrito,
  onVerDetalle,
}) {
  const [esDeseo, setEsDeseo] = useState(false);
  const [agregando, setAgregando] = useState(false);

  // Agregar producto al carrito
  const handleAgregar = () => {
    if (typeof onAgregarCarrito !== 'function') return;

    setAgregando(true);
    onAgregarCarrito(producto);

    setTimeout(() => {
      setAgregando(false);
    }, 600);
  };

  // Ver detalle del producto
  const handleVerDetalle = () => {
    if (typeof onVerDetalle === 'function') {
      onVerDetalle(producto);
    }
  };

  // Iconos representativos para las especificaciones
  const renderSpecIcon = (spec) => {
    const s = String(spec).toLowerCase();

    const iconProps = {
      viewBox: '0 0 24 24',
      width: 11,
      height: 11,
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      'aria-hidden': true,
    };

    if (
      s.includes('i3') ||
      s.includes('i5') ||
      s.includes('i7') ||
      s.includes('i9') ||
      s.includes('ryzen') ||
      s.includes('cpu') ||
      s.includes('procesador')
    ) {
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3" />
          <path d="M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
      );
    }

    if (
      s.includes('ram') ||
      /\b\d+\s*gb\b/.test(s)
    ) {
      return (
        <svg {...iconProps}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 10v4M10 10v4M14 10v4M18 10v4" />
          <path d="M5 18v3M9 18v3M13 18v3M17 18v3" />
        </svg>
      );
    }

    if (
      s.includes('ssd') ||
      s.includes('hdd') ||
      s.includes('512gb') ||
      s.includes('1tb') ||
      s.includes('2tb') ||
      s.includes('almacenamiento')
    ) {
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 16h.01M17 16h.01" />
        </svg>
      );
    }

    if (
      s.includes('"') ||
      s.includes('pulgadas') ||
      s.includes('screen') ||
      s.includes('pantalla') ||
      s.includes('hd')
    ) {
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    }

    if (s.includes('rgb')) {
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
        </svg>
      );
    }

    if (
      s.includes('dpi') ||
      s.includes('hz') ||
      s.includes('mb/s') ||
      s.includes('velocidad') ||
      s.includes('frecuencia')
    ) {
      return (
        <svg {...iconProps}>
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M16 2.5A10 10 0 0 1 21.5 8H16V2.5z" />
        </svg>
      );
    }

    if (
      s.includes('usb') ||
      s.includes('m.2') ||
      s.includes('hdmi') ||
      s.includes('conexión')
    ) {
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="19" r="2" />
          <path d="M12 17V5M7 8l5-5 5 5" />
        </svg>
      );
    }

    if (s.includes('wifi') || s.includes('inalámbrico')) {
      return (
        <svg {...iconProps}>
          <path d="M2 8.5a15 15 0 0 1 20 0" />
          <path d="M5 12a10 10 0 0 1 14 0" />
          <path d="M8.5 15.5a5 5 0 0 1 7 0" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    }

    return (
      <svg {...iconProps}>
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2z" />
      </svg>
    );
  };

  // Validación básica del producto
  if (!producto) return null;

  const precio = Number(producto.precio) || 0;
  const precioAnterior = Number(producto.precioAnterior) || 0;
  const stock = Number(producto.stock) || 0;

  return (
    <article className="tarjeta-producto-card">
      {/* Insignia y botón de favoritos */}
      <div className="tarjeta-top-tags">
        {producto.badge ? (
          <span
            className={`badge-producto ${producto.badgeType || 'nuevo'}`}
          >
            {producto.badge}
          </span>
        ) : (
          <span />
        )}

        <button
          type="button"
          className={`btn-favorito ${esDeseo ? 'activo' : ''}`}
          onClick={() => setEsDeseo((actual) => !actual)}
          title={esDeseo ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          aria-label={
            esDeseo ? 'Quitar de favoritos' : 'Agregar a favoritos'
          }
          aria-pressed={esDeseo}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill={esDeseo ? '#ef4444' : 'none'}
            stroke={esDeseo ? '#ef4444' : '#94a3b8'}
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Imagen del producto */}
      <div
        className="tarjeta-img-contenedor"
        onClick={handleVerDetalle}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleVerDetalle();
          }
        }}
        aria-label={`Ver detalle de ${producto.nombre}`}
      >
        <img
          src={producto.imagen}
          alt={producto.nombre || 'Imagen del producto'}
          className="tarjeta-imagen"
          loading="lazy"
        />
      </div>

      {/* Información del producto */}
      <div className="tarjeta-info">
        <h3
          className="producto-nombre"
          onClick={handleVerDetalle}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleVerDetalle();
            }
          }}
        >
          {producto.nombre}
        </h3>

        <p className="producto-descripcion-corta">
          {producto.descripcion}
        </p>

        {/* Especificaciones */}
        {Array.isArray(producto.specs) &&
          producto.specs.length > 0 && (
            <div className="producto-chips-specs">
              {producto.specs.map((spec, index) => (
                <span
                  key={`${spec}-${index}`}
                  className="chip-spec"
                >
                  {renderSpecIcon(spec)}
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          )}

        {/* Precio y stock */}
        <div className="producto-precio-fila">
          <div className="precio-montos">
            <span className="precio-actual">
              S/{' '}
              {precio.toLocaleString('es-PE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>

            {precioAnterior > precio && (
              <span className="precio-anterior">
                S/{' '}
                {precioAnterior.toLocaleString('es-PE', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            )}
          </div>

          <span
            className={`badge-stock ${stock > 0 ? 'disponible' : 'agotado'}`}
          >
            {stock > 0 ? `Stock: ${stock}` : 'Agotado'}
          </span>
        </div>

        {/* Botones de acción */}
        <div className="tarjeta-botones">
          <button
            type="button"
            className={`btn-agregar-carrito ${agregando ? 'animacion-bounce' : ''
              }`}
            onClick={handleAgregar}
            disabled={agregando || stock <= 0}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span>
              {stock <= 0
                ? 'Sin stock'
                : agregando
                  ? '¡Agregado!'
                  : 'Agregar al carrito'}
            </span>
          </button>

          <button
            type="button"
            className="btn-ver-detalle"
            onClick={handleVerDetalle}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>

            <span>Ver detalle</span>
          </button>
        </div>
      </div>
    </article>
  );
}