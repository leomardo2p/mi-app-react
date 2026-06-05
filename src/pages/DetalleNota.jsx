// src/pages/DetalleNota.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import { useNotificationContext } from '../context/NotificationContext';

function DetalleNota() {
    const { id } = useParams();
    const { notas, eliminarNota } = useNotas();
    const navigate = useNavigate();
    const nota = notas.find(n => n.id === id);

    const { mostrar } = useNotificationContext();
    const handleEliminar = () => {
        if (window.confirm('¿Eliminar esta nota?')) {
            eliminarNota(id);
            mostrar('Nota eliminada', 'exito');
            navigate('/notas');
        }
    };

    if (!nota) {
        return (
            <div>
                <h2>Nota no encontrada</h2>
                <Link to="/notas">Volver a la lista</Link>
            </div>
        );
    }

    const formatearFecha = (fechaStr) => new Date(fechaStr).toLocaleString();

    return (
        <div>
            <h2>{nota.titulo} {nota.fijada && '📌'}</h2>
            <p><strong>Categoría:</strong> {nota.categoria}</p>
            <p><strong>Fecha:</strong> {formatearFecha(nota.fechaCreacion)}</p>
            <div style={{ marginTop: '1rem' }}>
                <p>{nota.contenido}</p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Link to={`/notas/${id}/editar`}>
                    <button>Editar</button>
                </Link>
                <button onClick={handleEliminar} style={{ backgroundColor: '#f44336', color: 'white' }}>Eliminar</button>
                <Link to="/notas">
                    <button>Volver a la lista</button>
                </Link>
            </div>
        </div>
    );
}

export default DetalleNota;