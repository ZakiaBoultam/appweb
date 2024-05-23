import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const MaintenanceIndustrielleSemestre5 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'conception des systèmes mécaniques', description: 'Description du cours 1' },
    { id: 2, title: 'analyse amdec', description: 'Description du cours 2' },
    { id: 3, title: 'lubrification', description: 'Description du cours 3' },
    { id: 4, title: 'maintenance des systèmes mécaniques', description: 'Description du cours 4' },
    { id: 5, title: 'sensibilisation à la sécurité', description: 'Description du cours 5' },
    { id: 6, title: 'contrôle de la qualité', description: 'Description du cours 6' },
    { id: 7, title: 'capteurs industriels', description: 'Description du cours 7' },
    { id: 8, title: 'maintenance prévisionnelle des machines tournantes', description: 'Description du cours 8' },
    { id: 9, title: 'total productive maintenance', description: 'Description du cours 9' },
    { id: 10, title: 'contrôle non destructif', description: 'Description du cours 10' },
    { id: 11, title: 'diagnostic et gmao', description: 'Description du cours 11' },
    { id: 12, title: 'utilisation rationnelle d\'énergie électrique', description: 'Description du cours 12' },
    { id: 13, title: 'coût de la maintenance', description: 'Description du cours 13' },
    { id: 14, title: 'gestion des risques industriels', description: 'Description du cours 14' },
    { id: 15, title: 'mécanique des vibrations', description: 'Description du cours 15' },
    { id: 16, title: 'traitement du signal', description: 'Description du cours 16' },
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

export default MaintenanceIndustrielleSemestre5;
