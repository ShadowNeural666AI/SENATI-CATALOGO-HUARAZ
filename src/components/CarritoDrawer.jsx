import React from 'react';

export default function CarritoDrawer({
  abierto,
  onCerrar,
  items,
  onActualizarCantidad,
  onEliminarItem,
  onVaciarCarrito
}) {
  if (!abierto) return null;

  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const igv = subtotal * 0.18;
  const total = subtotal;

  const enviarPedidoWhatsApp = () => {
    if (items.length === 0) return;
    let mensaje = `*¡Hola SENATI CFP Huaraz! Deseo realizar el siguiente pedido:*%0A%0A`;
    items.forEach((item, index) => {
      mensaje += `${index + 1}. *${item.nombre}* x ${item.cantidad} und. - S/ ${(item.precio * item.cantidad).toFixed(2)}%0A`;
    });
    mensaje += `%0A*Total Estimado:* S/ ${total.toFixed(2)}%0A`;
    mensaje += `*Cliente:* Consulta desde Catálogo Virtual Huaraz%0A%0A¿Tienen disponibilidad para retiro en sede o envío?`;
    window.open(`https://wa.me/51943421000?text=${mensaje}`, '_blank');
  };

  return (
    <div className="carrito-overlay" onClick={onCerrar}>
      <div className="carrito-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className="carrito-header">
          <div className="carrito-header-titulo">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h3>Carrito de Compras</h3>
            <span className="carrito-badge-cuenta">{items.reduce((acc, i) => acc + i.cantidad, 0)}</span>
          </div>
          <button className="btn-cerrar-drawer" onClick={onCerrar} title="Cerrar">
            ✕
          </button>
        </div>

        {/* Lista de productos en carrito */}
        <div className="carrito-items-lista">
          {items.length === 0 ? (
            <div className="carrito-vacio-estado">
              <div className="carrito-icono-vacio">🛒</div>
              <h4>Tu carrito está vacío</h4>
              <p>Agrega productos desde nuestro catálogo para cotizar o comprar.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="carrito-item-fila">
                <img src={item.imagen} alt={item.nombre} className="carrito-item-img" />
                <div className="carrito-item-detalles">
                  <h5 className="carrito-item-titulo">{item.nombre}</h5>
                  <p className="carrito-item-precio">
                    S/ {item.precio.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                  </p>
                  <div className="carrito-item-controles">
                    <div className="contador-cantidades">
                      <button
                        onClick={() => onActualizarCantidad(item.id, item.cantidad - 1)}
                        className="btn-cant"
                      >
                        -
                      </button>
                      <span className="numero-cant">{item.cantidad}</span>
                      <button
                        onClick={() => onActualizarCantidad(item.id, item.cantidad + 1)}
                        className="btn-cant"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onEliminarItem(item.id)}
                      className="btn-eliminar-item"
                      title="Eliminar producto"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumen y Acciones */}
        {items.length > 0 && (
          <div className="carrito-footer">
            <div className="carrito-totales">
              <div className="fila-total-sub">
                <span>Subtotal:</span>
                <span>S/ {(subtotal / 1.18).toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="fila-total-sub">
                <span>IGV (18% incluido):</span>
                <span>S/ {(subtotal - subtotal / 1.18).toLocaleString('es-PE', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="fila-total-final">
                <span>Total:</span>
                <span className="total-destacado">
                  S/ {total.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <div className="carrito-botones-accion">
              <button className="btn-pedido-whatsapp" onClick={enviarPedidoWhatsApp}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.67-1.39 1.28-1.92 1.35-.49.07-1.12.1-3.23-.77-2.69-1.12-4.42-3.86-4.56-4.04-.13-.18-1.09-1.46-1.09-2.78 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.62.54.24.52.81 1.98.88 2.13.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.32.38-.46.51-.15.15-.31.31-.13.62.18.31.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.66-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.77.83 2.07.98.3.15.5.23.57.36.07.13.07.75-.17 1.42z"/>
                </svg>
                <span>Cotizar pedido por WhatsApp</span>
              </button>

              <button
                className="btn-vaciar-carrito"
                onClick={onVaciarCarrito}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
