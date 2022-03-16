import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  <a href="/">Home</a>,
  <a href="/docs">Docs</a>,
  <a href="https://www.npmjs.com/package/react-federated-module-loader">
    npm.js
  </a>,
  <a href="https://www.linkedin.com/in/nicholas-galante-1963041a2/">
    LinkedIn
  </a>,
  <a href="https://github.com/nicholasgalante1997">Github</a>,
];

// const ResponsiveAppBar = () => {
export default function ButtonAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            react-federated-module-loader
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menuButton"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="p"
            noWrap
            component="div"
            fontFamily={"Noto Sans, sans-serif"}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            react-federated-module-loader
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button id="homeButton" color="inherit" href="/">
              <HomeIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" color="transparent">
//         <Toolbar>
//           <IconButton
// id="menuButton"
// size="large"
// edge="start"
// color="inherit"
// aria-label="menu"
// sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
//             react-federated-module-loader
//           </Typography>
// <Button id="homeButton" color="inherit" href="/">
//   <HomeIcon />
// </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
