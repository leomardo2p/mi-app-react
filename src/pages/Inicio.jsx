// src/pages/Inicio.jsx
import { useNotas } from '../context/NotasContext';

function Inicio() {
  const { notas } = useNotas();
  const total = notas.length;
  const fijadas = notas.filter(n => n.fijada).length;
  const porCategoria = notas.reduce((acc, nota) => {
    acc[nota.categoria] = (acc[nota.categoria] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Bienvenido a MisNotas</h2>
      <p>Tu gestor personal de notas.</p>
      <h3>Resumen rápido</h3>
      <ul>
        <li>Total de notas: {total}</li>
        <li>Notas fijadas: {fijadas}</li>
        <li>Por categoría:</li>
        <ul>
          <li>Personal: {porCategoria.personal || 0}</li>
          <li>Trabajo: {porCategoria.trabajo || 0}</li>
          <li>Estudio: {porCategoria.estudio || 0}</li>
          <li>Ideas: {porCategoria.ideas || 0}</li>
        </ul>
      </ul>
    </div>
  );
}

export default Inicio;