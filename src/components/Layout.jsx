// src/components/Layout.jsx
import { Outlet, NavLink } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Layout() {
  const { notas } = useNotas();
  return (
    <div>
      <header>
        <h1>MisNotas</h1>
        <nav>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/notas">Notas</NavLink>
          <NavLink to="/notas/nueva">Nueva nota</NavLink>
        </nav>
        <div>Total de notas: {notas.length}</div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 MisNotas</p>
      </footer>
    </div>
  );
}

export default Layout;