import React from 'react';
import { marcas } from '../data/productos';

export default function FiltrosSidebar({
  categoriaFiltro,
  setCategoriaFiltro,
  marcaFiltro,
  setMarcaFiltro,
  precioMax,
  setPrecioMax,
  soloOferta,
  setSoloOferta,
  soloEnStock,
  setSoloEnStock,
  onLimpiarFiltros
}) {
  const listaCategorias = [
    { id: 'laptops', label: 'Laptops y Computadoras', count: 12 },
    { id: 'perifericos', label: 'Periféricos', count: 18 },
    { id: 'redes', label: 'Redes y Conectividad', count: 8 },
    { id: 'almacenamiento', label: 'Accesorios y Almacenamiento', count: 14 },
    { id: 'componentes', label: 'Componentes', count: 7 },
    { id: 'impresoras', label: 'Impresoras', count: 4 },
    { id: 'monitores', label: 'Monitores', count: 6 },
    { id: 'software', label: 'Software', count: 5 },
    { id: 'tablets', label: 'Tablets', count: 3 },
  ];

  return (
    <aside className="filtros-sidebar">
      <div className="filtros-header">
        <h3>Filtros</h3>
      </div>

      {/* Categorías */}
      <div className="filtro-grupo">
        <div className="filtro-grupo-titulo">
          <span>Categorías</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
        </div>
        <div className="filtro-opciones">
          {listaCategorias.map((cat) => (
            <label key={cat.id} className="filtro-checkbox-label">
              <input
                type="checkbox"
                checked={categoriaFiltro === cat.id}
                onChange={() => setCategoriaFiltro(categoriaFiltro === cat.id ? 'todos' : cat.id)}
              />
              <span className="checkbox-texto">{cat.label}</span>
              <span className="checkbox-conteo">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Marca */}
      <div className="filtro-grupo">
        <div className="filtro-grupo-titulo">
          <span>Marca</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
        </div>
        <select
          value={marcaFiltro}
          onChange={(e) => setMarcaFiltro(e.target.value)}
          className="filtro-select-marca"
        >
          {marcas.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Rango de Precio */}
      <div className="filtro-grupo">
        <div className="filtro-grupo-titulo">
          <span>Precio</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
        </div>
        <div className="slider-precio-wrap">
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={precioMax}
            onChange={(e) => setPrecioMax(Number(e.target.value))}
            className="rango-precio-slider"
          />
          <div className="rango-labels">
            <span>S/ 0</span>
            <span className="precio-actual-label">Hasta S/ {precioMax.toLocaleString()}</span>
            <span>S/ 5,000+</span>
          </div>
        </div>
      </div>

      {/* Estado de Stock */}
      <div className="filtro-grupo">
        <div className="filtro-grupo-titulo">
          <span>Stock</span>
        </div>
        <div className="filtro-opciones">
          <label className="filtro-checkbox-label">
            <input
              type="checkbox"
              checked={soloEnStock}
              onChange={(e) => setSoloEnStock(e.target.checked)}
            />
            <span className="checkbox-texto">En stock</span>
            <span className="checkbox-conteo">(38)</span>
          </label>
          <label className="filtro-checkbox-label">
            <input
              type="checkbox"
              checked={soloOferta}
              onChange={(e) => setSoloOferta(e.target.checked)}
            />
            <span className="checkbox-texto">Solo en oferta</span>
            <span className="checkbox-conteo">(6)</span>
          </label>
          <label className="filtro-checkbox-label">
            <input type="checkbox" disabled />
            <span className="checkbox-texto" style={{ opacity: 0.6 }}>Agotado</span>
            <span className="checkbox-conteo">(2)</span>
          </label>
        </div>
      </div>

      {/* Botón Limpiar Filtros */}
      <button className="boton-limpiar-filtros" onClick={onLimpiarFiltros}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 4v6h-6"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
        <span>Limpiar filtros</span>
      </button>
    </aside>
  );
}
