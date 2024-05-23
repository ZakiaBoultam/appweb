import React from 'react';
import Navbar from '../../Components/Navbar'; // Ensure the path is correct
import { Link } from 'react-router-dom'; // For links

const GénieCivilSemestre5 = () => {
  const routeOuvragesHydrauliques = [
    { id: 1, title: 'Hydraulique des Puits et Tranchés', description: 'Description du cours' },
    { id: 2, title: 'Modélisation des Écouls Souterrains', description: 'Description du cours' },
    { id: 3, title: 'Tracés Routiers', description: 'Description du cours' },
    { id: 4, title: 'Dimensionnement et Entretien Chaussées', description: 'Description du cours' },
    { id: 5, title: 'Hydraulique des Routes', description: 'Description du cours' },
    { id: 6, title: 'Béton Précontraint', description: 'Description du cours' },
    { id: 7, title: 'Conception et Dimensionnement des Ponts', description: 'Description du cours' },
    { id: 8, title: 'Conception et Calcul des Fondations', description: 'Description du cours' },
    { id: 9, title: 'Ouvrages Géotechniques', description: 'Description du cours' },
    { id: 10, title: 'Modélisation en Géomécanique', description: 'Description du cours' },
    { id: 11, title: 'Barrage et Ouvrages Annexes', description: 'Description du cours' },
    { id: 12, title: 'Réglementation en BTP', description: 'Description du cours' },
    { id: 13, title: 'Gestion des Marchés Publics', description: 'Description du cours' },
  ];

  const genieDesConstructions = [
    { id: 14, title: 'Calcul des Structures des Bâtiments', description: 'Description du cours' },
    { id: 15, title: 'Efficacité Énergétique dans le Bâtiment', description: 'Description du cours' },
    { id: 16, title: 'Béton Précontraint', description: 'Description du cours' },
    { id: 17, title: 'Conception et Dimensionnement des Ponts', description: 'Description du cours' },
    { id: 18, title: 'Ouvrages Géotechniques', description: 'Description du cours' },
    { id: 19, title: 'Modélisation en Géomécanique', description: 'Description du cours' },
    { id: 20, title: 'Conception et Calcul des Fondations', description: 'Description du cours' },
    { id: 21, title: 'Construction Métallique', description: 'Description du cours' },
    { id: 22, title: 'Hydraulique des Puits et Tranchés', description: 'Description du cours' },
    { id: 23, title: 'Modélisation des Écouls Souterrains', description: 'Description du cours' },
    { id: 24, title: 'Réglementation en BTP', description: 'Description du cours' },
    { id: 25, title: 'Gestion des Marchés Publics', description: 'Description du cours' },
  ];

  const genieMinier = [
    { id: 26, title: 'Hydraulique des Puits et Tranchés', description: 'Description du cours' },
    { id: 27, title: 'Modélisation des Écouls Souterrains', description: 'Description du cours' },
    { id: 28, title: 'Conception et Calcul des Fondations', description: 'Description du cours' },
    { id: 29, title: 'Géothermie', description: 'Description du cours' },
    { id: 30, title: 'Métallurgie', description: 'Description du cours' },
    { id: 31, title: 'Phosphates', description: 'Description du cours' },
    { id: 32, title: 'Géostatistique', description: 'Description du cours' },
    { id: 33, title: 'Géochimie Fondamentale', description: 'Description du cours' },
    { id: 34, title: 'Géochimie Appliquée à l\'Exploration Minière', description: 'Description du cours' },
    { id: 35, title: 'Méthodes d\'Exploitation', description: 'Description du cours' },
    { id: 36, title: 'Mines et Gîtes du Maroc', description: 'Description du cours' },
    { id: 37, title: 'Ouvrages Géotechniques', description: 'Description du cours' },
    { id: 38, title: 'Modélisation en Géomécanique', description: 'Description du cours' },
    { id: 39, title: 'Code Minier Marocain', description: 'Description du cours' },
    { id: 40, title: 'Gestion des Marchés Publics', description: 'Description du cours' },
    { id: 41, title: 'Arabe Technique', description: 'Description du cours' },
    { id: 42, title: 'Anglais', description: 'Description du cours' },
    { id: 43, title: 'Techniques d\'Expression', description: 'Description du cours' },
  ];

  return (
    <div className="formation-page">
      {/* Navbar */}
      <Navbar />
      <h1 className="primary-heading">Semestre 5 : </h1>

      <h2 className="secondary-heading">Route et Ouvrages Hydrauliques</h2>
      {/* Cases cliquables pour les cours */}
      <div className="course-cards">
        {routeOuvragesHydrauliques.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Lien pour accéder au détail du cours */}
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>

      <h2 className="secondary-heading">Génie des Constructions</h2>
      {/* Cases cliquables pour les cours */}
      <div className="course-cards">
        {genieDesConstructions.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* Lien pour accéder au détail du cours */}
            <Link to={`/cours/${course.id}`}>Voir plus</Link>
          </div>
        ))}
      </div>

      <h2 className="secondary-heading">Génie Minier</h2>
      {/* Cases cliquables pour les cours */}
      <div className="course-cards">
        {genieMinier.map(course => (
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

export default GénieCivilSemestre5;
