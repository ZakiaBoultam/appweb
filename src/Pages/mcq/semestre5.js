import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const McqSemestre5 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'choix de matériaux', description: 'Description du cours 1' },
    { id: 2, title: 'contrôles non destructifs', description: 'Description du cours 2' },
    { id: 3, title: 'assemblages soudés', description: 'Description du cours 3' },
    { id: 4, title: 'mécanique de la rupture et fatigue', description: 'Description du cours 4' },
    { id: 5, title: 'procédés de fabrication', description: 'Description du cours 5' },
    { id: 6, title: 'système de management de la qualité', description: 'Description du cours 6' },
    { id: 7, title: 'usure des matériaux', description: 'Description du cours 7' },
    { id: 8, title: 'contrôle de la qualité', description: 'Description du cours 8' },
    { id: 9, title: 'tpm', description: 'Description du cours 9' },
    { id: 10, title: 'amdec', description: 'Description du cours 10' },
    { id: 11, title: 'gmao & diagnostics', description: 'Description du cours 11' },
    { id: 12, title: 'composites & nouveaux matériaux', description: 'Description du cours 12' },
    { id: 13, title: 'plastiques', description: 'Description du cours 13' },
    { id: 14, title: 'céramiques', description: 'Description du cours 14' },
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

export default McqSemestre5;
