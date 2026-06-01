// src/components/Contador.jsx
import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function Contador() {
  const [valor, setValor] = useState(0);

  const incrementar = () => setValor(prev => prev + 1);
  const decrementar = () => setValor(prev => prev - 1);
  const incrementar5 = () => setValor(prev => prev + 5);
  const reiniciar = () => setValor(0);

  return (
    <div>
      <h3>Contador: {valor}</h3>
      <BotonAccion texto="Decrementar" variante="secundario" onClick={decrementar} disabled={valor === 0} />
      <BotonAccion texto="Incrementar" variante="primario" onClick={incrementar} />
      <BotonAccion texto="Incrementar +5" variante="primario" onClick={incrementar5} />
      <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />
      {valor === 0 && <Alerta tipo="info" titulo="Info">El contador está en cero</Alerta>}
      {valor > 10 && <Alerta tipo="advertencia" titulo="Advertencia">¡Valor alto!</Alerta>}
    </div>
  );
}

export default Contador;