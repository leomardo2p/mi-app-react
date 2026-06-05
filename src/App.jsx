// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acordeon from './components/Acordeon';
import MensajeBienvenida from './components/MensajeBienvenida';
import Perfil from './components/Perfil';
import ListaHabilidades from './components/ListaHabilidades';
import ListaProductos from './components/ListaProductos';
import Tarjeta from './components/Tarjeta';
import EstadoPedido from './components/EstadoPedido';
import Clima from './components/Clima';
import Dashboard from './components/Dashboard';
import ListaTareas from './components/ListaTareas';
import Contador from './components/Contador';
import ListaContactos from './components/ListaContactos';
import FormularioEvento from './components/FormularioEvento';
import TemporizadorPomodoro from './components/TemporizadorPomodoro';
import VisorDocumentoDemo from './components/VisorDocumentoDemo';
import ConfiguracionUsuario from './components/ConfiguracionUsuario';
import PruebaHooks from './components/PruebaHooks';
import { NotasProvider } from './context/NotasContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Notas from './pages/Notas';
import NuevaNota from './pages/NuevaNota';
import DetalleNota from './pages/DetalleNota';
import EditarNota from './pages/EditarNota';
import NoEncontrada from './pages/NoEncontrada';

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1>Laboratorios de React</h1>
      <p>Abre cada sección para ver el laboratorio correspondiente.</p>

      <Acordeon titulo="Laboratorio 1 - JSX y componentes" defaultExpandido>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <MensajeBienvenida />
          <Perfil />
          <ListaHabilidades />
          <Tarjeta />
          <ListaProductos />
        </div>
      </Acordeon>

      <Acordeon titulo="Laboratorio 2 - Condicionales y listas">
        <div style={{ display: 'grid', gap: '1rem' }}>
          <EstadoPedido />
          <Clima />
          <Dashboard />
          <ListaTareas />
        </div>
      </Acordeon>

      <Acordeon titulo="Laboratorio 3 - Estado y eventos">
        <div style={{ display: 'grid', gap: '1rem' }}>
          <Contador />
          <ListaContactos />
          <FormularioEvento />
        </div>
      </Acordeon>

      <Acordeon titulo="Laboratorio 4 - Hooks y localStorage">
        <div style={{ display: 'grid', gap: '1rem' }}>
          <VisorDocumentoDemo />
          <TemporizadorPomodoro />
          <ConfiguracionUsuario />
          <PruebaHooks />
        </div>
      </Acordeon>

      <Acordeon titulo="Laboratorio 5 - Notas con Context y Router">
        <NotasProvider>
          <NotificationProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Inicio />} />
                  <Route path="notas">
                    <Route index element={<Notas />} />
                    <Route path="nueva" element={<NuevaNota />} />
                    <Route path=":id" element={<DetalleNota />} />
                    <Route path=":id/editar" element={<EditarNota />} />
                  </Route>
                  <Route path="*" element={<NoEncontrada />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NotificationProvider>
        </NotasProvider>
      </Acordeon>
    </div>
  );
}

export default App;