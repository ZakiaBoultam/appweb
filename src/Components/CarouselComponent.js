import React, { useState, useEffect } from 'react';

const carouselItems = [
  {
    img: 'https://via.placeholder.com/150',
    name: 'BOULTAM Zakia',
    description: 'L\'application web de formation et d\'autoformation de l\'ENSMR est une véritable révolution pour les étudiants. Elle offre une flexibilité incroyable, permettant d\'apprendre à son propre rythme et d\'accéder à une vaste gamme de ressources. Grâce à cette plateforme, j\'ai pu approfondir mes connaissances et exceller dans mes cours.',
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'OUGHEJJI Lina',
    description: 'Cette application a complètement transformé ma manière d\'apprendre. Les modules sont très bien structurés et les contenus sont de haute qualité. J\'apprécie particulièrement les fonctionnalités interactives qui rendent l\'apprentissage plus engageant et efficace. C\'est un outil indispensable pour tout étudiant en ingénierie.',
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'OUCHEIKH Med',
    description: 'En tant qu\'étudiant, l\'autoformation via l\'application de l\'ENSMR m\'a aidé à combler mes lacunes et à renforcer mes compétences dans des domaines spécifiques. Les cours sont bien expliqués et les exercices pratiques sont particulièrement utiles. Je recommande vivement cette plateforme à tous les étudiants en quête de réussite académique.',
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'KHOUY Chama',
    description: 'L\'autoformation via l\'application de l\'ENSMR m\'a aidé à combler mes lacunes et à renforcer mes compétences dans des domaines spécifiques. Les cours sont bien expliqués et les exercices pratiques sont particulièrement utiles. Je recommande vivement cette plateforme à tous les étudiants en quête de réussite académique.',
  },
  {
    img: 'https://via.placeholder.com/150',
    name: 'BITAR Achraf',
    description: 'La plateforme de formation en ligne de l\'ENSMR est exceptionnelle. Elle m\'a offert une flexibilité inestimable pour suivre mes cours malgré un emploi du temps chargé. Les vidéos explicatives, les quizzes et les forums de discussion sont autant d\'outils qui m\'ont aidé à mieux comprendre les concepts complexes. Bravo à l\'équipe pour cette initiative !',
  },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button prev">❮</button>
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button next">❯</button>
    </div>
  );
};

export default CarouselComponent;
