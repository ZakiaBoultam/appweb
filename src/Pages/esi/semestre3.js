import React from 'react';
import Navbar from '../../Components/Navbar'; // Ensure the path is correct
import { Link } from 'react-router-dom'; // For links
import ProposerCours from '../../Components/ProposerCours';
const EnvironnementSécuritéIndustrielleSemestre3 = () => {
  const courses = [
    { id: 1, title: 'Eau et Pollution de l\'Eau', description: 'Description du cours' },
    { id: 2, title: 'Assainissement', description: 'Description du cours' },
    { id: 3, title: 'Pollution du Sol', description: 'Description du cours' },
    { id: 4, title: 'Métrologie Environnementale', description: 'Description du cours' },
    { id: 5, title: 'Thermodynamique des Équilibres', description: 'Description du cours' },
    { id: 6, title: 'Transfert de Matière', description: 'Description du cours' },
    { id: 7, title: 'Cinétique Chimique', description: 'Description du cours' },
    { id: 8, title: 'Recherche Opérationnelle', description: 'Description du cours' },
    { id: 9, title: 'Réseaux Informatique', description: 'Description du cours' },
    { id: 10, title: 'Base de Données', description: 'Description du cours' },
    { id: 11, title: 'VBA & VBA.NET', description: 'Description du cours' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 3 </h1>

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
  <ProposerCours filiere="Environnement Sécurité Industrielle" niveau="Semestre 3" courses={courses} />
</div>

    </div>
  );
};

export default EnvironnementSécuritéIndustrielleSemestre3;
