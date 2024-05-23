import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const AménagementExploitationSolsSousSolsSemestre4 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'la chaine de production', description: 'Description du cours 1' },
    { id: 2, title: 'l\'aérage des ouvrages souterrains', description: 'Description du cours 2' },
    { id: 3, title: 'l\'exhaure', description: 'Description du cours 3' },
    { id: 4, title: 'la mécanique des roches', description: 'Description du cours 4' },
    { id: 5, title: 'la modélisation en géomécanique', description: 'Description du cours 5' },
    { id: 6, title: 'hydraulique', description: 'Description du cours 6' },
    { id: 7, title: 'minéralogie appliquée à l\'étude des minerais', description: 'Description du cours 7' },
    { id: 8, title: 'préparation mécanique de minerai', description: 'Description du cours 8' },
    { id: 9, title: 'outils de numérisation', description: 'Description du cours 9' },
    { id: 10, title: 'ordonnancement', description: 'Description du cours 10' },
    { id: 11, title: 'ateliers d\'innovation et de digitalisation', description: 'Description du cours 11' },
    { id: 12, title: 'système de production', description: 'Description du cours 12' },
    { id: 13, title: 'gestion de la qualité', description: 'Description du cours 13' },
    { id: 14, title: 'maintenance industrielle', description: 'Description du cours 14' },
    { id: 15, title: 'entreprenariat', description: 'Description du cours 15' },
    { id: 16, title: 'évaluation financière et économique', description: 'Description du cours 16' },
    { id: 17, title: 'management des ressources humaines', description: 'Description du cours 17' },
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
    </div>
  );
};

export default AménagementExploitationSolsSousSolsSemestre4;
