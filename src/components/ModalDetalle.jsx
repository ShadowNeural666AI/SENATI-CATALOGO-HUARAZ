import React, { useState } from 'react';

export default function ModalDetalle({ producto, onCerrar, onAgregarCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  if (!producto) return null;

  const handleAgregar = () => {
    onAgregarCarrito(producto, cantidad);
    onCerrar();
  };

  return (
    <div className="modal-detalle-overlay" onClick={onCerrar}>
      <div className="modal-detalle-card" onClick={(e) => e.stopPropagation()}>
        <button className="btn-modal-cerrar" onClick={onCerrar} title="Cerrar modal">
          ✕
        </button>

        <div className="modal-detalle-grid">
          {/* Imagen y badges */}
          <div className="modal-detalle-img-wrap">
            {producto.badge && (
              <span className={`badge-producto ${producto.badgeType || 'nuevo'}`}>
                {producto.badge}
              </span>
            )}
            <img src={producto.imagen} alt={producto.nombre} className="modal-img-grande" />
          </div>

          {/* Información completa */}
          <div className="modal-detalle-info">
            <span className="modal-categoria-etiqueta">{producto.categoria}</span>
            <h2 className="modal-producto-titulo">{producto.nombre}</h2>
            <p className="modal-marca-etiqueta">Marca: <strong>{producto.marca}</strong></p>

            <div className="modal-precio-bloque">
              <span className="modal-precio-actual">
                S/ {producto.precio.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
              </span>
              {producto.precioAnterior && (
                <span className="modal-precio-anterior">
                  S/ {producto.precioAnterior.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                </span>
              )}
              <span className="badge-stock">
                Stock: {producto.stock} disponibles
              </span>
            </div>

            {/* Chips de especificaciones */}
            {producto.specs && (
              <div className="modal-specs-wrap">
                <h4>Especificaciones principales:</h4>
                <div className="producto-chips-specs">
                  {producto.specs.map((spec, i) => (
                    <span key={i} className="chip-spec">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-descripcion-ext">
              <h4>Descripción:</h4>
              <p>{producto.detalle || producto.descripcion}</p>
            </div>

            <div className="modal-garantia-badge">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00C2FF" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Garantía Oficial SENATI de 12 meses y soporte técnico en sede Huaraz.</span>
            </div>

            {/* Selector de cantidad y agregar */}
            <div className="modal-acciones-compra">
              <div className="contador-cantidades modal-contador">
                <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="btn-cant">-</button>
                <span className="numero-cant">{cantidad}</span>
                <button onClick={() => setCantidad(Math.min(producto.stock, cantidad + 1))} className="btn-cant">+</button>
              </div>

              <button className="btn-modal-agregar" onClick={handleAgregar}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span>Agregar {cantidad > 1 ? `(${cantidad})` : ''} al carrito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
