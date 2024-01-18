
import React from 'react';
import './styles/NotificationModal.css';

const NotificationModal = ({ message, onClose }) => {
  return (
    <div className="notification-modal">
      <div className="notification-content">
        <p>{message}</p>
        <button onClick={onClose}>Aceptar</button>
      </div>
    </div>
  );
};

export default NotificationModal;
