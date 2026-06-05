// src/context/NotificationContext.jsx
import { createContext, useContext } from 'react';
import useNotificacion from '../hooks/useNotificacion';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const notification = useNotificacion(3000);
  return (
    <NotificationContext.Provider value={notification}>
      {children}
      {notification.notificacion && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: notification.notificacion.tipo === 'error' ? '#f44336' : '#4caf50',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          {notification.notificacion.mensaje}
          <button onClick={notification.cerrar} style={{ marginLeft: '10px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>✖</button>
        </div>
      )}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotificationContext must be used within NotificationProvider');
  return context;
}