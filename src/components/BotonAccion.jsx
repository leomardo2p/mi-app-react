// src/components/BotonAccion.jsx
function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const estilos = {
    primario: { backgroundColor: '#007bff', color: 'white', border: 'none' },
    secundario: { backgroundColor: '#6c757d', color: 'white', border: 'none' },
    peligro: { backgroundColor: '#dc3545', color: 'white', border: 'none' }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...estilos[variante],
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        margin: '0.25rem',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;