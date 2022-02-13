import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const signOut = () => {
    localStorage.clear();
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
              <ListItem button onClick={() => {}}>
                <Link to="/">
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
              <ListItem button onClick={() => {}}>
                <ListItemText primary="User" />
              </ListItem>
              <ListItem button onClick={() => {}}>
                <ListItemText primary="Upload" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  signOut();
                }}
              >
                <Link to="/login">
                  <ListItemText primary="Sign Out" />
                </Link>
              </ListItem>
            </List>
          ) : (
            <List>
              <Link to="/login">
                <ListItemText primary="Sign Up / Sign In" />
              </Link>
            </List>
          )}
        </div>
      </SwipeableDrawer>
    </div>
  );
}
