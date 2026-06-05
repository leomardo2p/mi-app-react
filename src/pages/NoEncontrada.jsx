// src/pages/NoEncontrada.jsx
import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <div>
      <h2>404 - Página no encontrada</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
export default NoEncontrada;