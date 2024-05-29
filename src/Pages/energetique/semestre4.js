import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';

const GenieEnergetiqueSemestre4 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'modelisation et simulation', description: 'Description du cours 1' },
    { id: 2, title: 'optimisation et conduite des procedes', description: 'Description du cours 2' },
    { id: 3, title: 'calcul d\'echangeurs de chaleur', description: 'Description du cours 3' },
    { id: 4, title: 'moteur thermique', description: 'Description du cours 4' },
    { id: 5, title: 'pompes et compresseurs', description: 'Description du cours 5' },
    { id: 6, title: 'etudes de cas', description: 'Description du cours 6' },
    { id: 7, title: 'sechage et humidification', description: 'Description du cours 7' },
    { id: 8, title: 'reseaux electriques', description: 'Description du cours 8' },
    { id: 9, title: 'bilan & analogie des phenomenes de transfert', description: 'Description du cours 9' },
    { id: 10, title: 'système de production', description: 'Description du cours 10' },
    { id: 11, title: 'gestion de la qualite', description: 'Description du cours 11' },
    { id: 12, title: 'maintenance industrielle', description: 'Description du cours 12' },
    { id: 13, title: 'entrepreneuriat', description: 'Description du cours 13' },
    { id: 14, title: 'evaluation financière et économique', description: 'Description du cours 14' },
    { id: 15, title: 'management des ressources humaines', description: 'Description du cours 15' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 4 : </h1>

      {/* Cases cliquables pour les cours */}
      <div className="course-cards">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Lien pour accéder au détail du cours */}
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>
      <div className="proposer-cours-section">
  <ProposerCours filiere="Génie Energétique" niveau="Semestre 4" courses={courses} />
</div>

    </div>
  );
};

export default GenieEnergetiqueSemestre4;
