// src/App.jsx
import { useState } from 'react';
import VisorDocumento from './components/VisorDocumento';
import TemporizadorPomodoro from './components/TemporizadorPomodoro';
import ConfiguracionUsuario from './components/ConfiguracionUsuario';
import PruebaHooks from './components/PruebaHooks';

function App() {
  const [mostrarVisor, setMostrarVisor] = useState(true);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Laboratorio 4 - Efectos y Custom Hooks</h1>

      <section>
        <h2>Ejercicio 1: VisorDocumento (con desmontaje)</h2>
        <button onClick={() => setMostrarVisor(!mostrarVisor)}>
          {mostrarVisor ? 'Ocultar' : 'Mostrar'} VisorDocumento
        </button>
        {mostrarVisor && <VisorDocumento />}
      </section>

      <section>
        <h2>Ejercicio 2: Temporizador Pomodoro</h2>
        <TemporizadorPomodoro />
      </section>

      <section>
        <h2>Ejercicio 3: Configuración de Usuario (localStorage)</h2>
        <ConfiguracionUsuario />
      </section>

      <section>
        <h2>Ejercicio 4: Custom Hooks (useLocalStorage + useNotification)</h2>
        <PruebaHooks />
      </section>
    </div>
  );
}

export default App;