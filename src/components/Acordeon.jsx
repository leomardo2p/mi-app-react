// src/components/Acordeon.jsx
import { useState } from 'react';

function Acordeon({ titulo, children, defaultExpandido = false }) {
  const [expandido, setExpandido] = useState(defaultExpandido);

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', borderRadius: '4px' }}>
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          padding: '1rem',
          cursor: 'pointer',
          backgroundColor: '#f5f5f5',
          fontWeight: 'bold'
        }}
      >
        {expandido ? '▼' : '►'} {titulo}
      </div>
      {expandido && <div style={{ padding: '1rem' }}>{children}</div>}
    </div>
  );
}

export default Acordeon;