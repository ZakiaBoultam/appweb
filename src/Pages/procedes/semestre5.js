import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';
const ProcedesIndustrielsSemestre5 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'projet d\'usine', description: 'Description du cours 1' },
    { id: 2, title: 'biotechnologies', description: 'Description du cours 2' },
    { id: 3, title: 'chimie des polymères', description: 'Description du cours 3' },
    { id: 4, title: 'procédés de filtration', description: 'Description du cours 4' },
    { id: 5, title: 'analyse et calcul des réacteurs', description: 'Description du cours 5' },
    { id: 6, title: 'évaluation économique des procédés', description: 'Description du cours 6' },
    { id: 7, title: 'étude d\'impact environnemental', description: 'Description du cours 7' },
    { id: 8, title: 'opérations de traitement des eaux', description: 'Description du cours 8' },
    { id: 9, title: 'sécurité des procédés et analyse des risques', description: 'Description du cours 9' },
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
  <ProposerCours filiere="Procédés Industriels" niveau="Semestre 5" courses={courses} />
</div>

    </div>
  );
};

export default ProcedesIndustrielsSemestre5;
