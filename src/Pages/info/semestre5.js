import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens

const GénieInformatiqueSemestre5 = () => {
  // Tableau de données des cours pour l'option Ingénierie de la Digitalisation
  const digitalisationCourses = [
    { id: 1, title: "Système d'Information à Base Microservices" },
    { id: 2, title: 'Projet Fédérateur' },
    { id: 3, title: 'Cybersécurité' },
    { id: 4, title: 'Blockchain' },
    { id: 5, title: 'Enterprise Ressource Planning-ERP' },
    { id: 6, title: "Stratégie et Architecture d’Entreprise" },
    { id: 7, title: 'Robotic Process Management-BPM' },
    { id: 8, title: 'Robotic Process Automation-RPA' },
    { id: 9, title: 'Plateformes Big Data' },
    { id: 10, title: 'Visualisation de Données' },
    { id: 11, title: 'Business Intelligence - BI' }
  ];

  // Tableau de données des cours pour l'option Ingénierie des Données
  const dataEngineeringCourses = [
    { id: 15, title: 'DataOps' },
    { id: 16, title: 'Projet Fédérateur' },
    { id: 17, title: 'Cybersécurité' },
    { id: 18, title: 'Blockchain' },
    { id: 19, title: 'Administration des Bases de Données' },
    { id: 20, title: 'Administration des Systèmes' },
    { id: 21, title: 'Administration des Réseaux' },
    { id: 22, title: 'Plateformes Big Data' },
    { id: 23, title: 'Visualisation de Données' },
    { id: 24, title: 'Business Intelligence - BI' }
  ];

  return (
    <div className="formation-page">
      <Navbar />
      <h1 className="primary-heading">Semestre 5 :</h1>

      <h2 className="option-heading">Option Ingénierie de la Digitalisation</h2>
      <div className="course-cards">
        {digitalisationCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>

      <h2 className="option-heading">Option Ingénierie des Données</h2>
      <div className="course-cards">
        {dataEngineeringCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GénieInformatiqueSemestre5;
