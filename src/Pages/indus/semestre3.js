import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours'; // Importer ProposerCours

const GénieIndustrielSemestre3 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'fabrication mécanique', description: 'Description du cours 1' },
    { id: 2, title: 'machine thermique', description: 'Description du cours 2' },
    { id: 3, title: 'machine électrique', description: 'Description du cours 3' },
    { id: 4, title: 'machine hydraulique', description: 'Description du cours 4' },
    { id: 5, title: 'recherche opérationnelle', description: 'Description du cours 5' },
    { id: 6, title: 'modélisation des systèmes complexes', description: 'Description du cours 6' },
    { id: 7, title: 'robotique', description: 'Description du cours 7' },
    { id: 8, title: 'vision industrielle', description: 'Description du cours 8' },
    { id: 9, title: 'supply chain', description: 'Description du cours 9' },
    { id: 10, title: 'distribution et transport', description: 'Description du cours 10' },
    { id: 11, title: 'réseaux informatique', description: 'Description du cours 11' },
    { id: 12, title: 'base de données', description: 'Description du cours 12' },
    { id: 13, title: 'vba / langage r / python / matlab', description: 'Description du cours 13' },
    { id: 14, title: 'gestion de projets', description: 'Description du cours 14' },
    { id: 15, title: 'pilotage de projets complexes', description: 'Description du cours 15' },
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
      
      {/* Ajouter le composant ProposerCours */}
      <div className="proposer-cours-section">
        <ProposerCours filiere="Génie Industriel" niveau="Semestre 3" />
      </div>
    </div>
  );
};

export default GénieIndustrielSemestre3;
