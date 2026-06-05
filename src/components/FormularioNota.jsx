// src/components/FormularioNota.jsx
import { useState } from 'react';

function FormularioNota({ notaInicial = { titulo: '', contenido: '', categoria: 'personal', fijada: false }, onSubmit, textoBoton = 'Guardar' }) {
  const [titulo, setTitulo] = useState(notaInicial.titulo);
  const [contenido, setContenido] = useState(notaInicial.contenido);
  const [categoria, setCategoria] = useState(notaInicial.categoria);
  const [fijada, setFijada] = useState(notaInicial.fijada);
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (titulo.trim().length < 3) nuevosErrores.titulo = 'El t\u00edtulo debe tener al menos 3 caracteres';
    if (contenido.trim().length < 10) nuevosErrores.contenido = 'El contenido debe tener al menos 10 caracteres';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onSubmit({ titulo, contenido, categoria, fijada });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>T\u00edtulo:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        {errores.titulo && <span style={{ color: 'red' }}>{errores.titulo}</span>}
      </div>
      <div>
        <label>Contenido:</label>
        <textarea value={contenido} onChange={(e) => setContenido(e.target.value)} rows="5" />
        {errores.contenido && <span style={{ color: 'red' }}>{errores.contenido}</span>}
      </div>
      <div>
        <label>Categor\u00eda:</label>
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={fijada} onChange={(e) => setFijada(e.target.checked)} />
          Fijar nota
        </label>
      </div>
      <button type="submit">{textoBoton}</button>
    </form>
  );
}

export default FormularioNota;
