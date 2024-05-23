// src/Pages/Admin.js
import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h1>Administration</h1>
      <ul>
        <li><Link to="/admin/users">Gérer les Utilisateurs</Link></li>
        <li><Link to="/admin/documents">Gérer les Documents</Link></li>
      </ul>
    </div>
  );
};

export default Admin;

