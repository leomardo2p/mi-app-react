// src/components/Clima.jsx
function Clima() {
  const temperatura = 60; // cambia este valor para probar

  // Lógica antes del return
  let sensacion = "";
  let recomendacion = "";

  if (temperatura < 15) {
    sensacion = "frío";
    recomendacion = "Lleva abrigo";
  } else if (temperatura >= 15 && temperatura <= 25) {
    sensacion = "agradable";
    recomendacion = "Disfruta el día";
  } else {
    sensacion = "caluroso";
    recomendacion = "Mantente hidratado";
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Clima actual</h3>
      <p>Temperatura: {temperatura}°C</p>
      <p>Sensación térmica: {sensacion}</p>
      <p>Recomendación: {recomendacion}</p>
    </div>
  );
}

export default Clima;