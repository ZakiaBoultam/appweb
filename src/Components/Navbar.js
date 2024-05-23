import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsSearch } from 'react-icons/bs';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleSidebarMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuOptions = [
    {
      text: "Accueil",
      icon: <HomeIcon />,
      path: "/app",
    },
    {
      text: "Cours",
      icon: <LibraryBooksIcon />,
      path: "/cours",
    },
    {
      text: "A propos",
      icon: <InfoIcon />,
      path: "/a-propos",
    },
    {
      text: "Calendrier",
      icon: <EventAvailableIcon />,
      path: "/calendrier",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
    {
      text: "Rechercher",
      icon: <BsSearch />,
      path: "/rechercher",
    },
    {
      text: "Forum Interactif",
      icon: <ForumIcon />,
      action: () => {
        console.log("Forum Interactif clicked"); // Ajouter ce log
        toggleSidebar();
      },
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="/app">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
        <Link to="/cours">Cours</Link>
        <Link to="/calendrier">Calendrier</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/rechercher"><BsSearch className="navbar-search-icon" /></Link>
        <button onClick={toggleSidebar} className="primary-button">Forum Interactif</button> {/* Ajout du bouton */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={toggleSidebarMenu} />
      </div>
      <Drawer open={openMenu} onClose={toggleSidebarMenu} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleSidebarMenu}
          onKeyDown={toggleSidebarMenu}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                {item.path ? (
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton onClick={item.action}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
