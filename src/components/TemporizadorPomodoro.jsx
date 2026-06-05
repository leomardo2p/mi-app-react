// src/components/TemporizadorPomodoro.jsx
import { useState, useEffect, useRef } from 'react';

function TemporizadorPomodoro() {
  const [tiempo, setTiempo] = useState(1500); // 25 min = 1500 seg
  const [activo, setActivo] = useState(false);
  const intervaloRef = useRef(null);

  // Formatear segundos a MM:SS
  const formatear = (segundos) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  // Efecto para manejar el intervalo
  useEffect(() => {
    if (!activo) {
      return () => clearInterval(intervaloRef.current);
    }

    if (tiempo > 0) {
      intervaloRef.current = setInterval(() => {
        setTiempo(prev => {
          if (prev <= 1) {
            clearInterval(intervaloRef.current);
            setActivo(false);
            alert('¡Tiempo completado!');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    // Limpieza: detener intervalo al desmontar o al cambiar dependencias
    return () => clearInterval(intervaloRef.current);
  }, [activo, tiempo]);

  const iniciar = () => setActivo(true);
  const pausar = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setTiempo(1500);
  };

  return (
    <div>
      <h3>Temporizador Pomodoro</h3>
      <div style={{ fontSize: '2rem', margin: '1rem' }}>{formatear(tiempo)}</div>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default TemporizadorPomodoro;