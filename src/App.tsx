import React from "react";
import { theme } from "./theme";
import "./App.css";
import { Layout } from "./layouts/Layout";
import { MainPage } from "./pages/Main/MainPage";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <MainPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
