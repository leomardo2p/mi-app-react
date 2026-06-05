// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
  const obtenerValor = () => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(error);
      return valorInicial;
    }
  };
  const [valor, setValor] = useState(obtenerValor);
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);
  return [valor, setValor];
}

export default useLocalStorage;