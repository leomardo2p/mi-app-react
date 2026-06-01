// src/components/FormularioEvento.jsx
import { useState, useEffect } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function FormularioEvento() {
  const [formData, setFormData] = useState({
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: '',
    esPublico: false
  });
  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // Validación en cada cambio
  useEffect(() => {
    const newErrores = {};
    if (formData.titulo.length < 5) newErrores.titulo = 'El título debe tener al menos 5 caracteres';
    if (!formData.fecha) newErrores.fecha = 'La fecha es obligatoria';
    else {
      const fechaSel = new Date(formData.fecha);
      const hoy = new Date();
      hoy.setHours(0,0,0,0);
      if (fechaSel < hoy) newErrores.fecha = 'La fecha no puede ser pasada';
    }
    if (!formData.categoria) newErrores.categoria = 'Seleccione una categoría';
    if (formData.descripcion.length < 20) newErrores.descripcion = 'La descripción debe tener al menos 20 caracteres';
    setErrores(newErrores);
    setSubmitDisabled(Object.keys(newErrores).length > 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitDisabled) return;
    setConfirmacion({
      tipo: 'exito',
      mensaje: `Evento "${formData.titulo}" registrado. Categoría: ${formData.categoria}, Fecha: ${formData.fecha}, Público: ${formData.esPublico ? 'Sí' : 'No'}`
    });
    setFormData({ titulo: '', fecha: '', categoria: '', descripcion: '', esPublico: false });
    setTimeout(() => setConfirmacion(null), 4000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registro de Evento</h3>
      {confirmacion && <Alerta tipo="exito" titulo="Éxito">{confirmacion.mensaje}</Alerta>}
      
      <div>
        <label>Título:</label>
        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
        {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
      </div>
      
      <div>
        <label>Fecha:</label>
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
        {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
      </div>
      
      <div>
        <label>Categoría:</label>
        <select name="categoria" value={formData.categoria} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="conferencia">Conferencia</option>
          <option value="taller">Taller</option>
          <option value="seminario">Seminario</option>
          <option value="otro">Otro</option>
        </select>
        {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
      </div>
      
      <div>
        <label>Descripción:</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="3" />
        {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
      </div>
      
      <div>
        <label>
          <input type="checkbox" name="esPublico" checked={formData.esPublico} onChange={handleChange} />
          Evento público
        </label>
      </div>
      
      <BotonAccion texto="Registrar evento" type="submit" disabled={submitDisabled} />
    </form>
  );
}

export default FormularioEvento;