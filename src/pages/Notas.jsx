// src/pages/Notas.jsx
import { Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import { useNotificationContext } from '../context/NotificationContext';

function Notas() {
  const { notas, busqueda, filtroCategoria, cambiarBusqueda, cambiarFiltro, toggleFijada } = useNotas();

  // Filtrar notas
  const notasFiltradas = notas.filter(nota => {
    const coincideBusqueda = busqueda === '' || 
      nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = filtroCategoria === 'todas' || nota.categoria === filtroCategoria;
    return coincideBusqueda && coincideCategoria;
  });

  const { mostrar } = useNotificationContext();


  // Ordenar: fijadas primero
  const notasOrdenadas = [...notasFiltradas].sort((a, b) => (b.fijada ? 1 : 0) - (a.fijada ? 1 : 0));

  const formatearFecha = (fechaStr) => new Date(fechaStr).toLocaleDateString();

  const obtenerColorCategoria = (cat) => {
    const colores = {
      personal: '#4caf50',
      trabajo: '#2196f3',
      estudio: '#ff9800',
      ideas: '#9c27b0'
    };
    return colores[cat] || '#ccc';
  };

  return (
    <div>
      <h2>Mis Notas</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por título o contenido..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="todas">Todas</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>
      <p>Mostrando {notasOrdenadas.length} de {notas.length} notas</p>
      {notasOrdenadas.length === 0 ? (
        <p>No hay notas que coincidan con los filtros.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {notasOrdenadas.map(nota => (
            <div key={nota.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: nota.fijada ? '#fff9c4' : 'white' }}>
              <Link to={`/notas/${nota.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{nota.titulo} {nota.fijada && '📌'}</h3>
              </Link>
              <p>{nota.contenido.length > 100 ? nota.contenido.substring(0, 100) + '...' : nota.contenido}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={{ backgroundColor: obtenerColorCategoria(nota.categoria), padding: '0.2rem 0.5rem', borderRadius: '12px', color: 'white', fontSize: '0.8rem' }}>
                  {nota.categoria}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>{formatearFecha(nota.fechaCreacion)}</span>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const fijada = !nota.fijada;
                  toggleFijada(nota.id);
                  mostrar(fijada ? 'Nota fijada' : 'Nota desfijada', 'info');
                }}
                style={{ marginTop: '0.5rem', background: 'none', border: '1px solid #ccc', cursor: 'pointer', borderRadius: '4px', padding: '0.2rem 0.5rem' }}
              >
                {nota.fijada ? 'Desfijar' : 'Fijar'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notas;