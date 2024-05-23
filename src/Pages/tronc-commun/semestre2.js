import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const TroncCommunSemestre2 = () => {
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'théorie d\'échantillonnage', description: 'Description du cours 1' },
    { id: 2, title: 'statistiques inférentielle', description: 'Description du cours 2' },
    { id: 3, title: 'résistance des matériaux', description: 'Description du cours 3' },
    { id: 4, title: 'matériaux', description: 'Description du cours 4' },
    { id: 5, title: 'uml', description: 'Description du cours 5' },
    { id: 6, title: 'langage c++ / c avancé', description: 'Description du cours 6' },
    { id: 7, title: 'automatismes', description: 'Description du cours 7' },
    { id: 8, title: 'electronique', description: 'Description du cours 8' },
    { id: 9, title: 'transferts thermiques', description: 'Description du cours 9' },
    { id: 10, title: 'thermodynamique appliqué', description: 'Description du cours 10' },
    { id: 11, title: 'compatibilité', description: 'Description du cours 11' },
    { id: 12, title: 'finances', description: 'Description du cours 12' },
    { id: 13, title: 'anglais', description: 'Description du cours 13' },
    { id: 14, title: 'techniques d\'expression', description: 'Description du cours 14' },
    { id: 15, title: 'bases de données relationnelles ', description: '(Génie Informatique)' },
    { id: 16, title: 'réseaux informatique ', description: '(Génie Informatique)' },
    { id: 17, title: 'structures de données ', description: '(Génie Informatique)' },
    { id: 18, title: 'géologie structural ', description: '(Génie Civil Et Minier)' },
    { id: 19, title: 'cartographie ', description: ' (Génie Civil Et Minier)' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 2 : </h1>

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

export default TroncCommunSemestre2;
