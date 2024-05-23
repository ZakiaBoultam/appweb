import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`/api/users/${userId}`).then(() => {
      setUsers(users.filter(user => user.id !== userId));
    });
  };

  return (
    <div>
      <h1>Gestion des Utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleDelete(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminUsers;
