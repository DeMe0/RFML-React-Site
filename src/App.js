import React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import customTheme from "./assets/theme";
import Main from "./components/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
