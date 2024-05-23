import React from "react";
import { Link } from "react-router-dom";
import Formation from "../Assets/Formation.png";
import Autoformation from "../Assets/Autoformation.png";
import { useAuth } from '../AuthContext'; // Importer useAuth

const Cours = () => {
  const { user } = useAuth(); // Obtenir l'utilisateur à partir du contexte

  const getFormationLink = () => {
    if (user) {
      return `/${user.filiere}/semestre${user.niveau}`;
    }
    return "/formation";
  };

  const workInfoData = [
    {
      image: Formation,
      title: "Formation",
      text: "Boostez vos compétences grâce à notre plateforme d'apprentissage.",
      link: getFormationLink(), // Utiliser le lien dynamique
    },
    {
      image: Autoformation,
      title: "Autoformation",
      text: "Transformez votre carrière avec nos programmes certifiés!",
      link: "/autoformation",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Cours</p>
        <h1 className="primary-heading">Votre Espace :</h1>
        <p className="primary-text">
          Explorez nos volets de formation et d'autoformation pour enrichir vos
          connaissances et développer vos compétences à votre rythme.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <Link to={data.link} key={data.title}> {/* Utilisez le composant Link pour créer un lien */}
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="formation" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cours;
