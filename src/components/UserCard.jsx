// UserCard.jsx

import React from 'react';
import './styles/UserCard.css'; // Asegúrate de tener la ruta correcta

const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleEdit = () => {
    setUserUpdate(user);
    setIsFormClose(false);
  };

  return (
    <article className="user-card">
      <h2>{user.first_name} {user.last_name}</h2>
      <hr />
      <ul>
        <li><span>Email</span><span>{user.email}</span></li>
        <li><span>Birthday</span><span>{user.birthday}</span></li>
      </ul>
      <hr />
      <footer>
        <button onClick={handleDelete} ><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit} ><i className='bx bx-edit' ></i></button>
      </footer>
    </article>
  );
};

export default UserCard;
