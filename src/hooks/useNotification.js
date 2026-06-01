// src/hooks/useNotification.js
import { useState, useEffect, useCallback } from 'react';

function useNotification(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);
  let timeoutId = null;

  const mostrar = useCallback((mensaje, tipo = 'info') => {
    // Limpiar timeout anterior si existe
    if (timeoutId) clearTimeout(timeoutId);
    const id = Date.now();
    setNotificacion({ id, mensaje, tipo });
    timeoutId = setTimeout(() => {
      setNotificacion(null);
    }, duracion);
  }, [duracion]);

  const cerrar = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    setNotificacion(null);
  }, []);

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { notificacion, mostrar, cerrar };
}

export default useNotification;