import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';
const GenieEnergetiqueSemestre5 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'utilisation rationnelle d\'energie electrique', description: 'Description du cours 1' },
    { id: 2, title: 'production du froid', description: 'Description du cours 2' },
    { id: 3, title: 'regulation de l\'energie electrique', description: 'Description du cours 3' },
    { id: 4, title: 'moteurs à combustion à flux continu', description: 'Description du cours 4' },
    { id: 5, title: 'qualite de l\'energie electrique', description: 'Description du cours 5' },
    { id: 6, title: 'energetique du batiment', description: 'Description du cours 6' },
    { id: 7, title: 'techniques d\'audit energetique', description: 'Description du cours 7' },
    { id: 8, title: 'audits electrique', description: 'Description du cours 8' },
    { id: 9, title: 'evaluation economique des procedes', description: 'Description du cours 9' },
    { id: 10, title: 'etude d\'impact environnemental', description: 'Description du cours 10' },
    { id: 11, title: 'gestion et projet energetique', description: 'Description du cours 11' },
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
  <ProposerCours filiere="Génie Energétique" niveau="Semestre 5" courses={courses} />
</div>


    </div>
  );
};

export default GenieEnergetiqueSemestre5;
