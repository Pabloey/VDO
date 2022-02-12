import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Alert } from "@mui/material";

export default function Drawer() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: "grid", justifyContent: "start", paddingLeft: "1%", position: "fixed" }}>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <MenuIcon style={{ transform: "scale(1.5)" }}></MenuIcon>
      </IconButton>
      <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => {}}>
        <div style={{ width: "200px" }}>
          <Box textAlign="center" p={2}>
            Menu Items
          </Box>
          <List>
            <ListItem button onClick={() => {}}>
              <ListItemText primary="User" />
            </ListItem>
            <ListItem button onClick={() => {}}>
              <ListItemText primary="Videos" />
            </ListItem>
            <ListItem button onClick={() => {}}>
              <ListItemText primary="Comments" />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
