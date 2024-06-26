import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';
const MaintenanceIndustrielleSemestre4 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'maintenance industrielle', description: 'Description du cours 1' },
    { id: 2, title: 'fiabilité des systèmes', description: 'Description du cours 2' },
    { id: 3, title: 'gestion de stocks', description: 'Description du cours 3' },
    { id: 4, title: 'ordonnancement', description: 'Description du cours 4' },
    { id: 5, title: 'système de production', description: 'Description du cours 5' },
    { id: 6, title: 'machine thermique', description: 'Description du cours 6' },
    { id: 7, title: 'pompe et compresseur', description: 'Description du cours 7' },
    { id: 8, title: 'transmission de puissance', description: 'Description du cours 8' },
    { id: 9, title: 'réseaux électrique en milieu industriel', description: 'Description du cours 9' },
    { id: 10, title: 'appareillage électrique', description: 'Description du cours 10' },
    { id: 11, title: 'gestion de la qualité', description: 'Description du cours 11' },
    { id: 12, title: 'entreprenariat', description: 'Description du cours 12' },
    { id: 13, title: 'évaluation financière et économique', description: 'Description du cours 13' },
    { id: 14, title: 'management des ressources humaines', description: 'Description du cours 14' },
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
  <ProposerCours filiere="Maintenance Industrielle" niveau="Semestre 4" courses={courses} />
</div>

    </div>
  );
};

export default MaintenanceIndustrielleSemestre4;
