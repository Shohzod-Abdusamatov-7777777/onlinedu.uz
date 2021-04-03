import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";

const App = () => {
 

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Routes/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
