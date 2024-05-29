import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaHome,
  FaFileAlt,
  FaComments,
  FaUsers,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaRegCalendarCheck,
  FaPowerOff,
  FaTimes
} from 'react-icons/fa';
import ApexCharts from 'apexcharts';
import Logo from '../../Assets/Logo.svg';

const ProfesseurDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const options = {
      series: [
        { name: "Cours créés", data: [10, 15, 20, 25, 30, 35, 40, 45, 50] },
        { name: "Étudiants encadrés", data: [100, 120, 140, 160, 180, 200, 220, 240, 260] },
        { name: "Évaluations effectuées", data: [30, 35, 40, 45, 50, 55, 60, 65, 70] },
      ],
      chart: { type: "bar", height: 250, sparkline: { enabled: true } },
      plotOptions: { bar: { horizontal: false, columnWidth: "55%", endingShape: "rounded" } },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] },
      yaxis: { title: { text: "Quantité" } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: (val) => `${val}` } },
    };

    const chart = new ApexCharts(document.querySelector("#professorChart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
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
          <a className="active_link" href="#">Professeur</a>
        </div>
      </nav>

      <main>
        <div className="main__container">
          <div className="main__title">
            <img src={Logo} alt="logo" />
            <div className="main__greeting">
              <p>Bienvenue sur votre tableau de bord professeur</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <FaUsers className="fa-2x text-lightblue" />
              <div className="card_inner">
                <p className="text-primary-p">Étudiants encadrés</p>
                <span className="font-bold text-title">260</span>
              </div>
            </div>

            <div className="card">
              <FaChalkboardTeacher className="fa-2x text-red" />
              <div className="card_inner">
                <p className="text-primary-p">Cours créés</p>
                <span className="font-bold text-title">50</span>
              </div>
            </div>

            <div className="card">
              <FaRegCalendarCheck className="fa-2x text-yellow" />
              <div className="card_inner">
                <p className="text-primary-p">Évaluations effectuées</p>
                <span className="font-bold text-title">70</span>
              </div>
            </div>

            <div className="card">
              <FaFileAlt className="fa-2x text-green" />
              <div className="card_inner">
                <p className="text-primary-p">Documents partagés</p>
                <span className="font-bold text-title">120</span>
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
              <div id="professorChart"></div>
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
          <h2>GESTION</h2>
          <div className="sidebar__link">
            <FaFileAlt />
            <a href="#">Gérer les documents</a>
          </div>
          <div className="sidebar__link">
            <FaComments />
            <a href="#">Feedback</a>
          </div>
          <div className="sidebar__link">
            <FaUsers />
            <a href="#">Communications</a>
          </div>
          <div className="sidebar__link">
            <FaChalkboardTeacher />
            <a href="#">Collaborations</a>
          </div>
          <div className="sidebar__link">
            <FaRegCalendarCheck />
            <a href="#">Ajouter une formation</a>
          </div>
          <div className="sidebar__link">
            <FaSignOutAlt />
            <a href="#">Ajouter une autoformation</a>
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

export default ProfesseurDashboard;
