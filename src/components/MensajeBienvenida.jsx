// src/components/MensajeBienvenida.jsx
function MensajeBienvenida() {
  // Cambia entre null y un objeto para probar
  const usuario = { nombre: "Leonardo", rol: "admin" };

  // Early return si no hay usuario
  if (usuario === null) {
    return <p>Por favor, inicia sesión para continuar</p>;
  }

  return (
    <div>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === "admin" && <p>Tienes acceso completo al sistema</p>}
    </div>
  );
}

export default MensajeBienvenida;