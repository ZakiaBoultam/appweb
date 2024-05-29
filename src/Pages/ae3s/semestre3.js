import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';
const AménagementExploitationSolsSousSolsSemestre3 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'géologie de l\'ingénieur', description: 'Description du cours 1' },
    { id: 2, title: 'géologie des gites miniers', description: 'Description du cours 2' },
    { id: 3, title: 'géostatistique', description: 'Description du cours 3' },
    { id: 4, title: 'les méthodes d\'exploitation', description: 'Description du cours 4' },
    { id: 5, title: 'principe et critère de choix', description: 'Description du cours 5' },
    { id: 6, title: 'travaux miniers', description: 'Description du cours 6' },
    { id: 7, title: 'géotechnique', description: 'Description du cours 7' },
    { id: 8, title: 'rdm ii', description: 'Description du cours 8' },
    { id: 9, title: 'géophysique appliquée', description: 'Description du cours 9' },
    { id: 10, title: 'traitement d\'image', description: 'Description du cours 10' },
    { id: 11, title: 'transfert de matière', description: 'Description du cours 11' },
    { id: 12, title: 'recherche operationnelle', description: 'Description du cours 12' },
    { id: 13, title: 'réseaux informatique', description: 'Description du cours 13' },
    { id: 14, title: 'base de données', description: 'Description du cours 14' },
    { id: 15, title: 'vba & vba.net', description: 'Description du cours 15' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 3 : </h1>

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
  <ProposerCours filiere="Aménagement Exploitation Sols Sous Sols" niveau="Semestre 3" courses={courses} />
</div>

    </div>
  );
};

export default AménagementExploitationSolsSousSolsSemestre3;
