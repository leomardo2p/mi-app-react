// src/hooks/useNotificacion.js
import { useCallback, useEffect, useRef, useState } from 'react';

function useNotificacion(duracion = 3000) {
  const [cola, setCola] = useState([]);
  const timeoutRef = useRef(null);

  const notificacion = cola.length > 0 ? cola[0] : null;

  const mostrar = useCallback((mensaje, tipo = 'info') => {
    const nueva = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      mensaje,
      tipo
    };
    setCola((prev) => [...prev, nueva]);
  }, []);

  const cerrar = useCallback(() => {
    setCola((prev) => prev.slice(1));
  }, []);

  useEffect(() => {
    if (!notificacion) return undefined;

    timeoutRef.current = setTimeout(() => {
      setCola((prev) => prev.slice(1));
    }, duracion);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [notificacion, duracion]);

  return { notificacion, mostrar, cerrar };
}

export default useNotificacion;
