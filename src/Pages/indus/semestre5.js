import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const GénieIndustrielSemestre5 = () => {
  // Tableau de données des cours pour l'option Management Industriel
  const industrialManagementCourses = [
    { id: 1, title: "Outils d'Aide à la Décision" },
    { id: 2, title: 'Ingénierie Financière' },
    { id: 3, title: "Management des Systèmes d'Information" },
    { id: 4, title: 'Optimisation et Pilotage des Processus' },
    { id: 5, title: 'Extraction de Connaissances à partir de Données' },
    { id: 6, title: 'Ingénierie Durable et Innovation' },
    { id: 7, title: 'Arabe Technique' },
    { id: 8, title: 'Anglais' },
    { id: 9, title: "Techniques d'Expression" }
  ];

  // Tableau de données des cours pour l'option Management Financier
  const financialManagementCourses = [
    { id: 10, title: "Outils d'Aide à la Décision" },
    { id: 11, title: 'Ingénierie Financière' },
    { id: 12, title: "Management des Systèmes d'Information" },
    { id: 13, title: 'Optimisation et Pilotage des Processus' },
    { id: 14, title: 'Extraction de Connaissances à partir de Données' },
    { id: 15, title: 'Méthodes de Prévision en Finance' },
    { id: 16, title: 'Méthodes de Prévision en Actuariat' }
  ];

  return (
    <div className="formation-page">
      <Navbar />
      <h1 className="primary-heading">Semestre 5 :</h1>

      <h2 className="option-heading">Option Management Industriel</h2>
      <div className="course-cards">
        {industrialManagementCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>

      <h2 className="option-heading">Option Management Financier</h2>
      <div className="course-cards">
        {financialManagementCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GénieIndustrielSemestre5;
