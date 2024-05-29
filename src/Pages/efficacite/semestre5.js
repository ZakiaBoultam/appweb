import React from 'react';
import Navbar from '../../Components/Navbar'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom'; // Pour les liens
import ProposerCours from '../../Components/ProposerCours';

const EfficaciteEnergetiqueSemestre5 = () => { // Renommez la fonction pour correspondre à l'exportation attendue
  // Tableau de données des cours
  const courses = [
    { id: 1, title: 'système de management de l\'énergie', description: 'Description du cours 1' },
    { id: 2, title: 'audit énergétique et bilan carbone', description: 'Description du cours 2' },
    { id: 3, title: 'fiabilité et outils de la maintenance', description: 'Description du cours 3' },
    { id: 4, title: 'intégration des énergies renouvelables', description: 'Description du cours 4' },
    { id: 5, title: 'biomasse et geothermie', description: 'Description du cours 5' },
    { id: 6, title: 'micros turbines hydrauliques', description: 'Description du cours 6' },
    { id: 7, title: 'efficacité énergétique', description: 'Description du cours 7' },
    { id: 8, title: 'production et stockage énergétique durable', description: 'Description du cours 8' },
    { id: 9, title: 'sécurité industrielle et digitalisation', description: 'Description du cours 9' },
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
      <div className="proposer-cours-section">
  <ProposerCours filiere="Efficacité Energétique Intégration Energies Renouvelables" niveau="Semestre 5" courses={courses} />
</div>

    </div>
  );
};

export default EfficaciteEnergetiqueSemestre5;
