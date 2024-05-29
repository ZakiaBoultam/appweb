import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fr } from 'date-fns/locale';
import calendrierImage from '../Assets/Calendrier_ENSMR.png'; // Import de l'image
import CarouselComponent from './CarouselComponent';
import { SiPinboard } from 'react-icons/si';

const Calendrier = () => {
  const [startDate, setStartDate] = useState(new Date());

  // Mise à jour de la date actuelle toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setStartDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  return (
    <div className="calendrier-section">
      <div className="calendrier-section-top">
        <p className="primary-subheading">Calendrier</p>
        <h1 className="primary-heading">Planifiez Votre Année :</h1>
        <p className="primary-text">
          Restez informé et organisé avec notre calendrier scolaire. Consultez
          les dates importantes des cours, des examens, des vacances et des
          événements à venir pour planifier votre année académique en toute
          sérénité.
        </p>
      </div>
      <div className="calendrier-section-bottom">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          inline
          locale={fr}
          calendarClassName="custom-calendar"
        />
      </div>
      <div className="download-section">
        <a href={calendrierImage} download="Calendrier_ENSMR.png" className="secondary-button">
          Cliquez pour télécharger le calendrier ENSMR 2024
        </a>
      </div>
      <div class="space"></div>
      <p className="primary-subheading">Témoiganges</p>
      <h1 className="primary-heading">Découvrez les témoignages inspirants de nos élèves et professeurs :</h1>
      <div className="carousel-wrapper">
          <CarouselComponent />
      </div>
    </div>
  );
};

export default Calendrier;
