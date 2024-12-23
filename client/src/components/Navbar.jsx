import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: " + New Date", path: "/add" },
    { label: "Catalog", path: "/projects" },
    { label: "Completed", path: "/contact" },
  ];

  return (
    <Box className="navbar">
      <AppBar className="navbar" elevation="0">
        <Toolbar className="navbar">
          <Typography className="navbar" component="div">
            <NavLink className="nav-logo" to="/" activeClassName="active" end>
              ♥︎♥︎♥︎
            </NavLink>
          </Typography>

          {/* Desktop Links */}
          <Box className="desktop-nav">
            {navLinks.map((link) => (
              <Button
                className="nav-button"
                key={link.label}
                disableRipple
              >
                <NavLink
                  className="nav-link"
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu for Mobile */}
          <Box className="mobile-nav">
            <IconButton
              className="nav-button"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon/>
            </IconButton>
          </Box>

          {/* Mobile Links */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: "250px" }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton>
                      <NavLink
                        className="drawer-link"
                        to={link.path}
                      >
                        <ListItemText primary={link.label} />
                      </NavLink>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
