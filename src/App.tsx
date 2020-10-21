import React, { Suspense } from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./ui/styles";
import { theme } from "c4u-web-components";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Routes } from "./router";

import { SessionProvider } from "./contexts/session.context";
import { VehicleRegisterProvider } from "./contexts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider>
          <VehicleRegisterProvider>
            <Routes />
          </VehicleRegisterProvider>
        </SessionProvider>
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
