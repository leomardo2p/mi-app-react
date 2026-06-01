// src/components/Tarjeta.jsx
function Tarjeta() {
  const datos = {
    titulo: "Aprendiendo React",
    descripcion: "React es una biblioteca para construir interfaces de usuario interactivas.",
    etiquetas: ["JavaScript", "JSX", "Componentes"],
    destacado: true,
  };

  return (
    <div
      style={{
        border: datos.destacado ? "2px solid #007bff" : "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: datos.destacado ? "#f0f8ff" : "#fff",
      }}
    >
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta, idx) => (
          <span
            key={idx}
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              padding: "4px 8px",
              marginRight: "8px",
              fontSize: "0.8rem",
            }}
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tarjeta;