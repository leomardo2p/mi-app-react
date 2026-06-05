// src/pages/NuevaNota.jsx
import { useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';
import { useNotificationContext } from '../context/NotificationContext';

function NuevaNota() {
    const navigate = useNavigate();
    const { agregarNota } = useNotas();
    const { mostrar } = useNotificationContext();

    const handleGuardar = (datos) => {
        const nuevaNota = {
            id: Date.now().toString(),
            ...datos,
            fechaCreacion: new Date().toString()
        };
        agregarNota(nuevaNota);
        mostrar('Nota creada exitosamente', 'exito');
        navigate('/notas');
    };

    return (
        <div>
            <h2>Nueva Nota</h2>
            <FormularioNota onSubmit={handleGuardar} textoBoton="Crear Nota" />
            <button onClick={() => navigate('/notas')}>Cancelar</button>
        </div>
    );
}

export default NuevaNota;