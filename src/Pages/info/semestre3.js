import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours'; // Importer ProposerCours

const GénieInformatiqueSemestre3 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'algorithmique et complexité', description: 'Description du cours 1' },
    { id: 2, title: 'théorie de languages et compilation', description: 'Description du cours 2' },
    { id: 3, title: 'recherche operationnelle', description: 'Description du cours 3' },
    { id: 4, title: 'gestion de projets', description: 'Description du cours 4' },
    { id: 5, title: 'génie logiciel', description: 'Description du cours 5' },
    { id: 6, title: 'industrial internet of things ilot', description: 'Description du cours 6' },
    { id: 7, title: 'cloud computing', description: 'Description du cours 7' },
    { id: 8, title: 'modélisation des systèmes', description: 'Description du cours 8' },
    { id: 9, title: 'robotique', description: 'Description du cours 9' },
    { id: 10, title: 'système unix', description: 'Description du cours 10' },
    { id: 11, title: 'architecture des systèmes d\'exploitation', description: 'Description du cours 11' },
    { id: 12, title: 'architecture tcp/ip', description: 'Description du cours 12' },
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
        <ProposerCours filiere="Génie Informatique" niveau="Semestre 3" />
      </div>
      <div className="proposer-cours-section">
  <ProposerCours filiere="Génie Informatique" niveau="Semestre 4" courses={courses} />
</div>

    </div>
  );
};

export default GénieInformatiqueSemestre3;
