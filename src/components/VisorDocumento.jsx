// src/components/VisorDocumento.jsx
import { useState, useEffect } from 'react';

function VisorDocumento() {
  const [contador, setContador] = useState(0);

  // Efecto: actualiza el título cuando cambia el contador
  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`;

    // Función de limpieza: restaura el título al desmontar
    return () => {
      document.title = 'Mi App';
    };
  }, [contador]); // Dependencia: contador

  return (
    <div>
      <h3>Visor de Documento</h3>
      <p>Contador actual: {contador}</p>
      <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
      <button onClick={() => setContador(c => c - 1)}>Decrementar</button>
    </div>
  );
}

export default VisorDocumento;