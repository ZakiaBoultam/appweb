import React from 'react';
import Navbar from '../../Components/Navbar'; 
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours'; 

const GénieInformatiqueSemestre4 = () => { 
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'Méthodes agiles en gestion de projets', description: 'Description du cours 1' },
    { id: 2, title: 'Projet fédérateur', description: 'Description du cours 2' },
    { id: 3, title: 'Architectures logicielles', description: 'Description du cours 3' },
    { id: 4, title: 'Sécurité de l information', description: 'Description du cours 1' },
    { id: 5, title: 'Data mining', description: 'Description du cours 2' },
    { id: 6, title: 'Développement web & mobile', description: 'Description du cours 3' },
    { id: 7, title: 'Systèmes embarqués', description: 'Description du cours 1' },
    { id: 8, title: 'Bases de données non relationnelles', description: 'Description du cours 1' },
    { id: 9, title: ' Management des ressources humaines', description: 'Description du cours 1' },
    { id: 10, title: 'Entrepreneuriat', description: 'Description du cours 2' },
    { id: 11, title: 'Évaluation financière et économique', description: 'Description du cours 3' },
    { id: 12, title: 'Simulation discrète', description: 'Description du cours 1' },
    { id: 13, title: 'Machine learning', description: 'Description du cours 1' },
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
      {/* Ajouter le composant ProposerCours */}
      <div className="proposer-cours-section">
        <ProposerCours filiere="Génie Informatique" niveau="Semestre 4" />
      </div>
      
    </div>
  );
};

export default GénieInformatiqueSemestre4;
