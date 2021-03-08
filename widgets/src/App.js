import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Routes></Routes>
      </Router>
    </>
  );
};

export default App;
