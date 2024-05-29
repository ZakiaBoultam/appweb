import React from 'react';
import Navbar from '../../Components/Navbar'; // Ensure the path is correct
import { Link } from 'react-router-dom'; // For links
import ProposerCours from '../../Components/ProposerCours';
const EnvironnementSécuritéIndustrielleSemestre4 = () => {
  const courses = [
    { id: 1, title: 'SIG', description: 'Description du cours' },
    { id: 2, title: 'Topographie', description: 'Description du cours' },
    { id: 3, title: 'Biologie', description: 'Description du cours' },
    { id: 4, title: 'Écologie', description: 'Description du cours' },
    { id: 5, title: 'Éco-Toxicologie', description: 'Description du cours' },
    { id: 6, title: 'Procédés Industriels', description: 'Description du cours' },
    { id: 7, title: 'Technologies Propres', description: 'Description du cours' },
    { id: 8, title: 'Santé & Sécurité au Travail', description: 'Description du cours' },
    { id: 9, title: 'Gestion des Produits Chimiques', description: 'Description du cours' },
    { id: 10, title: 'Développement Durable', description: 'Description du cours' },
    { id: 11, title: 'Système de Production', description: 'Description du cours' },
    { id: 12, title: 'Gestion de la Qualité', description: 'Description du cours' },
    { id: 13, title: 'Maintenance Industrielle', description: 'Description du cours' },
    { id: 14, title: 'Entrepreneuriat', description: 'Description du cours' },
    { id: 15, title: 'Évaluation Financière et Économique', description: 'Description du cours' },
    { id: 16, title: 'Management des Ressources Humaines', description: 'Description du cours' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 4 : </h1>

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
  <ProposerCours filiere="Environnement Sécurité Industrielle" niveau="Semestre 4" courses={courses} />
</div>

    </div>
  );
};

export default EnvironnementSécuritéIndustrielleSemestre4;
