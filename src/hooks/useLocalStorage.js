// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
  // Función lazy para leer solo al montar
  const obtenerValor = () => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(`Error al leer localStorage clave "${clave}":`, error);
      return valorInicial;
    }
  };

  const [valor, setValor] = useState(obtenerValor);

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error(`Error al guardar en localStorage clave "${clave}":`, error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;