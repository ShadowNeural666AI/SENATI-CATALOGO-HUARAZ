import React, { useState } from 'react';
import TarjetaProducto from './tarjetaproducto';

export default function ListarProductos({
  productos,
  busqueda,
  setBusqueda,
  orden,
  setOrden,
  onAgregarCarrito,
  onVerDetalle
}) {
  const [vistaColumnas, setVistaColumnas] = useState(4); // 4 columnas por defecto como en la imagen

  return (
    <section className="seccion-catalogo-principal">
      {/* Barra superior de catálogo */}
      <div className="catalogo-control-barra">
        <div className="catalogo-info-titulo">
          <h2>Todos los productos</h2>
          <span className="catalogo-conteo-texto">
            Mostrando 1 - {productos.length} de 48 productos
          </span>
        </div>

        {/* Buscador reubicado en la barra superior del catálogo */}
        <div className="catalogo-buscador-wrap">
          <svg className="catalogo-buscador-icono" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar productos, marcas o especificaciones..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="catalogo-buscador-input"
            aria-label="Buscar productos en el catálogo"
          />
          {busqueda && (
            <button
              type="button"
              className="catalogo-buscador-limpiar"
              onClick={() => setBusqueda('')}
              title="Borrar búsqueda"
              aria-label="Borrar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        <div className="catalogo-filtros-rapidos">
          <div className="ordenar-selector-wrap">
            <label htmlFor="ordenar-select">Ordenar por:</label>
            <select
              id="ordenar-select"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              className="ordenar-select"
            >
              <option value="vendidos">Más vendidos</option>
              <option value="menor-precio">Menor precio</option>
              <option value="mayor-precio">Mayor precio</option>
              <option value="nombre">Nombre A - Z</option>
            </select>
          </div>

          {/* Selector de modo de vista */}
          <div className="vista-botones-toggle">
            <button
              className={`btn-vista ${vistaColumnas === 4 ? 'activo' : ''}`}
              onClick={() => setVistaColumnas(4)}
              title="Cuadrícula de 4 columnas"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <rect x="2" y="2" width="4" height="20" rx="1"/>
                <rect x="8" y="2" width="4" height="20" rx="1"/>
                <rect x="14" y="2" width="4" height="20" rx="1"/>
                <rect x="20" y="2" width="4" height="20" rx="1"/>
              </svg>
            </button>
            <button
              className={`btn-vista ${vistaColumnas === 3 ? 'activo' : ''}`}
              onClick={() => setVistaColumnas(3)}
              title="Cuadrícula de 3 columnas"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <rect x="2" y="2" width="5.5" height="20" rx="1"/>
                <rect x="9.25" y="2" width="5.5" height="20" rx="1"/>
                <rect x="16.5" y="2" width="5.5" height="20" rx="1"/>
              </svg>
            </button>
            <button
              className={`btn-vista ${vistaColumnas === 1 ? 'activo' : ''}`}
              onClick={() => setVistaColumnas(1)}
              title="Vista de lista"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      {productos.length > 0 ? (
        <div className={`grid-productos-catalogo cols-${vistaColumnas}`}>
          {productos.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              onAgregarCarrito={onAgregarCarrito}
              onVerDetalle={onVerDetalle}
            />
          ))}
        </div>
      ) : (
        <div className="catalogo-vacio">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#94a3b8" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          <h3>No se encontraron productos</h3>
          <p>Intenta ajustar los filtros de búsqueda o categoría.</p>
        </div>
      )}
    </section>
  );
}
