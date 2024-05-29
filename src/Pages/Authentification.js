import React, { useState } from 'react';
import Logo from "../Assets/Logo.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import aboutBackgroundImage from "../Assets/about-background-image.png";

function Authentification() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [niveau, setNiveau] = useState('');
  const [filiere, setFiliere] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.endsWith('@enim.ac.ma')) {
      setIsValidEmail(true);
      try {
        await login(email, password, filiere, niveau, role);
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'professeur') {
          navigate('/professeur');
        } else {
          navigate('/app');
        }
      } catch (error) {
        console.error("Login failed", error);
      }
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <div>
      <header>
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="welcome-message">
          <h1>Bienvenue sur</h1>
          <h2>ENSMR - Learn</h2>
        </div>
      </header>
      <main>
        <div className="left-section">
          {/* Contenu de la section gauche */}
        </div>
        <div className="right-section">
          <h2>Authentification</h2>
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Institutionnelle</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                {!isValidEmail && <p className="error-message">Veuillez saisir une adresse e-mail valide se terminant par @enim.ac.ma</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="niveau">Niveau</label>
                <select id="niveau" name="niveau" value={niveau} onChange={(e) => setNiveau(e.target.value)} required>
                  <option value="">Sélectionner le niveau</option>
                  <option value="1">S1</option>
                  <option value="2">S2</option>
                  <option value="3">S3</option>
                  <option value="4">S4</option>
                  <option value="5">S5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="filiere">Filière</label>
                <select id="filiere" name="filiere" value={filiere} onChange={(e) => setFiliere(e.target.value)} required>
                  <option value="">Sélectionner la filière</option>
                  <option value="info">Génie informatique</option>
                  <option value="indus">Génie industriel</option>
                  <option value="maintenance">Maintenance industrielle</option>
                  <option value="electro">Electromécanique</option>
                  <option value="esi">Environnement et sécurité industrielle</option>
                  <option value="prod">Génie productique</option>
                  <option value="efficacite">Efficacité énergétique et intégration des énergies renouvelables</option>
                  <option value="energetique">Génie énergétique</option>
                  <option value="mcq">Matériaux et contrôle qualité</option>
                  <option value="civil">Génie civil et minier</option>
                  <option value="ae3s">Aménagement et exploitation des sols et des sous-sols</option>
                  <option value="procedes">Procédés industriels</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="role">Rôle</label>
                <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="">Sélectionner le rôle</option>
                  <option value="admin">Administrateur</option>
                  <option value="professeur">Professeur</option>
                  <option value="etudiant">Étudiant</option>
                </select>
              </div>
              <button className="secondary-button" type="submit">S'inscrire</button>
            </form>
          </div>
        </div>
      </main>
      <div className="bottom-left">
        <img src={aboutBackgroundImage} alt="about-background-image" />
      </div>
      <div className="top-right">
        <img src={aboutBackgroundImage} alt="about-background-image" />
      </div>
    </div>
  );
}

export default Authentification;
