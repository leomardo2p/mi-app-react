// src/components/PruebaHooks.jsx
import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion';

function PruebaHooks() {
  const [nombre, setNombre] = useLocalStorage('nombre', '');
  const { notificacion, mostrar, cerrar } = useNotificacion(2000);

  const handleGuardar = () => {
    mostrar(`Nombre guardado: ${nombre}`, 'exito');
  };

  return (
    <div>
      <h3>Prueba de Custom Hooks</h3>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button onClick={handleGuardar}>Guardar y notificar</button>
      {notificacion && (
        <div style={{ background: '#d4edda', padding: '0.5rem', marginTop: '1rem' }}>
          {notificacion.mensaje}
          <button onClick={cerrar}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default PruebaHooks;