import React from 'react';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

const Semestre1 = () => {
  const courses = [
    { id: 1, title: 'Automatique', description: 'Description du cours 1' },
    { id: 2, title: 'Instrumentation et métrologie', description: 'Description du cours 2' },
    { id: 3, title: 'Électrotechnique', description: 'Description du cours 3' },
    { id: 4, title: 'Dessin industriel technologie', description: 'Description du cours 4' },
    { id: 5, title: 'Analyse numérique', description: 'Description du cours 5' },
    { id: 6, title: 'Mathématiques', description: 'Description du cours 6' },
    { id: 7, title: 'Algorithmique', description: 'Description du cours 7' },
    { id: 8, title: 'Langage C', description: 'Description du cours 8' },
    { id: 9, title: 'Mécanique des fluides', description: 'Description du cours 9' },
    { id: 10, title: 'Mécanique des milieux continus', description: 'Description du cours 10' },
    { id: 11, title: 'Économie de l\'entreprise', description: 'Description du cours 11' },
    { id: 12, title: 'Management', description: 'Description du cours 12' },
    { id: 13, title: 'Anglais', description: 'Description du cours 13' },
    { id: 14, title: 'Techniques d\'expression', description: 'Description du cours 14' },
    { id: 15, title: 'Minéralogie (Génie Civil Et Minier)', description: 'Description du cours 15' },
    { id: 16, title: 'Pétrologie magmatique ', description: '(Génie Civil Et Minier)' },
    { id: 17, title: 'Pétrologie métamorphique ', description: '(Génie Civil Et Minier)' },
    { id: 18, title: 'Pétrologie sédimentaire ', description: '(Génie Civil Et Minier)' },
  ];

  return (
    <div className="formation-page">
      <Navbar />
      <h1 className="primary-heading">Semestre 1 :</h1>
      <div className="course-cards">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Semestre1;
