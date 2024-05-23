import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const ProcedesIndustrielsSemestre3 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'séparation mecanique', description: 'Description du cours 1' },
    { id: 2, title: 'absorption', description: 'Description du cours 2' },
    { id: 3, title: 'distillation', description: 'Description du cours 3' },
    { id: 4, title: 'thermodynamique des équilibres', description: 'Description du cours 4' },
    { id: 5, title: 'production et distribution de vapeur', description: 'Description du cours 5' },
    { id: 6, title: 'cinétique chimique', description: 'Description du cours 6' },
    { id: 7, title: 'hydraulique', description: 'Description du cours 7' },
    { id: 8, title: 'transfert de matiere', description: 'Description du cours 8' },
    { id: 9, title: 'recherche operationnelle', description: 'Description du cours 9' },
    { id: 10, title: 'réseaux informatique', description: 'Description du cours 10' },
    { id: 11, title: 'base de données', description: 'Description du cours 11' },
    { id: 12, title: 'vba & vba.net', description: 'Description du cours 12' },
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
    </div>
  );
};

export default ProcedesIndustrielsSemestre3;
