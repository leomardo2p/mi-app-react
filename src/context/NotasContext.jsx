// src/context/NotasContext.jsx
import { createContext, useContext, useEffect, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Estado inicial con 5 notas precargadas
const notasIniciales = [
  {
    id: '1',
    titulo: 'Revisar proyecto final',
    contenido: 'Revisar los entregables del equipo y preparar presentación para el viernes.',
    categoria: 'trabajo',
    fijada: true,
    fechaCreacion: new Date(2026, 5, 1).toString()
  },
  {
    id: '2',
    titulo: 'Comprar regalo de cumpleaños',
    contenido: 'Buscar un regalo para mamá, puede ser un libro o joya.',
    categoria: 'personal',
    fijada: false,
    fechaCreacion: new Date(2026, 5, 2).toString()
  },
  {
    id: '3',
    titulo: 'Estudiar React Context',
    contenido: 'Repasar useContext y useReducer para el examen.',
    categoria: 'estudio',
    fijada: true,
    fechaCreacion: new Date(2026, 5, 3).toString()
  },
  {
    id: '4',
    titulo: 'Idea para nueva app',
    contenido: 'Desarrollar una app de recordatorios con notificaciones.',
    categoria: 'ideas',
    fijada: false,
    fechaCreacion: new Date(2026, 5, 4).toString()
  },
  {
    id: '5',
    titulo: 'Reunión con cliente',
    contenido: 'Discutir requerimientos adicionales del proyecto.',
    categoria: 'trabajo',
    fijada: false,
    fechaCreacion: new Date(2026, 5, 5).toString()
  }
];

const estadoInicial = {
  notas: notasIniciales,
  filtroCategoria: 'todas',
  busqueda: ''
};

// Reducer
function notasReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_NOTA':
      return { ...state, notas: [...state.notas, action.payload] };
    case 'ELIMINAR_NOTA':
      return { ...state, notas: state.notas.filter(nota => nota.id !== action.payload) };
    case 'EDITAR_NOTA':
      return {
        ...state,
        notas: state.notas.map(nota =>
          nota.id === action.payload.id ? { ...nota, ...action.payload.datos } : nota
        )
      };
    case 'TOGGLE_FIJADA':
      return {
        ...state,
        notas: state.notas.map(nota =>
          nota.id === action.payload ? { ...nota, fijada: !nota.fijada } : nota
        )
      };
    case 'CAMBIAR_FILTRO':
      return { ...state, filtroCategoria: action.payload };
    case 'CAMBIAR_BUSQUEDA':
      return { ...state, busqueda: action.payload };
    default:
      return state;
  }
}

// Crear contexto
const NotasContext = createContext();

// Provider
export function NotasProvider({ children }) {
  const [notasGuardadas, setNotasGuardadas] = useLocalStorage('notas', notasIniciales);
  const [state, dispatch] = useReducer(notasReducer, {
    ...estadoInicial,
    notas: notasGuardadas
  });

  // Acciones
  const agregarNota = (nota) => dispatch({ type: 'AGREGAR_NOTA', payload: nota });
  const eliminarNota = (id) => dispatch({ type: 'ELIMINAR_NOTA', payload: id });
  const editarNota = (id, datos) => dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } });
  const toggleFijada = (id) => dispatch({ type: 'TOGGLE_FIJADA', payload: id });
  const cambiarFiltro = (categoria) => dispatch({ type: 'CAMBIAR_FILTRO', payload: categoria });
  const cambiarBusqueda = (texto) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: texto });

  const value = {
    ...state,
    agregarNota,
    eliminarNota,
    editarNota,
    toggleFijada,
    cambiarFiltro,
    cambiarBusqueda
  };

  useEffect(() => {
    setNotasGuardadas(state.notas);
  }, [state.notas, setNotasGuardadas]);

  return (
    <NotasContext.Provider value={value}>
      {children}
    </NotasContext.Provider>
  );
}

// Hook personalizado
export function useNotas() {
  const context = useContext(NotasContext);
  if (!context) {
    throw new Error('useNotas debe usarse dentro de NotasProvider');
  }
  return context;
}


