// src/components/ListaTareas.jsx
function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Comprar víveres", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Revisar correos", completada: true, prioridad: "alta" },
    { id: 5, titulo: "Preparar presentación", completada: false, prioridad: "alta" },
    { id: 6, titulo: "Leer documentación", completada: false, prioridad: "media" },
    { id: 7, titulo: "Llamar al cliente", completada: true, prioridad: "baja" },
  ];

  const pendientes = tareas.filter((tarea) => !tarea.completada);
  const completadas = tareas.filter((tarea) => tarea.completada);

  return (
    <div>
      <h3>Lista de Tareas</h3>

      <div>
        <h4>Tareas pendientes ({pendientes.length})</h4>
        {pendientes.length === 0 ? (
          <p>No hay tareas pendientes</p>
        ) : (
          <ul>
            {pendientes.map((tarea) => (
              <li key={tarea.id} style={{ fontWeight: tarea.prioridad === "alta" ? "bold" : "normal" }}>
                {tarea.titulo} - Prioridad: {tarea.prioridad}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h4>Tareas completadas ({completadas.length})</h4>
        {completadas.length === 0 ? (
          <p>No hay tareas completadas</p>
        ) : (
          <ul>
            {completadas.map((tarea) => (
              <li key={tarea.id} style={{ textDecoration: "line-through" }}>
                {tarea.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListaTareas;