
import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaUsers,
  FaCalendarAlt,
  FaFilm,
  FaThumbsUp,
  FaHome,
  FaUserSecret,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt ,
  FaSignOutAlt,
  FaRegCalendarCheck,
  FaPowerOff,
  FaTimes
} from 'react-icons/fa';
import ApexCharts from 'apexcharts';
import Logo from '../../Assets/Logo.svg';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const options = {
      series: [
        { name: "Étudiants inscrits", data: [120, 130, 150, 170, 160, 180, 200, 210, 220] },
        { name: "Cours complétés", data: [80, 95, 100, 110, 105, 115, 120, 125, 130] },
        { name: "Taux de réussite (%)", data: [75, 78, 80, 82, 80, 85, 87, 90, 88] },
      ],
      chart: { type: "bar", height: 250, sparkline: { enabled: true } },
      plotOptions: { bar: { horizontal: false, columnWidth: "55%", endingShape: "rounded" } },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: { categories: ["Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct"] },
      yaxis: { title: { text: "Nombre d'étudiants / %" } },
      fill: { opacity: 1 },
      tooltip: { 
        y: { 
          formatter: (val, { seriesIndex }) => {
            if (seriesIndex === 2) {
              return `${val}%`;
            }
            return `${val} étudiants`;
          } 
        } 
      },
    };
    // Clean up any existing charts
    const existingChart = ApexCharts.exec('apex1', 'destroy');
    if (existingChart) {
      existingChart.destroy();
    }
    const chart = new ApexCharts(document.querySelector("#apex1"), options);
    chart.render();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav_icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className="navbar__left">
          <a className="active_link" href="#">Administrateur</a>
        </div>
      </nav>

      <main>
        <div className="main__container">
          <div className="main__title">
          <img src={Logo} alt="logo" />
      <div className="main__greeting">
              <p>Bienvenue sur votre tableau de bord admin</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <FaUsers className="fa-2x text-lightblue" />
              <div className="card_inner">
                <p className="text-primary-p">Nombre d'apprenants</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>

            <div className="card">
              <FaCalendarAlt className="fa-2x text-red" />
              <div className="card_inner">
                <p className="text-primary-p">Heures de formation</p>
                <span className="font-bold text-title">2467</span>
              </div>
            </div>

            <div className="card">
              <FaFilm className="fa-2x text-yellow" />
              <div className="card_inner">
                <p className="text-primary-p">Cours disponibles</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>

            <div className="card">
              <FaThumbsUp className="fa-2x text-green" />
              <div className="card_inner">
                <p className="text-primary-p">Activité quotidienne</p>
                <span className="font-bold text-title">645</span>
              </div>
            </div>
          </div>

          <div className="charts">
            <div className="charts__left">
              <div className="charts_left_title">
                <div>
                  <h1>Statistiques de formation</h1>
                  <p>Rabat, Maroc</p>
                </div>
              </div>
              <div id="apex1"></div>
            </div>

            <div className="charts__right">
              <div className="charts_right_title">
                <div>
                  <h1>Rapports de statistiques</h1>
                  <p>Ecole Nationale Supérieure des Mines de Rabat ENSMR (Ex ENIM)</p>
                </div>
              </div>

              <div className="charts_right_cards">
                <div className="card1">
                  <h1> Progression moyenne</h1>
                  <p>85%</p>
                </div>

                <div className="card2">
                  <h1>Cours complétés</h1>
                  <p>12,340</p>
                </div>

                <div className="card3">
                  <h1>Apprenants actifs</h1>
                  <p>3900</p>
                </div>

                <div className="card4">
                  <h1>Certifications obtenues</h1>
                  <p>1881</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="sidebar" className={sidebarOpen ? "sidebar_responsive" : ""}>
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={Logo} alt="logo" />
          </div>
          <FaTimes onClick={closeSidebar} id="sidebarIcon" />
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <FaHome />
            <a href="#">Tableau de bord</a>
          </div>
          <h2>GESTION UTILISATEURS</h2>
          <div className="sidebar__link">
            <FaUserSecret />
            <a href="#">Administrateurs</a>
          </div>
          <div className="sidebar__link">
            <FaUserGraduate  />
            <a href="#">Étudiants</a>
          </div>
          <div className="sidebar__link">
            <FaChalkboardTeacher  />
            <a href="#">Professeurs</a>
          </div>

          <h2>GESTION DOCUMENTS</h2>
          <div className="sidebar__link">
            <FaFileAlt />
            <a href="#">Documents ajoutés</a>
          </div>
          <div className="sidebar__link">
            <FaSignOutAlt />
            <a href="#">Programmes d'autoformation ajoutés</a>
          </div>
          <div className="sidebar__link">
            <FaRegCalendarCheck />
            <a href="#">En attente de validation</a>
          </div>
        
          <div className="sidebar__logout">
            <FaPowerOff />
            <a href="#">Déconnexion</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
