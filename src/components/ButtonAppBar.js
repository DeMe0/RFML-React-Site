import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            id="menuButton"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Federated Module Loader
          </Typography>
          <Button id="homeButton" color="inherit" href="/">
            <HomeIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
