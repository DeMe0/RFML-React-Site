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
  },
});

export default customTheme;
