

import React, { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import UserCard from './components/UserCard';
import FormUser from './components/FormUser';
import NotificationModal from './components/NotificationModal';
import 'boxicons/css/boxicons.min.css';

function App() {
  const [userUpdate, setUserUpdate] = useState();
  const [isFormClose, setIsFormClose] = useState(true);
  const [notification, setNotification] = useState(null);
  const baseUrl = 'https://api-user-crud-test.onrender.com/api/v1';
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl);

  useEffect(() => {
    getUsers();
  }, []);

  const handleOpenForm = () => {
    setIsFormClose(false);
  };

  const handleNotificationClose = () => {
    setNotification(null);
  };

  const handleCreateUser = (data) => {
    createUser(data);
    setNotification({
      message: `Usuario ${data.first_name} ${data.last_name} creado exitosamente`,
      onClose: handleNotificationClose
    });
  };

  const handleDeleteUser = (id, userName) => {
    deleteUser(id);
    setNotification({
      message: `Usuario ${userName} eliminado exitosamente`,
      onClose: handleNotificationClose
    });
  };

  return (
    <div>
      <h1 className='usuarios'>Usuarios</h1>
      <button id="open-form" onClick={handleOpenForm}>+ Crear Usuario</button>
      <div className={`form__container ${isFormClose && 'form__close'}`}>
        <FormUser
          createUser={handleCreateUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose}
        />
      </div>
      <div className="user-cards-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={() => handleDeleteUser(user.id, `${user.first_name} ${user.last_name}`)}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
          />
        ))}
      </div>
      {notification && <NotificationModal {...notification} />}
      
    </div>
    
    
  );
}

export default App;
