import React, { useState, useMemo } from 'react';
import './App.css';
import { productos as listaProductosInicial } from './data/productos';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import BarraCategorias from './components/BarraCategorias';
import FiltrosSidebar from './components/FiltrosSidebar';
import ListarProductos from './components/listarproductos';
import RightSidebar from './components/RightSidebar';
import CarritoDrawer from './components/CarritoDrawer';
import ModalDetalle from './components/ModalDetalle';
import Footer from './components/Footer';

function App() {
  // Estados de filtrado y búsqueda
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todos');
  const [marcaFiltro, setMarcaFiltro] = useState('Todas las marcas');
  const [precioMax, setPrecioMax] = useState(5000);
  const [soloOferta, setSoloOferta] = useState(false);
  const [soloEnStock, setSoloEnStock] = useState(true);
  const [orden, setOrden] = useState('vendidos');

  // Estado del Carrito (iniciado con 3 items para coincidir con la referencia visual)
  const [carrito, setCarrito] = useState([
    { ...listaProductosInicial[0], cantidad: 1 },
    { ...listaProductosInicial[2], cantidad: 1 },
    { ...listaProductosInicial[3], cantidad: 1 }
  ]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Estado de Modal de Detalle (Quick View)
  const [productoModal, setProductoModal] = useState(null);

  // Estado de Notificación Toast
  const [toastMensaje, setToastMensaje] = useState(null);

  const mostrarToast = (mensaje) => {
    setToastMensaje(mensaje);
    setTimeout(() => {
      setToastMensaje(null);
    }, 2800);
  };

  // Agregar al Carrito
  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
    mostrarToast(`✓ ¡"${producto.nombre}" agregado al carrito!`);
  };

  // Controles de cantidad del carrito
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarItem(id);
    } else {
      setCarrito((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        )
      );
    }
  };

  const eliminarItem = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
    mostrarToast('Producto eliminado del carrito');
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    mostrarToast('El carrito ha sido vaciado');
  };

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoriaFiltro('todos');
    setMarcaFiltro('Todas las marcas');
    setPrecioMax(5000);
    setSoloOferta(false);
    setSoloEnStock(false);
    setOrden('vendidos');
    mostrarToast('Filtros restablecidos');
  };

  // Filtrado y ordenamiento dinámico
  const productosFiltrados = useMemo(() => {
    return listaProductosInicial
      .filter((p) => {
        // Filtro por búsqueda
        if (busqueda.trim()) {
          const termino = busqueda.toLowerCase();
          const coincide =
            p.nombre.toLowerCase().includes(termino) ||
            p.descripcion.toLowerCase().includes(termino) ||
            p.marca.toLowerCase().includes(termino);
          if (!coincide) return false;
        }

        // Filtro por categoría
        if (categoriaFiltro !== 'todos') {
          if (p.categoriaId !== categoriaFiltro) return false;
        }

        // Filtro por marca
        if (marcaFiltro !== 'Todas las marcas') {
          if (p.marca !== marcaFiltro) return false;
        }

        // Filtro por precio
        if (p.precio > precioMax) return false;

        // Filtro solo oferta
        if (soloOferta && p.badgeType !== 'oferta') return false;

        // Filtro solo en stock
        if (soloEnStock && p.stock <= 0) return false;

        return true;
      })
      .sort((a, b) => {
        if (orden === 'menor-precio') return a.precio - b.precio;
        if (orden === 'mayor-precio') return b.precio - a.precio;
        if (orden === 'nombre') return a.nombre.localeCompare(b.nombre);
        return 0; // Más vendidos / defecto
      });
  }, [busqueda, categoriaFiltro, marcaFiltro, precioMax, soloOferta, soloEnStock, orden]);

  const totalCantidadCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="app-layout">
      {/* Barra de navegación superior */}
      <Navbar
        cantidadCarrito={totalCantidadCarrito}
        onAbrirCarrito={() => setCarritoAbierto(true)}
      />

      <main className="main-contenedor">
        {/* Banner principal Hero */}
        <HeroBanner
          onExplorar={() => {
            const el = document.getElementById('catalogo-seccion');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Carrusel / barra de categorías con iconos */}
        <BarraCategorias
          categoriaActiva={categoriaFiltro}
          onSeleccionarCategoria={(catId) => setCategoriaFiltro(catId)}
        />

        {/* Layout central: Filtros + Grid Catálogo + Promos Lateral */}
        <div id="catalogo-seccion" className="catalogo-tres-columnas">
          {/* Columna Izquierda: Filtros */}
          <FiltrosSidebar
            categoriaFiltro={categoriaFiltro}
            setCategoriaFiltro={setCategoriaFiltro}
            marcaFiltro={marcaFiltro}
            setMarcaFiltro={setMarcaFiltro}
            precioMax={precioMax}
            setPrecioMax={setPrecioMax}
            soloOferta={soloOferta}
            setSoloOferta={setSoloOferta}
            soloEnStock={soloEnStock}
            setSoloEnStock={setSoloEnStock}
            onLimpiarFiltros={limpiarFiltros}
          />

          {/* Columna Central: Listado de Productos */}
          <ListarProductos
            productos={productosFiltrados}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            orden={orden}
            setOrden={setOrden}
            onAgregarCarrito={agregarAlCarrito}
            onVerDetalle={(prod) => setProductoModal(prod)}
          />

          {/* Columna Derecha: Promociones y Contacto SENATI */}
          <RightSidebar
            onVerOfertas={() => {
              setSoloOferta(true);
              setCategoriaFiltro('todos');
              mostrarToast('Mostrando ofertas destacadas');
            }}
          />
        </div>
      </main>

      {/* Pie de página institucional */}
      <Footer />

      {/* Drawer deslizante del carrito */}
      <CarritoDrawer
        abierto={carritoAbierto}
        onCerrar={() => setCarritoAbierto(false)}
        items={carrito}
        onActualizarCantidad={actualizarCantidad}
        onEliminarItem={eliminarItem}
        onVaciarCarrito={vaciarCarrito}
      />

      {/* Modal de Detalle Rápido (Quick View) */}
      <ModalDetalle
        producto={productoModal}
        onCerrar={() => setProductoModal(null)}
        onAgregarCarrito={agregarAlCarrito}
      />

      {/* Notificación Toast Flotante */}
      {toastMensaje && (
        <div className="toast-flotante">
          <span>{toastMensaje}</span>
        </div>
      )}
    </div>
  );
}

export default App;