// src/components/VisorDocumentoDemo.jsx
import { useState } from 'react';
import VisorDocumento from './VisorDocumento';

function VisorDocumentoDemo() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <h3>Simulador de desmontaje</h3>
      <button onClick={() => setMostrar((prev) => !prev)}>
        {mostrar ? 'Simular desmontaje' : 'Volver a montar'}
      </button>
      <div style={{ marginTop: '1rem' }}>
        {mostrar ? (
          <VisorDocumento />
        ) : (
          <p>Componente desmontado. El titulo debe volver a "Mi App".</p>
        )}
      </div>
    </div>
  );
}

export default VisorDocumentoDemo;
