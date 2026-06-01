// src/App.jsx
import { useState } from 'react';
import Acordeon from './components/Acordeon';
import Alerta from './components/Alerta';
import BotonAccion from './components/BotonAccion';
import Modal from './components/Modal';
import Contador from './components/Contador';
import ListaContactos from './components/ListaContactos';
import FormularioEvento from './components/FormularioEvento';

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1>Laboratorio 3 - Props, Estado y Eventos</h1>

      <Acordeon titulo="Ejercicio 1: Alerta y Acordeón" defaultExpandido={true}>
        <Alerta tipo="exito" titulo="Éxito">Operación correcta</Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">Revisa los datos</Alerta>
        <Alerta tipo="error" titulo="Error">Ocurrió un problema</Alerta>
        <Alerta tipo="info" titulo="Info">Mensaje informativo</Alerta>
        <Acordeon titulo="Acordeón anidado">
          <p>Contenido dentro de otro acordeón.</p>
        </Acordeon>
      </Acordeon>

      <Acordeon titulo="Ejercicio 2: Modal, Botón y Contador">
        <BotonAccion texto="Abrir Modal" onClick={() => setModalAbierto(true)} />
        <Modal titulo="Ejemplo" abierto={modalAbierto}>
          <p>Contenido del modal</p>
          <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
        </Modal>
        <Contador />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3: Lista de Contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4: Formulario de Evento">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

export default App;