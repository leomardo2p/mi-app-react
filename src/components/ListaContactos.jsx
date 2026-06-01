// src/components/ListaContactos.jsx
import { useState } from 'react';
import Modal from './Modal';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

const contactosIniciales = [
  { id: 1, nombre: 'Ana García', telefono: '123456789', favorito: true },
  { id: 2, nombre: 'Luis Pérez', telefono: '987654321', favorito: false },
  { id: 3, nombre: 'María López', telefono: '555123456', favorito: true },
  { id: 4, nombre: 'Carlos Ruiz', telefono: '444987654', favorito: false },
  { id: 5, nombre: 'Sofía Martínez', telefono: '333456789', favorito: false }
];

function ListaContactos() {
  const [contactos, setContactos] = useState(contactosIniciales);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  // Filtrado por búsqueda y favoritos
  const contactosFiltrados = contactos.filter(contacto => {
    const coincide = contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                     contacto.telefono.includes(busqueda);
    return mostrarFavoritos ? coincide && contacto.favorito : coincide;
  });

  const totalFavoritos = contactos.filter(c => c.favorito).length;

  const toggleFavorito = (id) => {
    setContactos(prev =>
      prev.map(c => c.id === id ? { ...c, favorito: !c.favorito } : c)
    );
  };

  const confirmarEliminar = (contacto) => {
    setContactoAEliminar(contacto);
    setModalAbierto(true);
  };

  const eliminarContacto = () => {
    if (contactoAEliminar) {
      setContactos(prev => prev.filter(c => c.id !== contactoAEliminar.id));
      setModalAbierto(false);
      setContactoAEliminar(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o teléfono"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <BotonAccion
        texto={mostrarFavoritos ? 'Mostrar todos' : 'Mostrar solo favoritos'}
        onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
        variante="secundario"
      />
      <p>Favoritos: {totalFavoritos} / {contactos.length} | Resultados: {contactosFiltrados.length}</p>

      {contactosFiltrados.length === 0 && (
        <Alerta tipo="info" titulo="Sin resultados">No se encontraron contactos</Alerta>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contactosFiltrados.map(contacto => (
          <li key={contacto.id} style={{ border: '1px solid #ddd', margin: '0.5rem 0', padding: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{contacto.nombre}</strong> - {contacto.telefono}
              <span onClick={() => toggleFavorito(contacto.id)} style={{ cursor: 'pointer', marginLeft: '1rem', fontSize: '1.2rem' }}>
                {contacto.favorito ? '★' : '☆'}
              </span>
            </div>
            <BotonAccion texto="Eliminar" variante="peligro" onClick={() => confirmarEliminar(contacto)} />
          </li>
        ))}
      </ul>

      <Modal titulo="Confirmar eliminación" abierto={modalAbierto}>
        <p>¿Estás seguro de eliminar a {contactoAEliminar?.nombre}?</p>
        <BotonAccion texto="Cancelar" onClick={() => setModalAbierto(false)} />
        <BotonAccion texto="Eliminar" variante="peligro" onClick={eliminarContacto} />
      </Modal>
    </div>
  );
}

export default ListaContactos;