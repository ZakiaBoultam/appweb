import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const GénieProductiqueSemestre5 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'mapitrise statistique des procédés', description: 'Description du cours 1' },
    { id: 2, title: 'systèmes de management de la qualité', description: 'Description du cours 2' },
    { id: 3, title: 'lear manufacturing', description: 'Description du cours 3' },
    { id: 4, title: 'total productive maintenance', description: 'Description du cours 4' },
    { id: 5, title: 'big data', description: 'Description du cours 5' },
    { id: 6, title: 'visualisation des données', description: 'Description du cours 6' },
    { id: 7, title: 'business intelligence', description: 'Description du cours 7' },
    { id: 8, title: 'analyse multicritère', description: 'Description du cours 8' },
    { id: 9, title: 'réseaux de petri', description: 'Description du cours 9' },
    { id: 10, title: 'gestion des risques industriel', description: 'Description du cours 10' },
    { id: 11, title: 'fiabilité des systèmes', description: 'Description du cours 11' },
    { id: 12, title: 'enterprise resource planning', description: 'Description du cours 12' },
    { id: 13, title: 'projet fédérateur', description: 'Description du cours 13' },
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
    </div>
  );
};

export default GénieProductiqueSemestre5;
