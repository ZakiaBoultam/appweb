import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';
const AménagementExploitationSolsSousSolsSemestre5 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'géomecanique ii', description: 'Description du cours 1' },
    { id: 2, title: 'approches empiriques de stabilité', description: 'Description du cours 2' },
    { id: 3, title: 'procédés minéralurgiques', description: 'Description du cours 3' },
    { id: 4, title: 'métallurgie extractive', description: 'Description du cours 4' },
    { id: 5, title: 'modélisation et analyse spaciale', description: 'Description du cours 5' },
    { id: 6, title: 'géotechnique ii', description: 'Description du cours 6' },
    { id: 7, title: 'gestion des ressources naturelles', description: 'Description du cours 7' },
    { id: 8, title: 'environnement et contrôle qualité', description: 'Description du cours 8' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 5 : </h1>

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
  <ProposerCours filiere="Aménagement Exploitation Sols Sous Sols" niveau="Semestre 5" courses={courses} />
</div>

    </div>
  );
};

export default AménagementExploitationSolsSousSolsSemestre5;
