import React, { useRef, useState, useEffect } from 'react';
import { categorias } from '../data/productos';

export default function BarraCategorias({ categoriaActiva, onSeleccionarCategoria }) {
  const scrollRef = useRef(null);
  const [puedeScrollIzq, setPuedeScrollIzq] = useState(false);
  const [puedeScrollDer, setPuedeScrollDer] = useState(false);

  const chequearScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setPuedeScrollIzq(scrollLeft > 6);
    setPuedeScrollDer(scrollLeft < scrollWidth - clientWidth - 6);
  };

  useEffect(() => {
    chequearScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', chequearScroll);
    }
    window.addEventListener('resize', chequearScroll);
    return () => {
      if (el) el.removeEventListener('scroll', chequearScroll);
      window.removeEventListener('resize', chequearScroll);
    };
  }, []);

  const deslizar = (direccion) => {
    if (!scrollRef.current) return;
    const cantidad = direccion === 'izq' ? -280 : 280;
    scrollRef.current.scrollBy({ left: cantidad, behavior: 'smooth' });
  };

  // Render icons / thumbnails for category cards
  const renderIcono = (id) => {
    switch (id) {
      case 'todos':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1.5"/>
            <rect x="14" y="3" width="7" height="7" rx="1.5"/>
            <rect x="14" y="14" width="7" height="7" rx="1.5"/>
            <rect x="3" y="14" width="7" height="7" rx="1.5"/>
          </svg>
        );
      case 'laptops':
        return <img src="/images/laptop_lenovo.jpg" alt="Laptops" className="categoria-thumb" />;
      case 'perifericos':
        return <img src="/images/teclado_redragon.jpg" alt="Periféricos" className="categoria-thumb" />;
      case 'redes':
        return <img src="/images/cat_router.jpg" alt="Redes & Conectividad" className="categoria-thumb" />;
      case 'almacenamiento':
        return <img src="/images/ssd_kingston.jpg" alt="Almacenamiento" className="categoria-thumb" />;
      case 'componentes':
        return <img src="/images/cat_componentes.jpg" alt="Componentes" className="categoria-thumb" />;
      case 'impresoras':
        return <img src="/images/impresora_epson.jpg" alt="Impresoras" className="categoria-thumb" />;
      case 'software':
        return (
          <div className="software-cuadricula-icono">
            <span className="sw-cuadro sw-rojo"></span>
            <span className="sw-cuadro sw-verde"></span>
            <span className="sw-cuadro sw-azul"></span>
            <span className="sw-cuadro sw-amarillo"></span>
          </div>
        );
      case 'tablets':
        return <img src="/images/cat_tablets.jpg" alt="Tablets" className="categoria-thumb" />;
      case 'monitores':
        return <img src="/images/monitor_samsung.jpg" alt="Monitores" className="categoria-thumb" />;
      default:
        return null;
    }
  };

  return (
    <section className="barra-categorias-wrap">
      {puedeScrollIzq && (
        <button
          type="button"
          className="btn-scroll-categoria btn-scroll-izq"
          onClick={() => deslizar('izq')}
          aria-label="Desplazar categorías hacia la izquierda"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <div className="barra-categorias-scroll" ref={scrollRef}>
        {categorias.map((cat) => {
          const esActivo = categoriaActiva === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSeleccionarCategoria(cat.id)}
              className={`tarjeta-categoria-btn ${esActivo ? 'activa' : ''}`}
            >
              <div className="categoria-icono-caja">
                {renderIcono(cat.id)}
              </div>
              <span className="categoria-nombre-texto">{cat.nombre}</span>
            </button>
          );
        })}
      </div>

      {puedeScrollDer && (
        <button
          type="button"
          className="btn-scroll-categoria btn-scroll-der"
          onClick={() => deslizar('der')}
          aria-label="Desplazar categorías hacia la derecha"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </section>
  );
}
