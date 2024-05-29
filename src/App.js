import "./App.css";
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth, AuthProvider } from './AuthContext';
import Accueil from "./Components/Accueil";
import A_propos from "./Components/A_propos";
import Cours from "./Components/Cours";
import Calendrier from "./Components/Calendrier";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Authentification from './Pages/Authentification';
import Forum from './Pages/Forum';
import Rechercher from './Components/Rechercher';
import Admin from "./Pages/Utilisateurs/Admin";
import Professeur from "./Pages/Utilisateurs/Professeur";

// Import for tronc-commun semesters
import TroncCommunSemestre1 from './Pages/tronc-commun/semestre1';
import TroncCommunSemestre2 from './Pages/tronc-commun/semestre2';

// Imports for the various semesters
import GénieIndustrielSemestre3 from './Pages/indus/semestre3';
import GénieIndustrielSemestre4 from './Pages/indus/semestre4';
import GénieIndustrielSemestre5 from './Pages/indus/semestre5';

import GénieInformatiqueSemestre3 from './Pages/info/semestre3';
import GénieInformatiqueSemestre4 from './Pages/info/semestre4';
import GénieInformatiqueSemestre5 from './Pages/info/semestre5';

import MaintenanceIndustrielleSemestre3 from './Pages/maintenance/semestre3';
import MaintenanceIndustrielleSemestre4 from './Pages/maintenance/semestre4';
import MaintenanceIndustrielleSemestre5 from './Pages/maintenance/semestre5';

import ElectromécaniqueSemestre3 from './Pages/electro/semestre3';
import ElectromécaniqueSemestre4 from './Pages/electro/semestre4';
import ElectromécaniqueSemestre5 from './Pages/electro/semestre5';

import EnvironnementSécuritéIndustrielleSemestre3 from './Pages/esi/semestre3';
import EnvironnementSécuritéIndustrielleSemestre4 from './Pages/esi/semestre4';
import EnvironnementSécuritéIndustrielleSemestre5 from './Pages/esi/semestre5';

import GénieProductiqueSemestre3 from './Pages/prod/semestre3';
import GénieProductiqueSemestre4 from './Pages/prod/semestre4';
import GénieProductiqueSemestre5 from './Pages/prod/semestre5';

import EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre3 from './Pages/efficacite/semestre3';
import EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre4 from './Pages/efficacite/semestre4';
import EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre5 from './Pages/efficacite/semestre5';

import GénieEnergétiqueSemestre3 from './Pages/energetique/semestre3';
import GénieEnergétiqueSemestre4 from './Pages/energetique/semestre4';
import GénieEnergétiqueSemestre5 from './Pages/energetique/semestre5';

import MatériauxContrôleQualitéSemestre3 from './Pages/mcq/semestre3';
import MatériauxContrôleQualitéSemestre4 from './Pages/mcq/semestre4';
import MatériauxContrôleQualitéSemestre5 from './Pages/mcq/semestre5';

import GénieCivilMinierSemestre3 from './Pages/civil/semestre3';
import GénieCivilMinierSemestre4 from './Pages/civil/semestre4';
import GénieCivilMinierSemestre5 from './Pages/civil/semestre5';

import AménagementExploitationSolsSousSolsSemestre3 from './Pages/ae3s/semestre3';
import AménagementExploitationSolsSousSolsSemestre4 from './Pages/ae3s/semestre4';
import AménagementExploitationSolsSousSolsSemestre5 from './Pages/ae3s/semestre5';

import ProcédésIndustrielsSemestre3 from './Pages/procedes/semestre3';
import ProcédésIndustrielsSemestre4 from './Pages/procedes/semestre4';
import ProcédésIndustrielsSemestre5 from './Pages/procedes/semestre5';

function App() {
  const { user, isAdmin, isProfesseur, isEtudiant } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/authentification" element={<Authentification />} />
        <Route path="/admin" element={user && isAdmin ? <Admin /> : <Navigate to="/authentification" />} />
        <Route path="/professeur" element={user && isProfesseur ? <Professeur /> : <Navigate to="/authentification" />} />

        {!user ? (
          <Route path="/" element={<Navigate to="/authentification" replace />} />
        ) : (
          <>
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/app" element={<MainApp isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path={`/${user.filiere}/semestre${user.niveau}`} element={<PageFiliereNiveau filiere={user.filiere} niveau={user.niveau} />} />
            <Route path="/accueil" element={<PageWithNavbar Component={Accueil} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/a-propos" element={<PageWithNavbar Component={A_propos} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/cours" element={<PageWithNavbar Component={Cours} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/calendrier" element={<PageWithNavbar Component={Calendrier} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/contact" element={<PageWithNavbar Component={Contact} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/rechercher" element={<PageWithNavbar Component={Rechercher} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/forum" element={<PageWithNavbar Component={Forum} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            

            {/*tronc-commun*/}
            <Route path="/tronc-commun/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/tronc-commun/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            {/* Génie Industriel Routes */}
            <Route path="/indus/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/indus/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/indus/semestre3" element={<PageWithNavbar Component={GénieIndustrielSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/indus/semestre4" element={<PageWithNavbar Component={GénieIndustrielSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/indus/semestre5" element={<PageWithNavbar Component={GénieIndustrielSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Génie Informatique Routes */}
            <Route path="/info/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/info/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/info/semestre3" element={<PageWithNavbar Component={GénieInformatiqueSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/info/semestre4" element={<PageWithNavbar Component={GénieInformatiqueSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/info/semestre5" element={<PageWithNavbar Component={GénieInformatiqueSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Maintenance Industrielle Routes */}
            <Route path="/maintenance/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/maintenance/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/maintenance/semestre3" element={<PageWithNavbar Component={MaintenanceIndustrielleSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/maintenance/semestre4" element={<PageWithNavbar Component={MaintenanceIndustrielleSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/maintenance/semestre5" element={<PageWithNavbar Component={MaintenanceIndustrielleSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Electromécanique Routes */}
            <Route path="/electro/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/electro/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/electro/semestre3" element={<PageWithNavbar Component={ElectromécaniqueSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/electro/semestre4" element={<PageWithNavbar Component={ElectromécaniqueSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/electro/semestre5" element={<PageWithNavbar Component={ElectromécaniqueSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Environnement Sécurité Industrielle Routes */}
            <Route path="/esi/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/esi/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/esi/semestre3" element={<PageWithNavbar Component={EnvironnementSécuritéIndustrielleSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/esi/semestre4" element={<PageWithNavbar Component={EnvironnementSécuritéIndustrielleSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/esi/semestre5" element={<PageWithNavbar Component={EnvironnementSécuritéIndustrielleSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Génie Productique Routes */}
            <Route path="/prod/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/prod/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/prod/semestre3" element={<PageWithNavbar Component={GénieProductiqueSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/prod/semestre4" element={<PageWithNavbar Component={GénieProductiqueSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/prod/semestre5" element={<PageWithNavbar Component={GénieProductiqueSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Efficacité Energétique Intégration Energies Renouvelables Routes */}
            <Route path="/efficacite/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/efficacite/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/efficacite/semestre3" element={<PageWithNavbar Component={EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/efficacite/semestre4" element={<PageWithNavbar Component={EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/efficacite/semestre5" element={<PageWithNavbar Component={EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Génie Energétique Routes */}
            <Route path="/energetique/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/energetique/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/energetique/semestre3" element={<PageWithNavbar Component={GénieEnergétiqueSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/energetique/semestre4" element={<PageWithNavbar Component={GénieEnergétiqueSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/energetique/semestre5" element={<PageWithNavbar Component={GénieEnergétiqueSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Matériaux Contrôle Qualité Routes */}
            <Route path="/mcq/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/mcq/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/mcq/semestre3" element={<PageWithNavbar Component={MatériauxContrôleQualitéSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/mcq/semestre4" element={<PageWithNavbar Component={MatériauxContrôleQualitéSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/mcq/semestre5" element={<PageWithNavbar Component={MatériauxContrôleQualitéSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Génie Civil Minier Routes */}
            <Route path="/civil/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/civil/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/civil/semestre3" element={<PageWithNavbar Component={GénieCivilMinierSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/civil/semestre4" element={<PageWithNavbar Component={GénieCivilMinierSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/civil/semestre5" element={<PageWithNavbar Component={GénieCivilMinierSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Aménagement Exploitation Sols Sous Sols Routes */}
            <Route path="/ae3s/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/ae3s/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/ae3s/semestre3" element={<PageWithNavbar Component={AménagementExploitationSolsSousSolsSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/ae3s/semestre4" element={<PageWithNavbar Component={AménagementExploitationSolsSousSolsSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/ae3s/semestre5" element={<PageWithNavbar Component={AménagementExploitationSolsSousSolsSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />

            {/* Procédés Industriels Routes */}
            <Route path="/procedes/semestre1" element={<PageWithNavbar Component={TroncCommunSemestre1} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/procedes/semestre2" element={<PageWithNavbar Component={TroncCommunSemestre2} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/procedes/semestre3" element={<PageWithNavbar Component={ProcédésIndustrielsSemestre3} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/procedes/semestre4" element={<PageWithNavbar Component={ProcédésIndustrielsSemestre4} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
            <Route path="/procedes/semestre5" element={<PageWithNavbar Component={ProcédésIndustrielsSemestre5} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

function MainApp({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className="App">
      <Accueil />
      <A_propos />
      <Cours />
      <Calendrier />
      <Contact />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/professeur" element={<isProfesseur />} />
        <Route path="/app" element={<Accueil />} />
        <Route path="/a-propos" element={<A_propos />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/calendrier" element={<Calendrier />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          Fermer
        </div>
        <Forum />
      </div>
    </div>
  );
}

function PageWithNavbar({ Component, toggleSidebar, isSidebarOpen }) {
  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <Component />
      <Footer />
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          Fermer
        </div>
        <Forum />
      </div>
    </div>
  );
}

function PageFiliereNiveau({ filiere, niveau }) {
  console.log('Filiere:', filiere);
  console.log('Niveau:', niveau);

  const filiereSemestres = {
    info: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: GénieInformatiqueSemestre3,
      S4: GénieInformatiqueSemestre4,
      S5: GénieInformatiqueSemestre5,
    },
    indus: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: GénieIndustrielSemestre3,
      S4: GénieIndustrielSemestre4,
      S5: GénieIndustrielSemestre5,
    },
    maintenance: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: MaintenanceIndustrielleSemestre3,
      S4: MaintenanceIndustrielleSemestre4,
      S5: MaintenanceIndustrielleSemestre5,
    },
    electro: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: ElectromécaniqueSemestre3,
      S4: ElectromécaniqueSemestre4,
      S5: ElectromécaniqueSemestre5,
    },
    esi: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: EnvironnementSécuritéIndustrielleSemestre3,
      S4: EnvironnementSécuritéIndustrielleSemestre4,
      S5: EnvironnementSécuritéIndustrielleSemestre5,
    },
    prod: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: GénieProductiqueSemestre3,
      S4: GénieProductiqueSemestre4,
      S5: GénieProductiqueSemestre5,
    },
    efficacite: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre3,
      S4: EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre4,
      S5: EfficacitéEnergétiqueIntégrationEnergiesRenouvelablesSemestre5,
    },
    energetique: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: GénieEnergétiqueSemestre3,
      S4: GénieEnergétiqueSemestre4,
      S5: GénieEnergétiqueSemestre5,
    },
    mcq: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: MatériauxContrôleQualitéSemestre3,
      S4: MatériauxContrôleQualitéSemestre4,
      S5: MatériauxContrôleQualitéSemestre5,
    },
    civil: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: GénieCivilMinierSemestre3,
      S4: GénieCivilMinierSemestre4,
      S5: GénieCivilMinierSemestre5,
    },
    ae3s: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: AménagementExploitationSolsSousSolsSemestre3,
      S4: AménagementExploitationSolsSousSolsSemestre4,
      S5: AménagementExploitationSolsSousSolsSemestre5,
    },
    procedes: {
      S1: TroncCommunSemestre1,
      S2: TroncCommunSemestre2,
      S3: ProcédésIndustrielsSemestre3,
      S4: ProcédésIndustrielsSemestre4,
      S5: ProcédésIndustrielsSemestre5,
    },
  };

  const SemestreComponent = filiereSemestres[filiere][`S${niveau}`];

  return SemestreComponent ? <SemestreComponent /> : <div>Composant non trouvé</div>;
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
