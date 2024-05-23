import React from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const Formation = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/authentification" replace />;
  }

  const { filiere, niveau } = user;
  const redirectPath = `/${filiere}/semestre${niveau}`;

  return <Navigate to={redirectPath} replace />;
};

export default Formation;
