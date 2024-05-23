import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsChevronDown } from 'react-icons/bs';

const A_propos = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">A propos</p>
        <h1 className="primary-heading">
          Apprendre est un Élément Essentiel d'un Esprit Équilibré
        </h1>
        <p className="primary-text">
          Bienvenue sur notre plateforme dédiée à la formation et à l'autoformation des étudiants de l'ENSMR.
        </p>
        <p className="primary-text">
          Conçue avec soin pour répondre aux besoins académiques des étudiants, notre plateforme offre une variété de fonctionnalités essentielles :
        </p>
        <div className="primary-text">
        {showMore && (
          <>
          <p>
            - Accès aux Ressources Éducatives : Les étudiants peuvent consulter, télécharger et gérer des documents académiques variés, tels que les cours, les travaux dirigés et les compléments de cours, afin de soutenir leur apprentissage.
          </p>
          <p>
            - Programmes d'Autoformation : En plus des ressources fournies par les enseignants, notre plateforme offre des programmes d'autoformation conçus par les étudiants eux-mêmes, favorisant ainsi l'échange de connaissances et le développement personnel.
          </p>
          <p>
            - Validation des Contenus : Pour garantir la qualité des informations partagées, tous les documents téléversés font l'objet d'un processus de validation rigoureux mené par notre équipe, assurant ainsi la fiabilité des ressources disponibles.
          </p>
          <p>
            - Interaction et Collaboration : Notre plateforme intègre des fonctionnalités de discussion en temps réel, permettant aux étudiants d'interagir entre eux et avec leurs enseignants, favorisant ainsi la collaboration et l'échange d'idées.
          </p>
          <p>
            - Navigation Intuitive : Grâce à une interface conviviale et une fonction de recherche avancée, les étudiants peuvent naviguer facilement à travers les différentes sections de la plateforme et trouver rapidement les informations dont ils ont besoin.
          </p>
        </>
        )}
        </div>

        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleShowMore}>
            <BsChevronDown /> Lire La Suite
          </button>
        </div>
      </div>
    </div>
  );
};

export default A_propos;
