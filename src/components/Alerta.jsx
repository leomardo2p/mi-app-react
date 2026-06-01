// src/components/Alerta.jsx
function Alerta({ tipo = 'info', titulo, children }) {
  const config = {
    exito: { icono: '✅', color: '#d4edda', borde: '#28a745' },
    advertencia: { icono: '⚠️', color: '#fff3cd', borde: '#ffc107' },
    error: { icono: '❌', color: '#f8d7da', borde: '#dc3545' },
    info: { icono: 'ℹ️', color: '#d1ecf1', borde: '#17a2b8' }
  };

  const estilo = {
    backgroundColor: config[tipo].color,
    borderLeft: `4px solid ${config[tipo].borde}`,
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '4px'
  };

  return (
    <div style={estilo}>
      <strong>{config[tipo].icono} {titulo}</strong>
      <div>{children}</div>
    </div>
  );
}

export default Alerta;