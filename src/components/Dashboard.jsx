// src/components/Dashboard.jsx
function Dashboard() {
  const usuario = {
    nombre: "Leonardo Perdomo",
    email: "leonardo2p@gmail.com",
    rol: "Programador",
  };

  const notificaciones = [
    { id: 1, mensaje: "Tu perfil fue actualizado", leida: false },
    { id: 2, mensaje: "Nuevo mensaje de soporte", leida: false },
    { id: 3, mensaje: "Recordatorio: reunión a las 3pm", leida: true },
    { id: 4, mensaje: "Tu informe está listo", leida: true },
  ];

  const actividadReciente = [
    { id: 1, accion: "Inició sesión", fecha: "2026-04-01" },
    { id: 2, accion: "Creaste un archivo nuevo", fecha: "2026-04-01" },
    { id: 3, accion: "Agregó un comentario", fecha: "2026-03-31" },
  ];

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <>
      <h3>Dashboard</h3>

      {/* Sección 1 */}
      <section style={{ borderBottom: "1px solid #eee", marginBottom: "1rem" }}>
        <h4>Información del usuario</h4>
        <p>Nombre: {usuario.nombre}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
      </section>

      {/* Sección 2 */}
      <section style={{ borderBottom: "1px solid #eee", marginBottom: "1rem" }}>
        <h4>Notificaciones</h4>
        <p>
          <strong>No leídas: {noLeidas}</strong>
        </p>
        {notificaciones.length === 0 ? (
          <p>No hay notificaciones</p>
        ) : (
          <ul>
            {notificaciones.map((notif) => (
              <li
                key={notif.id}
                style={{
                  fontWeight: notif.leida ? "normal" : "bold",
                  opacity: notif.leida ? 0.7 : 1,
                }}
              >
                {notif.mensaje}
              </li>
            ))}
          </ul>
        )}
        {noLeidas === 0 && <p>No tienes notificaciones pendientes</p>}
      </section>

      {/* Sección 3 */}
      <section>
        <h4>Actividad reciente</h4>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((act) => (
              <li key={act.id}>
                {act.accion} - {act.fecha}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Dashboard;