// src/App.jsx
import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import EstadoPedido from "./components/EstadoPedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Laboratorio 2 - Componentes React</h1>

      <section><h2>Ejercicio 1: Perfil</h2><Perfil /></section>
      <section><h2>Ejercicio 2: Clima</h2><Clima /></section>
      <section><h2>Ejercicio 3: Estado Pedido</h2><EstadoPedido /></section>
      <section><h2>Ejercicio 4: Mensaje Bienvenida</h2><MensajeBienvenida /></section>
      <section><h2>Ejercicio 5: Lista Habilidades</h2><ListaHabilidades /></section>
      <section><h2>Ejercicio 6: Lista Productos</h2><ListaProductos /></section>
      <section><h2>Ejercicio 7: Lista Tareas</h2><ListaTareas /></section>
      <section><h2>Ejercicio 8: Tarjeta</h2><Tarjeta /></section>
      <section><h2>Ejercicio 9: Dashboard</h2><Dashboard /></section>
    </div>
  );
}

export default App;