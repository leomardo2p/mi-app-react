// src/components/EstadoPedido.jsx
function EstadoPedido() {
  const estado = "enviado"; // cambia a: 'pendiente', 'entregado', 'cancelado'

  let icono;
  let mensaje;

  switch (estado) {
    case "pendiente":
      icono = "⏳";
      mensaje = "Tu pedido está siendo procesado";
      break;
    case "enviado":
      icono = "🚚";
      mensaje = "Tu pedido está en camino";
      break;
    case "entregado":
      icono = "✅";
      mensaje = "Tu pedido ha sido entregado";
      break;
    case "cancelado":
      icono = "❌";
      mensaje = "Tu pedido fue cancelado";
      break;
    default:
      icono = "❓";
      mensaje = "Estado desconocido";
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Estado del pedido</h3>
      <p>
        {icono} {mensaje}
      </p>
      {/* Condicional con &&: solo si estado es 'enviado' */}
      {estado === "enviado" && <p>Tiempo estimado de entrega: 2-3 días hábiles</p>}
    </div>
  );
}

export default EstadoPedido;