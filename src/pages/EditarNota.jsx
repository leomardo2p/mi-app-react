// src/pages/EditarNota.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';
import { useNotificationContext } from '../context/NotificationContext';

function EditarNota() {
  const { id } = useParams();
  const { notas, editarNota } = useNotas();
  const navigate = useNavigate();
  const nota = notas.find(n => n.id === id);

  const { mostrar } = useNotificationContext();
  const handleGuardar = (datos) => {
    editarNota(id, datos);
    mostrar('Nota actualizada correctamente', 'exito');
    navigate(`/notas/${id}`);
  };

  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Editar Nota</h2>
      <FormularioNota
        notaInicial={{ titulo: nota.titulo, contenido: nota.contenido, categoria: nota.categoria, fijada: nota.fijada }}
        onSubmit={handleGuardar}
        textoBoton="Guardar Cambios"
      />
      <button onClick={() => navigate(`/notas/${id}`)}>Cancelar</button>
    </div>
  );
}

export default EditarNota;