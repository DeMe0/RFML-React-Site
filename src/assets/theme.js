import {} from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { purple, orange, red } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = orange[500];
const dangerColor = red[900];

const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  typography: {
    fontFamily: "Noto Sans, sans-serif",
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: "#111011",
          color: "#8D9AA3",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#2C2C2C",
          textAlign: "center",
          transition: "0.5s",
          backgroundSize: "200% auto",
          color: "white",
          border: "1px solid #121212",
          boxShadow: "0 0 10px #eee",
          borderRadius: "10px",
          textDecoration: "none",
        },
      },
    },
  },
});

export default customTheme;
