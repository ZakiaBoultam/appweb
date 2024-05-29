import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';
const GénieCivilMinierSemestre3 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'mécanique des sols', description: 'Description du cours 1' },
    { id: 2, title: 'mécanique des roches', description: 'Description du cours 2' },
    { id: 3, title: 'géotechnique', description: 'Description du cours 3' },
    { id: 4, title: 'hydrologie appliquée', description: 'Description du cours 4' },
    { id: 5, title: 'hydrologie statistique', description: 'Description du cours 5' },
    { id: 6, title: 'matériaux de construction', description: 'Description du cours 6' },
    { id: 7, title: 'substances utiles', description: 'Description du cours 7' },
    { id: 8, title: 'résistance des matériaux ii', description: 'Description du cours 8' },
    { id: 9, title: 'hydraulique appliqué', description: 'Description du cours 9' },
    { id: 10, title: 'recherche operationnelle', description: 'Description du cours 10' },
    { id: 11, title: 'réseaux informatique', description: 'Description du cours 11' },
    { id: 12, title: 'base de données', description: 'Description du cours 12' },
    { id: 13, title: 'vba & vba.net', description: 'Description du cours 13' },
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
  <ProposerCours filiere="Génie Civil Minier" niveau="Semestre 3" courses={courses} />
</div>

    </div>
  );
};

export default GénieCivilMinierSemestre3;
