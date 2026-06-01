// src/components/ConfiguracionUsuario.jsx
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'config-usuario';

const obtenerValorInicial = () => {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado) {
      return JSON.parse(guardado);
    }
  } catch (error) {
    console.error('Error al leer localStorage', error);
  }
  return { nombre: '', tema: 'claro', notificaciones: true };
};

function ConfiguracionUsuario() {
  const [config, setConfig] = useState(obtenerValorInicial);

  // Persistir en localStorage cada vez que cambie config
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const restablecer = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConfig({ nombre: '', tema: 'claro', notificaciones: true });
  };

  return (
    <div>
      <h3>Configuración de Usuario</h3>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          value={config.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tema: </label>
        <select name="tema" value={config.tema} onChange={handleChange}>
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="notificaciones"
            checked={config.notificaciones}
            onChange={handleChange}
          />
          Activar notificaciones
        </label>
      </div>
      <button onClick={restablecer}>Restablecer valores</button>

      <h4>Vista previa de la configuración guardada:</h4>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
}

export default ConfiguracionUsuario;