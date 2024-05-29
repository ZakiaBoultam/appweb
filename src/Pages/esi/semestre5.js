import React from 'react';
import Navbar from '../../Components/Navbar'; // Ensure the path is correct
import { Link } from 'react-router-dom'; // For links
import ProposerCours from '../../Components/ProposerCours';
const EnvironnementSécuritéIndustrielleSemestre5 = () => {
  const courses = [
    { id: 1, title: 'Étude d\'Impact sur l\'Environnement', description: 'Description du cours' },
    { id: 2, title: 'Analyse Dangers et Évaluation des Risques Professionnels', description: 'Description du cours' },
    { id: 3, title: 'Audit Environnementale', description: 'Description du cours' },
    { id: 4, title: 'Concept de la Qualité', description: 'Description du cours' },
    { id: 5, title: 'SME et SMI', description: 'Description du cours' },
    { id: 6, title: 'HACCP', description: 'Description du cours' },
    { id: 7, title: 'Procédés Agro-Industriels', description: 'Description du cours' },
    { id: 8, title: 'Analyse du Cycle de Vie', description: 'Description du cours' },
    { id: 9, title: 'Techniques Séparatives', description: 'Description du cours' },
    { id: 10, title: 'Réglementation Environnementale', description: 'Description du cours' },
    { id: 11, title: 'Traitement des Déchets', description: 'Description du cours' },
    { id: 12, title: 'Pollution de l\'Air', description: 'Description du cours' },
    { id: 13, title: 'Traitement des Eaux', description: 'Description du cours' },
    { id: 14, title: 'Gestion des Risques', description: 'Description du cours' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 5 :</h1>

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
  <ProposerCours filiere="Environnement Sécurité Industrielle" niveau="Semestre 5" courses={courses} />
</div>

    </div>
  );
};

export default EnvironnementSécuritéIndustrielleSemestre5;
