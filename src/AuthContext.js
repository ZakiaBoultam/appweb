import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password, filiere, niveau, role) => {
    // Exemples de mots de passe pour chaque rôle
    const passwords = {
      admin: "admin123",
      professeur: "prof123",
      etudiant: "etud123",
    };

    if (password === passwords[role]) {
      setUser({ email, filiere, niveau, role });
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const isProfesseur = () => {
    return user && user.role === 'professeur';
  };

  const isEtudiant = () => {
    return user && user.role === 'etudiant';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isProfesseur, isEtudiant }}>
      {children}
    </AuthContext.Provider>
  );
};
