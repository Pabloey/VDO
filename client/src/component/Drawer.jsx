import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const signOut = () => {
    localStorage.clear();
    setOpen(false);
  };

  return (
    <div style={{ display: "grid", justifyContent: "start", paddingLeft: "1%" }}>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <MenuIcon style={{ transform: "scale(1.5)", position: "sticky" }}></MenuIcon>
      </IconButton>
      <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => {}}>
        <div style={{ width: "200px" }}>
          <Box textAlign="center" p={2}>
            Logo
          </Box>
          {localStorage.getItem("user") ? (
            <List>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <ListItem button onClick={() => setOpen(false)}>
                  <HomeIcon />
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/user" style={{ textDecoration: "none", color: "black" }}>
                <ListItem button onClick={() => setOpen(false)}>
                  <PersonIcon />
                  <ListItemText primary="User" />
                </ListItem>
              </Link>
              <Link to="/upload" style={{ textDecoration: "none", color: "black" }}>
                <ListItem button onClick={() => setOpen(false)}>
                  <UploadIcon />
                  <ListItemText primary="Upload" />
                </ListItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                <ListItem
                  button
                  onClick={() => {
                    signOut();
                  }}
                >
                  <LogoutIcon />
                  <ListItemText primary="Sign Out" />
                </ListItem>
              </Link>
            </List>
          ) : (
            <List>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <ListItem button onClick={() => setOpen(false)}>
                  <HomeIcon />
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                <ListItem button onClick={() => setOpen(false)}>
                  <LoginIcon /> <ListItemText primary="Sign Up / Sign In" />
                </ListItem>
              </Link>
            </List>
          )}
        </div>
      </SwipeableDrawer>
    </div>
  );
}
